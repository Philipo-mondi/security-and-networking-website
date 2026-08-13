import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import CctvSolutions from "./components/CctvSolutions";
import Networking from "./components/Networking";
import CTASection from "./components/CTASection";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import QuoteForm from "./components/QuoteForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import { COMPANY } from "./config";

export default function App() {
  return (
    <>
      {/* Accessibility: skip navigation */}
      <a
        href="#main"
        className="sr-only z-[60] rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <About />
        <CctvSolutions />
        <Networking />

        <CTASection
          title="Is Your Business Properly Protected?"
          description="Don't wait until a security incident happens. Get professional CCTV and networking solutions designed around your business — installed, configured and supported by experts."
          primaryLabel="Request a Free Assessment"
          primaryHref="#quote"
          secondaryLabel="Talk to a Security Expert"
          secondaryCall
        />

        <Projects />
        <Pricing />
        <Testimonials />
        <FAQ />

        <CTASection
          title="Ready to Secure Your Business?"
          description="Book a free consultation today. We'll assess your premises, answer your questions and provide a clear quote — with no obligation."
          primaryLabel="Get Your Free Quote"
          primaryHref="#quote"
          secondaryLabel="Chat on WhatsApp"
          secondaryHref={COMPANY.whatsappHref}
        />

        <QuoteForm />
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
