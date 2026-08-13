import { FileText, MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "../config";

/**
 * Lead-generation floaters:
 *  - Desktop: floating WhatsApp button (bottom-right)
 *  - Mobile: sticky bottom action bar (Call | WhatsApp | Get Quote)
 */
export default function FloatingCTA() {
  return (
    <>
      {/* Floating WhatsApp — desktop & tablet */}
      <a
        href={COMPANY.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group fixed right-5 bottom-6 z-40 hidden items-center gap-3 md:flex"
      >
        <span className="pointer-events-none hidden translate-x-2 rounded-xl bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
          Chat with us — we reply fast!
        </span>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-600/40 transition-transform duration-300 group-hover:scale-110">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-30" aria-hidden="true" />
          <MessageCircle className="relative h-7 w-7" aria-hidden="true" />
        </span>
      </a>

      {/* Sticky mobile action bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-950/95 backdrop-blur-md md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        role="region"
        aria-label="Quick contact actions"
      >
        <div className="grid grid-cols-3">
          <a
            href={COMPANY.phoneHref}
            className="flex flex-col items-center gap-0.5 py-3 text-white transition-colors active:bg-white/10"
          >
            <Phone className="h-5 w-5 text-brand-300" aria-hidden="true" />
            <span className="text-[11px] font-bold">Call</span>
          </a>
          <a
            href={COMPANY.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 py-3 text-white transition-colors active:bg-white/10"
          >
            <MessageCircle className="h-5 w-5 text-emerald-400" aria-hidden="true" />
            <span className="text-[11px] font-bold">WhatsApp</span>
          </a>
          <a
            href="#quote"
            className="flex flex-col items-center gap-0.5 bg-gradient-to-r from-brand-700 to-brand-500 py-3 text-white transition-colors active:from-brand-600 active:to-brand-400"
          >
            <FileText className="h-5 w-5" aria-hidden="true" />
            <span className="text-[11px] font-bold">Get Quote</span>
          </a>
        </div>
      </div>
    </>
  );
}
