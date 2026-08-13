import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "../config";
import Reveal from "./Reveal";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  /** Href for the secondary button (defaults to #quote). */
  secondaryHref?: string;
  /** When true the secondary button is rendered as a phone call button. */
  secondaryCall?: boolean;
}

/**
 * Reusable full-width call-to-action banner used between sections.
 */
export default function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref = "#quote",
  secondaryCall = false,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-brand-950 py-16 sm:py-20">
      <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden="true"
      />

      <Reveal className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={primaryHref}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-brand-950/60 transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-500 hover:to-brand-400 sm:w-auto"
          >
            {primaryLabel}
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          {secondaryCall ? (
            <a
              href={COMPANY.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:w-auto"
            >
              <Phone className="h-5 w-5 text-brand-300" aria-hidden="true" />
              {secondaryLabel}
            </a>
          ) : (
            <a
              href={secondaryHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:w-auto"
            >
              {secondaryLabel}
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}
