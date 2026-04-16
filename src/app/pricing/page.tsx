"use client";

import { useState } from "react";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

const phases = [
  {
    name: "Education & Alignment",
    desc: "For organizations beginning their AI journey.",
    features: ["Foundational AI workshops", "Quick-win productivity applications", "Organizational readiness assessment", "AI literacy training", "Use-case identification", "Executive alignment sessions"],
  },
  {
    name: "Discovery & Roadmap",
    desc: "For teams ready to identify and prioritize AI opportunities.",
    features: ["Everything in Phase 1", "Departmental interviews", "Pain point identification", "Prioritized AI roadmap", "Business milestone alignment", "ROI projection modeling"],
    featured: true,
  },
  {
    name: "Deploy & Scale",
    desc: "For enterprises ready to operationalize Agentic AI at scale.",
    features: ["Everything in Phase 2", "Agentic AI implementation", "Rent-to-own subscription model", "Custom integrations", "In-house deployment transition", "24/7 ongoing support"],
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-16 pb-8 max-[809px]:pt-10">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5 text-center">
          <h1 className="font-serif text-[56px] font-normal leading-[1.1] tracking-[-1.12px] text-dark max-[1199px]:text-[44px] max-[809px]:text-[36px]">
            Flexible engagement models
          </h1>
          <p className="mt-6 text-[14px] leading-[1.6] text-gray-text max-w-[480px] mx-auto">
            Our AI-EaaS execution model ensures seamless adoption, rapid
            deployment, and measurable outcomes at every phase.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="py-6 bg-cream">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
          <div className="border border-gray-border/40 rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 max-[809px]:grid-cols-1">
              {phases.map((plan, i) => (
                <div key={i} className={`p-8 max-[809px]:p-6 ${i < 2 ? "border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b" : ""}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
                    <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">Phase {i + 1}</span>
                  </div>
                  <h3 className="font-serif text-[22px] font-normal leading-[1.1] tracking-[-0.22px] text-dark max-[809px]:text-[18px]">{plan.name}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-gray-text min-h-[44px]">{plan.desc}</p>
                  <a href="/contact" className={`mt-6 block text-center text-[14px] font-medium px-6 py-3 rounded-[4px] transition-opacity ${plan.featured ? "bg-primary text-white hover:opacity-90" : "bg-white text-dark border border-dark/20 hover:border-dark/40"}`}>
                    Get Started
                  </a>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <span className={`w-[6px] h-[6px] rounded-full mt-2 shrink-0 ${plan.featured ? "bg-primary" : "bg-gray-light"}`} />
                        <span className="text-[14px] leading-[1.6] text-gray-text">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-6 bg-cream">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
          <div className="border border-gray-border/40 rounded-lg overflow-hidden">
            <div className="text-center p-10 max-[809px]:p-6">
              <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-[1199px]:text-[32px] max-[809px]:text-[28px]">
                Compare engagement phases
              </h2>
            </div>
            <div className="border-t border-gray-border/40 overflow-x-auto">
              <div className="min-w-[500px]">
              {[
                { feature: "AI Workshops & Training", p1: true, p2: true, p3: true },
                { feature: "Quick-win Applications", p1: true, p2: true, p3: true },
                { feature: "Departmental Interviews", p1: false, p2: true, p3: true },
                { feature: "Prioritized AI Roadmap", p1: false, p2: true, p3: true },
                { feature: "Agentic AI Deployment", p1: false, p2: false, p3: true },
                { feature: "Custom Integrations", p1: false, p2: false, p3: true },
                { feature: "In-house Transition Support", p1: false, p2: false, p3: true },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-4 border-b border-gray-border/40 last:border-b-0">
                  <div className="p-4 max-[809px]:p-2 text-[14px] max-[809px]:text-[12px] text-gray-text">{row.feature}</div>
                  <div className="p-4 max-[809px]:p-2 text-center border-l border-gray-border/40">{row.p1 ? <span className="text-primary">&#10003;</span> : <span className="text-gray-light">—</span>}</div>
                  <div className="p-4 max-[809px]:p-2 text-center border-l border-gray-border/40">{row.p2 ? <span className="text-primary">&#10003;</span> : <span className="text-gray-light">—</span>}</div>
                  <div className="p-4 max-[809px]:p-2 text-center border-l border-gray-border/40">{row.p3 ? <span className="text-primary">&#10003;</span> : <span className="text-gray-light">—</span>}</div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}
