import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { COMPANY } from "../config";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "./icons";

const SOCIALS = [
  { label: "Facebook", href: COMPANY.socials.facebook, icon: FacebookIcon },
  { label: "Twitter / X", href: COMPANY.socials.twitter, icon: TwitterIcon },
  { label: "LinkedIn", href: COMPANY.socials.linkedin, icon: LinkedinIcon },
  { label: "Instagram", href: COMPANY.socials.instagram, icon: InstagramIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact Us"
            title="Let's Secure Your Business Together"
            description="Call, WhatsApp or visit us — our team is ready to answer your questions and schedule your free site assessment."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Contact details */}
          <div className="space-y-4">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={COMPANY.phoneHref}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-navy-900/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-navy-900">Phone</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-600">{COMPANY.phoneDisplay}</p>
                  <p className="mt-0.5 text-xs text-slate-500">Call or SMS anytime</p>
                </a>

                <a
                  href={COMPANY.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-navy-900/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-navy-900">WhatsApp</h3>
                  <p className="mt-1 text-sm font-semibold text-emerald-600">{COMPANY.phoneDisplay}</p>
                  <p className="mt-0.5 text-xs text-slate-500">Fastest way to reach us</p>
                </a>

                <a
                  href={COMPANY.emailHref}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-navy-900/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-navy-900">Email</h3>
                  <p className="mt-1 truncate text-sm font-semibold text-brand-600">{COMPANY.email}</p>
                  <p className="mt-0.5 text-xs text-slate-500">We reply within 24 hours</p>
                </a>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-navy-900/10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-navy-900">Location</h3>
                  <p className="mt-1 text-sm font-semibold text-brand-600">{COMPANY.location}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{COMPANY.address}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-base font-bold text-navy-900">Business Hours</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {COMPANY.businessHours.map((entry) => (
                    <li
                      key={entry.days}
                      className="flex items-center justify-between gap-4 border-b border-slate-200 pb-2.5 text-sm last:border-0 last:pb-0"
                    >
                      <span className="font-medium text-slate-600">{entry.days}</span>
                      <span className="font-semibold text-navy-900">{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Socials */}
            <Reveal delay={180}>
              <div className="flex items-center gap-3">
                <p className="text-sm font-semibold text-slate-500">Follow us:</p>
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={`${COMPANY.name} on ${social.label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600"
                  >
                    <social.icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Map + action buttons */}
          <Reveal delay={150} className="flex flex-col">
            <div className="relative flex-1 overflow-hidden rounded-3xl border border-slate-200 shadow-lg shadow-navy-900/10">
              <iframe
                title={`${COMPANY.name} location map — ${COMPANY.address}`}
                src={COMPANY.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 380 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-navy-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800"
              >
                <Phone className="h-4 w-4 text-brand-300" aria-hidden="true" />
                Call Us
              </a>
              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Us
              </a>
              <a
                href="#quote"
                className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-brand-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-500 hover:to-brand-400"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
