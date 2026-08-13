import { useEffect, useRef, useState } from "react";
import { STATS } from "../config";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              // Ease-out cubic for a natural count-up
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

/** Editable trust statistics with animated counters. */
export default function Stats() {
  return (
    <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:mt-20 lg:grid-cols-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="bg-navy-950/80 px-6 py-7 text-center backdrop-blur-sm"
        >
          <dd className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            <Counter value={stat.value} suffix={stat.suffix} />
          </dd>
          <dt className="mt-1.5 text-xs font-semibold tracking-widest text-slate-400 uppercase">
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
