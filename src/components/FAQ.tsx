"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What industries does Humigent serve?",
    a: "Humigent serves Life Sciences (Pharma & Biotech), Food and Hospitality, Government, and Oil & Gas with domain-trained AI agents engineered for each industry's specific challenges.",
  },
  {
    q: "What makes Humigent different from other AI solutions?",
    a: "Humigent uses a Deterministic Reasoning Engine with zero-hallucination, auditable intelligence. Unlike generic LLMs, our domain-trained agents deliver explainable causal chains and consistent outputs.",
  },
  {
    q: "How does the AI-EaaS execution model work?",
    a: "Our four-phase model includes Education & Alignment, Discovery & Roadmap, Deployment with a rent-to-own subscription model, and Scale & Internalize for transitioning to in-house deployment with ongoing support.",
  },
  {
    q: "Is my data secure with Humigent?",
    a: "Yes. Humigent is built with enterprise-scale security, governance, and full auditability. Our solutions include a Trust Index ensuring every insight is compliant, transparent and reliable.",
  },
  {
    q: "What products does Humigent offer for Life Sciences?",
    a: "For Life Sciences, we offer Insights Navigator, One Customer Universe, MSL Voice, GeoForecast, Data Lens, and Dashboard Lens\u2014all purpose-built for pharma and biotech commercialization.",
  },
  {
    q: "How quickly can my organization get started?",
    a: "Our Smart Workbench technology is designed for seamless integration and rapid deployment. Teams can move from strategy to market action in days, not months, starting with our Education & Alignment phase.",
  },
  {
    q: "Can Humigent integrate with our existing systems?",
    a: "Yes. Humigent is architected for enterprise-scale deployment that integrates with your existing ecosystem. Our connected decision intelligence works across teams, systems, and time horizons.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-6 bg-cream">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
        <div className="border border-gray-border/40 rounded-lg overflow-hidden">
          <div className="grid grid-cols-[1fr_1.2fr] max-[809px]:grid-cols-1">
            {/* Left: Title */}
            <div className="p-10 max-[809px]:p-6 border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
                <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                  FAQ
                </span>
              </div>
              <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-[1199px]:text-[32px] max-[809px]:text-[28px]">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-[14px] leading-[1.6] text-gray-text">
                Everything you need to know about getting started with
                Humigent&apos;s Agentic AI solutions.
              </p>
            </div>

            {/* Right: Accordion */}
            <div>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-b border-gray-border/40 last:border-b-0"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-card/30 transition-colors"
                  >
                    <span className="text-[15px] leading-[1.4] text-dark pr-4">
                      {faq.q}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`shrink-0 transition-transform duration-200 ${
                        open === i ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M5 7.5l5 5 5-5"
                        stroke="#919191"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      open === i ? "max-h-[200px]" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-[14px] leading-[1.6] text-gray-text">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
