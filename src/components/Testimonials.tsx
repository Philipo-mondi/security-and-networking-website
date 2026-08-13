import { Quote, Star } from "lucide-react";
import { COMPANY, TESTIMONIALS } from "../config";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Customers Say"
            description="Real feedback from the businesses, shops and organizations we've helped protect and connect. Your security is our reputation."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={Math.min(i * 80, 320)} className="h-full">
              <figure className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:bg-white hover:shadow-xl hover:shadow-navy-900/10">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-brand-100" aria-hidden="true" />
                <Stars rating={testimonial.rating} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  "{testimonial.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 font-display text-sm font-bold text-white">
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.company}</p>
                    <p className="mt-0.5 inline-block rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold tracking-wide text-brand-700 uppercase">
                      {testimonial.service}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-12 text-center">
            <a
              href={COMPANY.socials.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600"
            >
              <Star className="h-4 w-4 text-amber-400" aria-hidden="true" />
              Leave a Review
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
