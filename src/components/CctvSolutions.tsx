import {
  Briefcase,
  Factory,
  GraduationCap,
  HardHat,
  Home,
  Hotel,
  ShoppingCart,
  Store,
  Utensils,
  Warehouse,
} from "lucide-react";
import { CCTV_SOLUTIONS } from "../config";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const SOLUTION_ICONS = [
  Home,
  ShoppingCart,
  Store,
  Briefcase,
  Warehouse,
  GraduationCap,
  Utensils,
  Hotel,
  Factory,
  HardHat,
];

export default function CctvSolutions() {
  return (
    <section id="solutions" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="CCTV Solutions"
            title="Security Solutions for Every Premises"
            description="Every business faces different security challenges. From a small shop to a large industrial site, we design CCTV systems that match the risks, the layout and the budget."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CCTV_SOLUTIONS.map((solution, i) => {
            const Icon = SOLUTION_ICONS[i % SOLUTION_ICONS.length];
            return (
              <Reveal key={solution.title} delay={Math.min(i * 50, 300)} className="h-full">
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-xl hover:shadow-navy-900/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-navy-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-300 group-hover:from-brand-600 group-hover:to-brand-500 group-hover:text-white group-hover:ring-transparent">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-900">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{solution.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
