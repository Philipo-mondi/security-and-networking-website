import { useState } from "react";
import { ArrowRight, Camera } from "lucide-react";
import { PROJECT_FILTERS, PROJECTS, type Project } from "../config";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const CATEGORY_STYLES: Record<Project["category"], string> = {
  CCTV: "bg-brand-600/95",
  Networking: "bg-emerald-600/95",
  Security: "bg-navy-800/95",
  Maintenance: "bg-amber-500/95",
};

export default function Projects() {
  const [active, setActive] = useState<(typeof PROJECT_FILTERS)[number]>("All");

  const visible =
    active === "All" ? PROJECTS : PROJECTS.filter((project) => project.category === active);

  return (
    <section id="projects" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Work"
            title="Projects We've Delivered"
            description="A selection of the security and networking projects we've completed for businesses, shops, offices, schools and facilities across the region."
          />
        </Reveal>

        {/* Filters */}
        <Reveal delay={100}>
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-2.5"
            role="group"
            aria-label="Filter projects by category"
          >
            {PROJECT_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={active === filter}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  active === filter
                    ? "bg-navy-900 text-white shadow-lg shadow-navy-900/25"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-600"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid — keyed by filter so cards re-animate on change */}
        <div
          key={active}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {visible.map((project, i) => (
            <article
              key={project.title}
              className="animate-fade-up group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/15"
              style={{ animationDelay: `${Math.min(i * 60, 300)}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span
                  className={`absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest text-white uppercase shadow-lg ${CATEGORY_STYLES[project.category]}`}
                >
                  {project.category}
                </span>
                <span
                  className="absolute right-3 bottom-3 flex h-9 w-9 translate-y-3 items-center justify-center rounded-full bg-white text-navy-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <Camera className="h-4 w-4" />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-base font-bold text-navy-900">{project.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                    >
                      {service}
                    </li>
                  ))}
                </ul>

                <a
                  href="#quote"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 transition-colors hover:text-brand-700"
                  aria-label={`View project: ${project.title} — request a quote`}
                >
                  View Project
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-12 text-center text-sm text-slate-500">
            Want to see more?{" "}
            <a href="#quote" className="font-semibold text-brand-600 underline-offset-4 hover:underline">
              Request a reference from a similar business
            </a>{" "}
            during your consultation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
