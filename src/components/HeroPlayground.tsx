"use client";

import { useEffect, useRef } from "react";

type TrailDot = { x: number; y: number; life: number };

export default function HeroPlayground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const section = canvas.parentElement;
    if (!section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const rect = section.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Classic top-view jet silhouette (24x24 viewBox, nose pointing up)
    const JET = new Path2D(
      "M22 16v-2l-8.5-5V3.5C13.5 2.67 12.83 2 12 2s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1.25L16 22v-1.5L13.5 19v-5.5L22 16z"
    );

    const target = { x: w * 0.68, y: h * 0.3 };
    const plane = { x: w * 0.5, y: h * 0.4, angle: 0 };
    const trail: TrailDot[] = [];
    let lastInput = 0;
    let t = 0;
    let raf = 0;
    let visible = true;

    const onMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      lastInput = performance.now();
    };
    section.addEventListener("pointermove", onMove, { passive: true });
    section.addEventListener("pointerdown", onMove, { passive: true });

    const loop = () => {
      raf = 0;
      if (!visible) return;
      t += 0.016;

      if (performance.now() - lastInput > 2500) {
        target.x = w * (0.5 + 0.36 * Math.sin(t * 0.4));
        target.y = h * (0.34 + 0.17 * Math.sin(t * 0.9 + 1.2));
      }

      const dx = target.x - plane.x;
      const dy = target.y - plane.y;
      plane.x += dx * 0.05;
      plane.y += dy * 0.05;
      if (Math.hypot(dx, dy) > 2) {
        const desired = Math.atan2(dy, dx);
        let da = desired - plane.angle;
        while (da > Math.PI) da -= Math.PI * 2;
        while (da < -Math.PI) da += Math.PI * 2;
        plane.angle += da * 0.12;
      }

      trail.push({ x: plane.x, y: plane.y, life: 1 });
      if (trail.length > 70) trail.shift();

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < trail.length; i++) {
        const dot = trail[i];
        dot.life -= 0.011;
        if (dot.life <= 0 || i % 3 !== 0) continue;
        ctx.globalAlpha = dot.life * 0.55;
        ctx.fillStyle = "#ffd166";
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.7, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      ctx.save();
      ctx.translate(plane.x, plane.y);
      // JET path points up; plane.angle is measured along +x
      ctx.rotate(plane.angle + Math.PI / 2);
      ctx.scale(1.6, 1.6);
      ctx.translate(-12, -12);
      ctx.shadowColor = "rgba(255, 209, 102, 0.55)";
      ctx.shadowBlur = 10;
      ctx.fillStyle = "#ffd166";
      ctx.fill(JET);
      ctx.restore();

      raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(loop);
    });
    io.observe(section);
    raf = requestAnimationFrame(loop);

    window.addEventListener("resize", resize);
    return () => {
      visible = false;
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerdown", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
}
