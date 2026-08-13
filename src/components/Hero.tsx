import { ArrowRight, CheckCircle2, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { COMPANY, IMAGES } from "../config";
import Stats from "./Stats";

const TRUST_POINTS = ["Professional Installation", "Reliable Support", "Business-Focused Solutions"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950">
      {/* Background image + overlays */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={IMAGES.hero}
          alt=""
          className="h-full w-full object-cover opacity-40"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
        <div className="bg-grid-dark absolute inset-0 opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40 lg:pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-brand-300 uppercase">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Trusted Security &amp; Networking Partner
            </p>

            <h1 className="mt-5 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl">
              Protect Your Business.
              <br />
              <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500 bg-clip-text text-transparent">
                Connect Your World.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              Professional CCTV, surveillance, security and networking solutions designed to
              keep your business{" "}
              <span className="font-semibold text-white">protected</span>,{" "}
              <span className="font-semibold text-white">connected</span> and{" "}
              <span className="font-semibold text-white">under control</span> — installed
              right, supported for life.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#quote"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-brand-900/50 transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-500 hover:to-brand-400"
              >
                Request a Free Quote
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                Explore Our Services
              </a>
            </div>

            {/* Quick contact */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-brand-300"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Phone className="h-4 w-4 text-brand-400" aria-hidden="true" />
                </span>
                {COMPANY.phoneDisplay}
              </a>
              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-brand-300"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <MessageCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                </span>
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust statement */}
            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-6 text-sm font-medium text-slate-300">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual: monitoring dashboard mock */}
          <div className="relative hidden lg:block" aria-hidden="true">
            <div className="absolute -top-10 -right-6 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="absolute -bottom-12 -left-8 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative rounded-2xl border border-white/10 bg-navy-900/80 p-4 shadow-2xl shadow-navy-950/80 backdrop-blur-xl">
              <div className="flex items-center justify-between rounded-xl bg-navy-950/70 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                    Live Monitoring
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-400">24/7 · Secure</span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                {[IMAGES.cameraDome, IMAGES.camerasPair].map((src, i) => (
                  <div key={src} className="group relative overflow-hidden rounded-xl">
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                    <span className="absolute bottom-2 left-2 rounded-md bg-navy-950/80 px-2 py-0.5 text-[10px] font-bold tracking-widest text-slate-200 uppercase">
                      CAM {i + 1}
                    </span>
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-emerald-400 shadow shadow-emerald-400/60" />
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  { label: "Recording", value: "Active" },
                  { label: "Storage", value: "14 days" },
                  { label: "Uptime", value: "99.9%" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-navy-950/70 px-3 py-2.5 text-center">
                    <p className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-900/95 px-5 py-4 shadow-2xl shadow-navy-950/80 backdrop-blur-xl">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-white">100+</p>
                <p className="text-xs font-medium text-slate-400">Installations Completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <Stats />
      </div>
    </section>
  );
}
