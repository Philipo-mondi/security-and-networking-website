import { useState } from "react";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { COMPANY, FAQS } from "../config";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen ? "border-brand-200 bg-white shadow-lg shadow-navy-900/5" : "border-slate-200 bg-white hover:border-brand-200"
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${index}`}
          id={`faq-button-${index}`}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="text-sm font-bold text-navy-900 sm:text-[15px]">{question}</span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isOpen ? "rotate-180 bg-brand-600 text-white" : "bg-slate-100 text-slate-500"
            }`}
            aria-hidden="true"
          >
            <ChevronDown className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faqs" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: heading + help card */}
          <div>
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="FAQs"
                title="Frequently Asked Questions"
                description="Everything you need to know about CCTV installation, security systems and networking services. Can't find your answer? Just ask — we're happy to help."
              />
            </Reveal>

            <Reveal delay={150}>
              <aside className="mt-8 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 p-7 text-white shadow-xl shadow-navy-900/25">
                <h3 className="font-display text-lg font-bold">Still have questions?</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Talk directly to a security and networking expert. No pressure, no obligation —
                  just honest answers.
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href={COMPANY.phoneHref}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-950/50 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call {COMPANY.phoneDisplay}
                  </a>
                  <a
                    href={COMPANY.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                </div>
              </aside>
            </Reveal>
          </div>

          {/* Right: accordion */}
          <div className="space-y-3.5">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={Math.min(i * 40, 240)}>
                <FaqItem
                  question={faq.q}
                  answer={faq.a}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
