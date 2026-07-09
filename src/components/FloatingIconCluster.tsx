import { services } from "@/data/services";
import { serviceIcons } from "@/components/icons/ServiceIcons";
import Reveal from "@/components/Reveal";

const layout = [
  { top: "6%", left: "38%", size: "h-16 w-16", iconSize: "h-8 w-8", delay: 0 },
  { top: "18%", left: "4%", size: "h-12 w-12", iconSize: "h-6 w-6", delay: 0.6 },
  { top: "14%", left: "72%", size: "h-14 w-14", iconSize: "h-7 w-7", delay: 1.2 },
  { top: "48%", left: "0%", size: "h-11 w-11", iconSize: "h-5 w-5", delay: 1.8 },
  { top: "58%", left: "78%", size: "h-16 w-16", iconSize: "h-8 w-8", delay: 0.3 },
  { top: "82%", left: "30%", size: "h-12 w-12", iconSize: "h-6 w-6", delay: 0.9 },
  { top: "78%", left: "62%", size: "h-11 w-11", iconSize: "h-5 w-5", delay: 1.5 },
] as const;

export default function FloatingIconCluster() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {services.slice(0, layout.length).map((service, i) => {
        const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
        const spot = layout[i];
        return (
          <div
            key={service.slug}
            className="absolute"
            style={{ top: spot.top, left: spot.left }}
          >
            <Reveal delay={i * 90}>
              <div
                className={`animate-float-bob flex ${spot.size} items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-gold-light backdrop-blur-md`}
                style={{ animationDelay: `${spot.delay}s` }}
              >
                <Icon className={spot.iconSize} />
              </div>
            </Reveal>
          </div>
        );
      })}
    </div>
  );
}
