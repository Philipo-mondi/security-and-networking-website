import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { COMPANY, NAV_LINKS } from "../config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when resizing up to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-navy-950/95 shadow-lg shadow-navy-950/40 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-navy-950/80 to-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-2.5"
          aria-label={`${COMPANY.name} — home`}
        >
          <img
            src="/security-and-networking-website/images/emhill-logo.png"
            alt={`${COMPANY.name} Logo`}
            className="h-12 w-12 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="leading-tight">
            <span className="block font-display text-[15px] font-bold tracking-tight text-white">
              <span className="text-orange-500">EM</span>
              <span className="text-black">HILL</span>
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.22em] text-brand-300/90 uppercase">
              {COMPANY.subBrand}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white transition-colors hover:text-brand-300"
          >
            <Phone className="h-4 w-4 text-brand-400" aria-hidden="true" />
            <span className="hidden xl:inline">{COMPANY.phoneDisplay}</span>
            <span className="xl:hidden">Call Us</span>
          </a>
          <a
            href="#quote"
            className="rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/50 transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-500 hover:to-brand-400 hover:shadow-brand-800/50"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          open ? "max-h-[calc(100vh-72px)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-navy-950/98 px-4 pt-3 pb-6 backdrop-blur-md">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-brand-400" aria-hidden="true" />
              Call Us
            </a>
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-900/40"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
