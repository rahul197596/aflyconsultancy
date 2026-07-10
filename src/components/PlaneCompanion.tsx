"use client";

import { useEffect, useRef } from "react";

type TrailDot = { x: number; y: number; life: number };

/**
 * A page-wide companion jet on a fixed canvas overlay.
 * Behaviors: follows the cursor/finger, orbits hovered links/buttons,
 * swoops with scroll velocity, dashes to taps, patrols the viewport when
 * idle, and does a loop-the-loop when a `plane-celebrate` event fires
 * (chapter changes, visa stamp).
 */
export default function PlaneCompanion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Classic top-view jet silhouette (24x24 viewBox, nose pointing up)
    const JET = new Path2D(
      "M22 16v-2l-8.5-5V3.5C13.5 2.67 12.83 2 12 2s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1.25L16 22v-1.5L13.5 19v-5.5L22 16z"
    );

    let w = 0;
    let h = 0;
    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const target = { x: w * 0.75, y: h * 0.3 };
    const plane = { x: w * 0.5, y: h * 0.35, angle: 0 };
    const trail: TrailDot[] = [];
    let lastInput = 0;
    let boost = 0;
    let swoop = 0;
    let lastScrollY = window.scrollY;
    let orbitEl: Element | null = null;
    let orbitAngle = 0;
    let celebrate = -1;
    let celebrateCx = 0;
    let celebrateCy = 0;
    let t = 0;
    let raf = 0;

    const canHover = window.matchMedia("(hover: hover)").matches;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      lastInput = performance.now();
    };
    const onDown = (e: PointerEvent) => {
      onMove(e);
      boost = 1;
    };
    const onScroll = () => {
      const dy = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      swoop = Math.max(-140, Math.min(140, swoop + dy * 0.3));
      lastInput = performance.now();
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target instanceof Element ? e.target.closest("a, button") : null;
      orbitEl = el;
      if (el) lastInput = performance.now();
    };
    const onCelebrate = () => {
      if (celebrate < 0) {
        celebrate = 0;
        celebrateCx = plane.x;
        celebrateCy = plane.y;
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    if (canHover) document.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("plane-celebrate", onCelebrate);
    window.addEventListener("resize", resize);

    const loop = () => {
      t += 0.016;
      let tx = target.x;
      let ty = target.y;

      if (celebrate >= 0) {
        celebrate += 0.022;
        if (celebrate >= 1) {
          celebrate = -1;
        } else {
          const a = celebrate * Math.PI * 3 - Math.PI / 2;
          tx = celebrateCx + Math.cos(a) * 52;
          ty = celebrateCy + Math.sin(a) * 52;
        }
      } else if (canHover && orbitEl && document.contains(orbitEl)) {
        const r = orbitEl.getBoundingClientRect();
        orbitAngle += 0.07;
        const rad = Math.max(r.width, r.height) / 2 + 28;
        tx = r.left + r.width / 2 + Math.cos(orbitAngle) * rad;
        ty = r.top + r.height / 2 + Math.sin(orbitAngle) * rad * 0.55;
      } else if (performance.now() - lastInput > 3500) {
        tx = w * (0.5 + 0.38 * Math.sin(t * 0.35));
        ty = h * (0.4 + 0.3 * Math.sin(t * 0.77 + 1.3));
      }

      ty += swoop;
      swoop *= 0.9;
      tx = Math.max(24, Math.min(w - 24, tx));
      ty = Math.max(24, Math.min(h - 24, ty));

      const k = 0.05 + boost * 0.12 + (celebrate >= 0 ? 0.1 : 0);
      boost *= 0.94;
      const dx = tx - plane.x;
      const dy = ty - plane.y;
      plane.x += dx * k;
      plane.y += dy * k;

      let bank = 0;
      if (Math.hypot(dx, dy) > 2) {
        const desired = Math.atan2(dy, dx);
        let da = desired - plane.angle;
        while (da > Math.PI) da -= Math.PI * 2;
        while (da < -Math.PI) da += Math.PI * 2;
        plane.angle += da * 0.14;
        bank = Math.max(-0.3, Math.min(0.3, da * 0.9));
      }

      trail.push({ x: plane.x, y: plane.y, life: 1 });
      const maxTrail = celebrate >= 0 || boost > 0.2 ? 90 : 60;
      while (trail.length > maxTrail) trail.shift();

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < trail.length; i++) {
        const dot = trail[i];
        dot.life -= 0.012;
        if (dot.life <= 0 || i % 3 !== 0) continue;
        ctx.globalAlpha = dot.life * 0.5;
        ctx.fillStyle = "#f0b429";
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.7, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      ctx.save();
      ctx.translate(plane.x, plane.y);
      ctx.rotate(plane.angle + Math.PI / 2);
      // banking compresses the wings (local x-axis)
      ctx.scale(1.55 * (1 - Math.abs(bank) * 0.45), 1.55);
      ctx.translate(-12, -12);
      ctx.shadowColor = "rgba(255, 209, 102, 0.5)";
      ctx.shadowBlur = 10;
      ctx.fillStyle = "#ffd166";
      ctx.fill(JET);
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(15, 23, 42, 0.45)";
      ctx.lineWidth = 1;
      ctx.stroke(JET);
      ctx.restore();

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("scroll", onScroll);
      if (canHover) document.removeEventListener("mouseover", onOver);
      window.removeEventListener("plane-celebrate", onCelebrate);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-30"
      aria-hidden="true"
    />
  );
}
