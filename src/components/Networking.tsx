import {
  ArrowDown,
  ArrowRight,
  Check,
  Cctv,
  Globe,
  HardDrive,
  Monitor,
  Network,
  Router,
  Wifi,
} from "lucide-react";
import { COMPANY, NETWORK_DEVICES, NETWORK_FEATURES } from "../config";
import Reveal from "./Reveal";

/** A single node in the network diagram. */
function Node({
  icon: Icon,
  label,
  sub,
  accent = false,
}: {
  icon: typeof Globe;
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex min-w-[118px] flex-col items-center gap-1.5 rounded-2xl border px-4 py-3.5 text-center transition-all duration-300 hover:-translate-y-1 ${
        accent
          ? "border-brand-400/40 bg-brand-500/15"
          : "border-white/10 bg-navy-900/90 hover:border-white/25"
      }`}
    >
      <Icon className={`h-6 w-6 ${accent ? "text-brand-300" : "text-slate-300"}`} aria-hidden="true" />
      <div>
        <p className="text-sm font-bold text-white">{label}</p>
        <p className="text-[11px] font-medium text-slate-400">{sub}</p>
      </div>
    </div>
  );
}

function FlowArrow({ down = false }: { down?: boolean }) {
  return (
    <span className="flex items-center justify-center text-brand-400" aria-hidden="true">
      {down ? (
        <ArrowDown className="h-5 w-5 rotate-0" />
      ) : (
        <ArrowRight className="h-5 w-5 -rotate-0" />
      )}
    </span>
  );
}

export default function Networking() {
  return (
    <section id="networking" className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div className="bg-grid-dark absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-brand-600/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-brand-300 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
                Networking Solutions
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
                Reliable Networks That Keep Your Business Running
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-300">
                A modern CCTV system is only as strong as the network behind it. We design and
                implement reliable business networks — wired and wireless — that support your
                cameras, computers, POS systems and every other device your operations depend on.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {NETWORK_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-7">
                <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                  We connect everything:
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {NETWORK_DEVICES.map((device) => (
                    <li
                      key={device}
                      className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-brand-400/50 hover:text-white"
                    >
                      {device}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-950/60 transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-500 hover:to-brand-400"
                >
                  Get a Network Assessment
                </a>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                >
                  Call {COMPANY.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Network diagram */}
          <Reveal delay={150}>
            <div className="rounded-3xl border border-white/10 bg-navy-900/70 p-6 shadow-2xl shadow-navy-950/70 backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold tracking-widest text-white uppercase">
                  Your Business Network
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-400 uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  Secure &amp; Stable
                </span>
              </div>

              {/* Main chain */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:gap-2">
                <Node icon={Globe} label="Internet" sub="ISP Connection" />
                <FlowArrow />
                <Node icon={Router} label="Router" sub="Gateway / Firewall" />
                <FlowArrow />
                <Node icon={Network} label="Switch" sub="Managed Core" accent />
              </div>

              {/* Branch */}
              <div className="my-4 flex justify-center">
                <FlowArrow down />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Node icon={Monitor} label="Computers" sub="Office & POS" />
                <Node icon={Wifi} label="Wi-Fi" sub="Full Coverage" />
                <Node icon={Cctv} label="CCTV Cameras" sub="IP Cameras" accent />
                <FlowArrow />
                <Node icon={HardDrive} label="NVR" sub="Recording" />
              </div>

              <p className="mt-6 rounded-xl border border-white/10 bg-navy-950/70 px-4 py-3 text-center text-xs leading-relaxed text-slate-400">
                Designed for speed, stability and security — built to support your{" "}
                <span className="font-semibold text-slate-200">CCTV, POS, Wi-Fi and business apps</span>{" "}
                without slowdowns or dropouts.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
