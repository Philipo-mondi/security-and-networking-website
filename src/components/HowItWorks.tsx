import { ClipboardList, Headset, MapPin, Wrench } from "lucide-react";
import { STEPS } from "../config";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const STEP_ICONS = [ClipboardList, MapPin, Wrench, Headset];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="From First Call to Full Protection"
            description="A simple, transparent process designed around your business — no jargon, no surprises, just professional security and networking done right."
          />
        </Reveal>

        {/* Vertical timeline on mobile, horizontal on desktop */}
        <ol className="relative mt-16">
          {/* Connecting line: vertical (mobile) / horizontal (desktop) */}
          <div
            className="absolute top-2 bottom-2 left-[26px] w-px bg-gradient-to-b from-brand-300 via-brand-400 to-emerald-400 lg:top-[30px] lg:right-[12%] lg:bottom-auto lg:left-[12%] lg:h-px lg:w-auto lg:bg-gradient-to-r"
            aria-hidden="true"
          />

          <div className="space-y-10 lg:grid lg:grid-cols-4 lg:space-y-0">
            {STEPS.map((step, i) => {
              const Icon = STEP_ICONS[i % STEP_ICONS.length];
              return (
                <Reveal key={step.number} delay={i * 120}>
                  <li className="relative flex items-start gap-5 lg:flex-col lg:items-center lg:text-center">
                    {/* Node */}
                    <span className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-brand-200 bg-white shadow-lg shadow-brand-900/10 ring-4 ring-brand-50">
                      <Icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
                    </span>

                    <div className="lg:mt-5 lg:px-2">
                      <p className="font-display text-xs font-extrabold tracking-[0.25em] text-brand-600">
                        STEP {step.number}
                      </p>
                      <h3 className="mt-1.5 font-display text-lg font-bold text-navy-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600 lg:mx-auto">
                        {step.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </div>
        </ol>

        <Reveal delay={200}>
          <p className="mt-14 text-center text-sm text-slate-500">
            Ready to get started?{" "}
            <a href="#quote" className="font-semibold text-brand-600 underline-offset-4 hover:underline">
              Book your free site assessment today
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
