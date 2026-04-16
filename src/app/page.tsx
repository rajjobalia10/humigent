import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InAction from "@/components/InAction";
import Benefits from "@/components/Benefits";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import Metrics from "@/components/Metrics";
import HowItWorks from "@/components/HowItWorks";

import Blogs from "@/components/Blogs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      {/* Vertical content border lines */}
      <div className="hidden min-[810px]:block pointer-events-none fixed inset-0 z-40">
        <div className="mx-auto max-w-[1200px] h-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-border/40" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-border/40" />
        </div>
      </div>

      <Navbar />
      <main>
        <Hero />

        <InAction />
        <Benefits />
        <Marquee />
        <Products />
        <Metrics />
        <HowItWorks />

        <Blogs />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
