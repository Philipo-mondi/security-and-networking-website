import {
  ArrowRight,
  Check,
  Cctv,
  Headset,
  MessageCircle,
  MonitorCheck,
  Network,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { COMPANY, SERVICES } from "../config";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const SERVICE_ICONS: Record<string, typeof Cctv> = {
  "cctv-installation": Cctv,
  "cctv-management": MonitorCheck,
  "business-security": ShieldCheck,
  networking: Network,
  "cctv-maintenance": Wrench,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-50 py-20 sm:py-24">
      <div className="bg-grid-light pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Complete Security & Networking Services"
            description="From a single shop camera to a full corporate surveillance and network infrastructure — we design, install, configure and support systems that protect your business and keep it connected."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.id] ?? ShieldCheck;
            const featured = service.featured;

            return (
              <Reveal key={service.id} delay={Math.min(i * 80, 320)} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300 ${
                    featured
                      ? "border border-brand-400/30 bg-gradient-to-b from-navy-900 to-navy-950 shadow-2xl shadow-navy-900/40"
                      : "border border-slate-200 bg-white shadow-sm hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-navy-900/10"
                  }`}
                >
                  {featured && (
                    <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-3 py-1 text-[11px] font-bold tracking-widest text-white uppercase shadow-lg shadow-brand-900/40">
                      Most Popular
                    </span>
                  )}

                  <div className="flex items-start justify-between">
                    <span
                      className={`flex h-13 w-13 items-center justify-center rounded-2xl ${
                        featured
                          ? "bg-white/10 text-brand-300"
                          : "bg-brand-50 text-brand-600"
                      }`}
                    >
                      <Icon className="h-6.5 w-6.5" aria-hidden="true" />
                    </span>
                    <span
                      className={`text-xs font-bold tracking-widest uppercase ${
                        featured ? "text-slate-500" : "text-slate-400"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3
                    className={`mt-5 font-display text-xl font-bold ${
                      featured ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${featured ? "text-slate-300" : "text-slate-600"}`}>
                    {service.description}
                  </p>

                  <ul className={`mt-5 space-y-2.5 ${featured ? "mb-6" : "mb-7"}`}>
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <span
                          className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                            featured ? "bg-brand-500/20 text-brand-300" : "bg-emerald-50 text-emerald-600"
                          }`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span className={featured ? "text-slate-200" : "text-slate-600"}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    {featured ? (
                      <a
                        href="#quote"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-950/60 transition-all duration-300 hover:from-brand-500 hover:to-brand-400"
                      >
                        {service.cta}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : (
                      <a
                        href="#quote"
                        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                      >
                        {service.cta}
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* Lead-gen helper card fills the grid's 6th cell */}
          <Reveal delay={320} className="h-full">
            <aside className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 via-brand-800 to-navy-900 p-7 text-white shadow-xl shadow-brand-900/30">
              <div className="bg-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
              <div className="relative">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white/10">
                  <Headset className="h-6.5 w-6.5 text-brand-200" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">Not Sure What You Need?</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-100/90">
                  Every business is different. Talk to a security expert and get honest advice on
                  the right cameras, recorder and network for your premises and budget.
                </p>
              </div>
              <div className="relative mt-7 space-y-3">
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-navy-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4 text-brand-600" aria-hidden="true" />
                  {COMPANY.phoneDisplay}
                </a>
                <a
                  href={COMPANY.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
