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

export default function Home() {
  return (
    <>
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
    </>
  );
}
