import {
  BadgeCheck,
  Briefcase,
  Cpu,
  Headset,
  HeartHandshake,
  RefreshCw,
  SlidersHorizontal,
  Wallet,
  Zap,
} from "lucide-react";
import { WHY_US } from "../config";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const WHY_ICONS = [
  BadgeCheck,
  Cpu,
  SlidersHorizontal,
  Headset,
  Zap,
  Briefcase,
  Wallet,
  RefreshCw,
  HeartHandshake,
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div className="bg-grid-dark absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            dark
            eyebrow="Why Choose Us"
            title="The Security Partner Businesses Trust"
            description="You're not just buying cameras and cables — you're investing in the safety of your business. Here's why organizations choose us and stay with us."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => {
            const Icon = WHY_ICONS[i % WHY_ICONS.length];
            return (
              <Reveal key={item.title} delay={Math.min(i * 60, 300)} className="h-full">
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.07]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/25 to-brand-700/25 text-brand-300 ring-1 ring-brand-400/20 transition-colors duration-300 group-hover:text-brand-200">
                    <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
