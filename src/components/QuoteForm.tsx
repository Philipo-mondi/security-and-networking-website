import { useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import {
  CalendarCheck,
  CheckCircle2,
  FileImage,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import {
  CAMERA_COUNT_OPTIONS,
  COMPANY,
  PROPERTY_TYPES,
  QUOTE_SERVICES,
} from "../config";
import Reveal from "./Reveal";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  cameras: string;
  propertyType: string;
  contactMethod: string;
  message: string;
  date: string;
  website: string; // honeypot — humans never fill this
}

type Errors = Partial<Record<keyof FormData, string>>;

const INITIAL: FormData = {
  name: "",
  company: "",
  phone: "",
  email: "",
  location: "",
  service: "",
  cameras: "",
  propertyType: "",
  contactMethod: "Phone",
  message: "",
  date: "",
  website: "",
};

const MAX_FILE_SIZE_MB = 5;
const MAX_FILES = 5;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-.\s\d]{7,20}$/;

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const setField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.phone.trim()) {
      next.phone = "Please enter your phone number.";
    } else if (!PHONE_RE.test(form.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!EMAIL_RE.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.service) next.service = "Please select a service.";
    if (!form.message.trim()) next.message = "Please briefly describe your requirements.";
    return next;
  };

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    setFileError("");
    if (files.length + selected.length > MAX_FILES) {
      setFileError(`You can upload up to ${MAX_FILES} photos.`);
      return;
    }
    for (const file of selected) {
      if (!file.type.startsWith("image/")) {
        setFileError("Only image files (JPG, PNG, WebP) are allowed.");
        return;
      }
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setFileError(`Each photo must be smaller than ${MAX_FILE_SIZE_MB}MB.`);
        return;
      }
    }
    setFiles((prev) => [...prev, ...selected]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Honeypot: silently drop bot submissions
    if (form.website) return;

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      // Move focus to the first invalid field for accessibility
      const firstError = Object.keys(next)[0];
      const el = document.querySelector<HTMLElement>(`[name="${firstError}"]`);
      el?.focus();
      return;
    }

    setStatus("submitting");

    /*
     * ── SUBMISSION HANDLER ──────────────────────────────────────────────
     * Wire this to your backend / form service (e.g. Formspree, your API
     * endpoint, or an email relay). Keep API keys server-side only.
     * Example:
     *   const payload = new FormData();
     *   Object.entries(form).forEach(([k, v]) => payload.append(k, v));
     *   files.forEach((f) => payload.append("photos", f, f.name));
     *   await fetch("https://your-backend.example.com/api/quote", { method: "POST", body: payload });
     * The simulation below delays then shows the success panel.
     * ─────────────────────────────────────────────────────────────────────
     */
    window.setTimeout(() => {
      setStatus("success");
      setForm(INITIAL);
      setFiles([]);
      setFileError("");
    }, 1400);
  };

  /* ── Success state ── */
  if (status === "success") {
    return (
      <section id="quote" className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-brand-950 py-20 sm:py-24">
        <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white p-10 text-center shadow-2xl sm:p-14">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                <CheckCircle2 className="h-9 w-9 text-emerald-500" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Request Received — Thank You!
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                Your quote request has been submitted successfully. One of our security
                consultants will review your requirements and contact you within{" "}
                <span className="font-semibold text-navy-900">24 hours</span> (usually much
                sooner).
              </p>
              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <p className="font-semibold text-navy-900">Need help right away?</p>
                <p className="mt-1">
                  Call{" "}
                  <a href={COMPANY.phoneHref} className="font-semibold text-brand-600 hover:underline">
                    {COMPANY.phoneDisplay}
                  </a>{" "}
                  or message us on WhatsApp.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-7 rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-brand-400 hover:text-brand-600"
              >
                Submit Another Request
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  /* ── Input styles ── */
  const inputCls = (invalid?: string) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 placeholder-slate-400 shadow-sm outline-none transition-all duration-200 focus:ring-2 ${
      invalid
        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
        : "border-slate-300 focus:border-brand-500 focus:ring-brand-500/20"
    }`;

  return (
    <section id="quote" className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-brand-950 py-20 sm:py-24">
      <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Pitch panel */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-brand-300 uppercase">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Free Quote
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
                Request Your Free Security Assessment &amp; Quote
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Tell us about your premises and requirements. We'll get back to you within 24
                hours with honest advice and a clear, itemized quote — no hidden costs, no
                obligation.
              </p>

              <ul className="mt-7 space-y-3.5 text-sm text-slate-200">
                {[
                  "Free consultation and site assessment",
                  "Tailored solution for your premises and budget",
                  "Clear itemized quotation — no hidden charges",
                  "Response within 24 hours",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <a
                  href={COMPANY.phoneHref}
                  className="flex flex-col items-center gap-1 rounded-2xl border border-white/15 bg-white/5 px-3 py-4 text-center transition-colors hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 text-brand-300" aria-hidden="true" />
                  <span className="text-xs font-bold text-white">Call</span>
                  <span className="text-[11px] text-slate-400">Mon–Sat</span>
                </a>
                <a
                  href={COMPANY.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 rounded-2xl border border-white/15 bg-white/5 px-3 py-4 text-center transition-colors hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                  <span className="text-xs font-bold text-white">WhatsApp</span>
                  <span className="text-[11px] text-slate-400">Fastest reply</span>
                </a>
                <a
                  href={COMPANY.emailHref}
                  className="flex flex-col items-center gap-1 rounded-2xl border border-white/15 bg-white/5 px-3 py-4 text-center transition-colors hover:bg-white/10"
                >
                  <Mail className="h-5 w-5 text-brand-300" aria-hidden="true" />
                  <span className="text-xs font-bold text-white">Email</span>
                  <span className="text-[11px] text-slate-400">24h response</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form card */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-white p-6 shadow-2xl shadow-navy-950/60 sm:p-9"
            >
              {/* Honeypot (visually hidden) */}
              <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) => setField("website", e.target.value)}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. John Kamau"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputCls(errors.name)}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    Company / Business Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="e.g. Kamau Stores Ltd"
                    value={form.company}
                    onChange={(e) => setField("company", e.target.value)}
                    className={inputCls()}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+254 7XX XXX XXX"
                    value={form.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={inputCls(errors.phone)}
                  />
                  {errors.phone && (
                    <p id="phone-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputCls(errors.email)}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="location" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="e.g. Nairobi CBD"
                    value={form.location}
                    onChange={(e) => setField("location", e.target.value)}
                    className={inputCls()}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={(e) => setField("service", e.target.value)}
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? "service-error" : undefined}
                    className={inputCls(errors.service)}
                  >
                    <option value="">Select a service…</option>
                    {QUOTE_SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="cameras" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    Number of Cameras Needed
                  </label>
                  <select
                    id="cameras"
                    name="cameras"
                    value={form.cameras}
                    onChange={(e) => setField("cameras", e.target.value)}
                    className={inputCls()}
                  >
                    <option value="">Not sure yet</option>
                    {CAMERA_COUNT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="propertyType" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    Property / Business Type
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={form.propertyType}
                    onChange={(e) => setField("propertyType", e.target.value)}
                    className={inputCls()}
                  >
                    <option value="">Select property type…</option>
                    {PROPERTY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="date" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    Preferred Consultation Date
                  </label>
                  <div className="relative">
                    <CalendarCheck
                      className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      id="date"
                      name="date"
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={(e) => setField("date", e.target.value)}
                      className={`${inputCls()} pl-11`}
                    />
                  </div>
                </div>

                <fieldset className="sm:col-span-2">
                  <legend className="mb-2 block text-sm font-semibold text-navy-900">
                    Preferred Contact Method
                  </legend>
                  <div className="flex flex-wrap gap-3">
                    {["Phone", "WhatsApp", "Email"].map((method) => (
                      <label
                        key={method}
                        className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                          form.contactMethod === method
                            ? "border-brand-500 bg-brand-50 text-brand-700 ring-2 ring-brand-500/20"
                            : "border-slate-300 bg-white text-slate-600 hover:border-brand-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={form.contactMethod === method}
                          onChange={(e) => setField("contactMethod", e.target.value)}
                          className="sr-only"
                        />
                        {method}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-900">
                    Description of Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your premises, what you'd like to secure, any existing systems, and your timeline…"
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${inputCls(errors.message)} resize-y`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* File upload */}
                <div className="sm:col-span-2">
                  <span className="mb-1.5 block text-sm font-semibold text-navy-900">
                    Upload Photos / Property Images{" "}
                    <span className="font-normal text-slate-400">(optional — helps us prepare your quote)</span>
                  </span>
                  <label
                    htmlFor="photos"
                    className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center transition-colors hover:border-brand-400 hover:bg-brand-50/50"
                  >
                    <FileImage className="h-8 w-8 text-slate-400" aria-hidden="true" />
                    <span className="text-sm font-semibold text-navy-900">
                      Click to upload photos
                    </span>
                    <span className="text-xs text-slate-500">
                      JPG, PNG or WebP · up to {MAX_FILES} images · max {MAX_FILE_SIZE_MB}MB each
                    </span>
                    <input
                      ref={fileInputRef}
                      id="photos"
                      name="photos"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFiles}
                      className="sr-only"
                    />
                  </label>

                  {fileError && (
                    <p role="alert" className="mt-2 text-xs font-medium text-red-600">
                      {fileError}
                    </p>
                  )}

                  {files.length > 0 && (
                    <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                      <div className="flex items-center justify-between gap-3">
                        <p className="truncate text-xs font-semibold text-navy-900">
                          {files.length} photo{files.length > 1 ? "s" : ""} attached
                        </p>
                        <button
                          type="button"
                          onClick={() => setFiles([])}
                          className="inline-flex shrink-0 items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold text-red-600 transition-colors hover:bg-red-50"
                        >
                          <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                          Remove all
                        </button>
                      </div>
                      <ul className="mt-2 space-y-1">
                        {files.map((file, i) => (
                          <li key={`${file.name}-${i}`} className="truncate text-[11px] text-slate-500">
                            • {file.name} ({(file.size / (1024 * 1024)).toFixed(1)}MB)
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-700 to-brand-500 px-7 py-4 text-base font-bold text-white shadow-xl shadow-brand-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:from-brand-600 hover:to-brand-400 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                    Sending Your Request…
                  </>
                ) : (
                  <>
                    <Send
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                    Request My Free Quote
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-xs leading-relaxed text-slate-400">
                Your details are kept private and only used to respond to your request. By
                submitting, you agree to our privacy policy.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
