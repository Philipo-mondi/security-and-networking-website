import { ArrowRight, Check, Star } from "lucide-react";
import { PACKAGES } from "../config";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Service Packages"
            title="Flexible Packages for Every Business"
            description="Every premises is different, so every quote is tailored. These packages are a starting point — we'll customize the right solution for your security needs and budget."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {PACKAGES.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 120} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ${
                  pkg.popular
                    ? "border border-brand-400/30 bg-gradient-to-b from-navy-900 to-navy-950 shadow-2xl shadow-navy-900/40 lg:-my-4 lg:py-12"
                    : "border border-slate-200 bg-white shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/10"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-1.5 text-[11px] font-bold tracking-widest text-white uppercase shadow-lg shadow-brand-900/40">
                    <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                    Most Popular
                  </span>
                )}

                <h3
                  className={`font-display text-xl font-bold ${pkg.popular ? "text-white" : "text-navy-900"}`}
                >
                  {pkg.name}
                </h3>
                <p className={`mt-2 text-sm ${pkg.popular ? "text-slate-300" : "text-slate-500"}`}>
                  {pkg.audience}
                </p>

                <ul className={`mt-6 mb-8 space-y-3 ${pkg.popular ? "" : ""}`}>
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          pkg.popular
                            ? "bg-brand-500/20 text-brand-300"
                            : "bg-emerald-50 text-emerald-600"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className={pkg.popular ? "text-slate-200" : "text-slate-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href="#quote"
                    className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-950/60 hover:from-brand-500 hover:to-brand-400"
                        : "border border-navy-900 bg-white text-navy-900 hover:bg-navy-900 hover:text-white"
                    }`}
                  >
                    Request a Quote
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                  <p
                    className={`mt-4 text-center text-xs ${pkg.popular ? "text-slate-400" : "text-slate-400"}`}
                  >
                    Free consultation · No obligation
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
