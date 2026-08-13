import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { COMPANY, NAV_LINKS } from "../config";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./icons";

const SERVICE_LINKS = [
  { label: "CCTV Installation", href: "#services" },
  { label: "CCTV Management", href: "#services" },
  { label: "CCTV Maintenance", href: "#services" },
  { label: "Business Security", href: "#services" },
  { label: "Networking", href: "#networking" },
  { label: "Wi-Fi Solutions", href: "#networking" },
];

const SOCIALS = [
  { label: "Facebook", href: COMPANY.socials.facebook, icon: FacebookIcon },
  { label: "Twitter / X", href: COMPANY.socials.twitter, icon: TwitterIcon },
  { label: "LinkedIn", href: COMPANY.socials.linkedin, icon: LinkedinIcon },
  { label: "Instagram", href: COMPANY.socials.instagram, icon: InstagramIcon },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 pb-24 text-slate-400 md:pb-10">
      <div className="bg-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          {/* Column 1 — brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5" aria-label={`${COMPANY.name} — back to top`}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <ShieldCheck className="h-5.5 w-5.5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-[15px] font-bold tracking-tight text-white">
                  {COMPANY.name}
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.22em] text-brand-300/90 uppercase">
                  {COMPANY.subBrand}
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Professional CCTV installation, surveillance, business security and networking
              solutions across Kenya. We help businesses, organizations and homes stay{" "}
              <span className="font-semibold text-slate-200">protected, connected and in control</span>{" "}
              — with reliable support long after installation.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`${COMPANY.name} on ${social.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/50 hover:text-white"
                >
                  <social.icon className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — quick links */}
          <nav aria-label="Quick links">
            <h3 className="font-display text-sm font-bold tracking-widest text-white uppercase">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.filter((link) => !["FAQs", "Why Us"].includes(link.label)).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#quote" className="text-sm transition-colors hover:text-brand-300">
                  Get a Free Quote
                </a>
              </li>
            </ul>
          </nav>

          {/* Column 3 — services */}
          <nav aria-label="Services">
            <h3 className="font-display text-sm font-bold tracking-widest text-white uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors hover:text-brand-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4 — contact */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-widest text-white uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="group flex items-start gap-3 text-sm transition-colors hover:text-brand-300"
                >
                  <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-slate-200">Phone</span>
                    {COMPANY.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm transition-colors hover:text-brand-300"
                >
                  <MessageCircle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-400" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-slate-200">WhatsApp</span>
                    {COMPANY.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.emailHref}
                  className="group flex items-start gap-3 text-sm transition-colors hover:text-brand-300"
                >
                  <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-slate-200">Email</span>
                    {COMPANY.email}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-slate-200">Location</span>
                  {COMPANY.address}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-slate-200">Hours</span>
                  Mon–Fri: 8AM–6PM · Sat: 9AM–4PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center text-xs sm:flex-row sm:text-left">
          <p>
            Copyright © {year} {COMPANY.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="transition-colors hover:text-brand-300">
              Privacy Policy
            </a>
            <a href="#terms" className="transition-colors hover:text-brand-300">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
