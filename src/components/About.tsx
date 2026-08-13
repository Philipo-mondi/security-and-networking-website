import { ArrowRight, BadgeCheck, Eye, Lock, Quote, Users } from "lucide-react";
import { COMPANY, IMAGES } from "../config";
import Reveal from "./Reveal";

const HIGHLIGHTS = [
  {
    icon: BadgeCheck,
    title: "Certified, professional technicians",
    text: "Trained in the latest CCTV, IP and networking technology.",
  },
  {
    icon: Lock,
    title: "Security-first approach",
    text: "Systems hardened against unauthorized access and tampering.",
  },
  {
    icon: Users,
    title: "Customer satisfaction",
    text: "Clear communication, honest advice and work done right the first time.",
  },
  {
    icon: Eye,
    title: "Long-term support",
    text: "We stay with you after installation — maintenance, upgrades and support.",
  },
];

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image side */}
          <Reveal className="relative">
            <div className="absolute -top-8 -left-8 h-56 w-56 rounded-full bg-brand-100 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20">
              <img
                src={IMAGES.technician}
                alt={`${COMPANY.name} technician professionally installing a ceiling-mounted CCTV camera in a modern office`}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-navy-950/80 px-4 py-2.5 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-bold tracking-widest text-white uppercase">
                  Professional Installation Teams
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 -bottom-8 hidden rounded-2xl border border-slate-100 bg-white px-6 py-5 shadow-2xl shadow-navy-900/15 sm:block">
              <p className="font-display text-3xl font-extrabold text-brand-600">100+</p>
              <p className="mt-0.5 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                Systems Installed
              </p>
            </div>
          </Reveal>

          {/* Copy side */}
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-brand-700 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                About Us
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                A Technology &amp; Security Solutions Partner, Not Just an Installer
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {COMPANY.name} is a technology and security solutions provider helping businesses,
                organizations, shops, offices and homes across Kenya stay protected and connected.
                From CCTV installation and management to complete network infrastructure — we
                combine technical expertise with a professional, customer-first approach.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We understand that security isn't a product you buy once — it's an ongoing
                partnership. That's why every project is followed by reliable support, preventive
                maintenance and a team that's genuinely available when you need it. Your business
                continuity is our priority.
              </p>
            </Reveal>

            {/* Mission statement */}
            <Reveal delay={120}>
              <figure className="relative mt-7 overflow-hidden rounded-2xl border-l-4 border-brand-500 bg-gradient-to-br from-brand-50 to-navy-50 p-6">
                <Quote className="absolute top-4 right-5 h-8 w-8 text-brand-200" aria-hidden="true" />
                <blockquote className="pr-8 text-[15px] leading-relaxed font-medium text-navy-800 italic">
                  "Our mission is to provide reliable, practical and affordable security and
                  networking solutions that help businesses operate safely and efficiently."
                </blockquote>
                <figcaption className="mt-3 text-xs font-bold tracking-widest text-brand-700 uppercase">
                  — Our Mission
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                {HIGHLIGHTS.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-navy-900">{item.title}</h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-500">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800"
                >
                  Book a Free Assessment
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:border-brand-400 hover:text-brand-600"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
