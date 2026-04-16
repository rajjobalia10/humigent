"use client";

import { useState } from "react";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

const features = [
  {
    tag: "Life Sciences",
    label: "Industry-1",
    title: "Autonomous AI for Confident Commercialization",
    desc: "Agent-based forecast and launch planning with predictive scenario modeling and competitive simulations by autonomously simulating the market ecosystem.",
    feature1: { title: "Insights Navigator", desc: "Agentic AI that scans for critical business triggers and delivers contextual, compliant, action-ready insights in real time." },
    feature2: { title: "One Customer Universe", desc: "Unify siloed HCP data into a single source of truth for compliant, personalized engagement across every channel." },
    testimonial: { quote: "Humigent transformed our launch planning with predictive intelligence that gave us confidence in every market decision.", name: "Launch Strategy Lead", role: "Top-10 Pharma" },
    image: "/images/product-emails.png",
  },
  {
    tag: "Food & Hospitality",
    label: "Industry-2",
    title: "Data-Driven Intelligence for Hospitality",
    desc: "AI-powered workflow automation for hotels, restaurants, and cloud kitchens — supporting smoother operations, optimized staffing, and elevated guest satisfaction.",
    feature1: { title: "Reputaintel", desc: "Instant sentiment analysis across review platforms with personalized recovery messaging and reputation monitoring." },
    feature2: { title: "Pricelytics", desc: "Autonomous agents analyze real-time market data, competitor activity and inventory levels to optimize pricing for maximum yield." },
    testimonial: { quote: "The dynamic pricing engine alone paid for itself in the first month. Guest satisfaction scores are at an all-time high.", name: "Revenue Director", role: "Luxury Hotel Group" },
    image: "/images/product-scheduling.png",
  },
  {
    tag: "Government",
    label: "Industry-3",
    title: "AI-Powered Governance for Citizen-Centric Services",
    desc: "Advanced AI-driven intelligence for government workflows, enabling faster decisions, improved public services, and streamlined operations at scale.",
    feature1: { title: "Civil-Intel", desc: "AI reads, classifies, and extracts insights from government documents, notices, tenders, and compliance files automatically." },
    feature2: { title: "DataArc", desc: "Unifies siloed datasets across departments, removes duplicates, resolves conflicts, and enriches missing information." },
    testimonial: { quote: "Citizen query resolution time dropped by 60%. The AI handles routine requests so our team focuses on complex cases.", name: "Digital Services Head", role: "State Government Agency" },
    image: "/images/product-task-automation.png",
  },
  {
    tag: "Oil & Gas",
    label: "Industry-4",
    title: "AI-Powered Geoscience for E&P Teams",
    desc: "Redefining seismic visualization, interpretation, and collaboration using deep neural networks for cloud-based processing of massive datasets.",
    feature1: { title: "Visualization AI", desc: "Visualize terabyte-scale seismic volumes and well datasets with AI-powered compression for immediate browser-based access." },
    feature2: { title: "Interpretation AI", desc: "Interpret complex 3D seismic datasets within the browser with AI assistance for identifying faults and seismic facies." },
    testimonial: { quote: "Our interpretation workflow is 10x faster. The browser-based platform eliminated our infrastructure bottlenecks entirely.", name: "Chief Geoscientist", role: "E&P Operator" },
    image: "/images/product-summaries.png",
  },
];

const tags = ["Life Sciences", "Food & Hospitality", "Government", "Oil & Gas"];

export default function ProductsPage() {
  const [activeTag, setActiveTag] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-16 pb-8 max-[809px]:pt-10">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5 text-center">
          <h1 className="font-serif text-[56px] font-normal leading-[1.1] tracking-[-1.12px] text-dark max-[1199px]:text-[44px] max-[809px]:text-[36px]">
            Solving your industry&apos;s hardest challenges
          </h1>
          <p className="mt-6 text-[14px] leading-[1.6] text-gray-text max-w-[520px] mx-auto">
            Humigent delivers impact-ready AI agents engineered to solve
            industry-specific problems with deterministic precision.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 max-[809px]:flex-col">
            <a href="/contact" className="bg-primary text-white text-[14px] font-medium px-6 py-3 rounded-[4px] hover:opacity-90 transition-opacity">
              Request A Demo
            </a>
            <a href="#industries" className="bg-white text-dark text-[14px] font-medium px-6 py-3 rounded-[4px] border border-dark/20 hover:border-dark/40 transition-colors">
              Explore Industries
            </a>
          </div>
          {/* Feature Tags */}
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            {tags.map((tag, i) => (
              <button
                key={i}
                onClick={() => setActiveTag(i)}
                className={`text-[12px] font-mono tracking-[-0.12px] uppercase border rounded-[4px] px-4 py-2 transition-colors ${
                  activeTag === i
                    ? "bg-dark text-white border-dark"
                    : "border-gray-border/60 text-gray-text hover:border-dark/40"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sections */}
      <div id="industries">
        {features.map((f, i) => (
          <section key={i} className="py-6 bg-cream">
            <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
              <div className="border border-gray-border/40 rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 max-[809px]:grid-cols-1">
                  {/* Left: Content */}
                  <div className="p-10 max-[809px]:p-6 border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
                      <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">{f.label}</span>
                    </div>
                    <h2 className="font-serif text-[28px] font-normal leading-[1.1] tracking-[-0.28px] text-dark mb-4 max-[809px]:text-[22px]">
                      {f.title}
                    </h2>
                    <p className="text-[14px] leading-[1.6] text-gray-text mb-8">{f.desc}</p>

                    {/* Feature Cards */}
                    <div className="space-y-4">
                      <div className="border border-gray-border/40 rounded-lg p-5">
                        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center mb-3">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="white" strokeWidth="1.5"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4" stroke="white" strokeWidth="1.5"/></svg>
                        </div>
                        <h4 className="font-serif text-[16px] text-dark mb-1">{f.feature1.title}</h4>
                        <p className="text-[13px] leading-[1.5] text-gray-text">{f.feature1.desc}</p>
                      </div>
                      <div className="border border-gray-border/40 rounded-lg p-5">
                        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center mb-3">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        </div>
                        <h4 className="font-serif text-[16px] text-dark mb-1">{f.feature2.title}</h4>
                        <p className="text-[13px] leading-[1.5] text-gray-text">{f.feature2.desc}</p>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="mt-8 border-t border-gray-border/40 pt-6">
                      <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="mb-3">
                        <path d="M8 16H4C4 10.477 8.477 6 14 6v4c-3.314 0-6 2.686-6 6zm16 0h-4c0-5.523 4.477-10 10-10v4c-3.314 0-6 2.686-6 6z" fill="#FF5101"/>
                      </svg>
                      <p className="text-[14px] leading-[1.6] text-dark mb-3">&ldquo;{f.testimonial.quote}&rdquo;</p>
                      <p className="text-[13px] font-medium text-dark">{f.testimonial.name}</p>
                      <p className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light">{f.testimonial.role}</p>
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="bg-card/50 p-8 flex items-center justify-center">
                    <Image src={f.image} alt={f.title} width={476} height={340} className="w-full h-auto rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Metrics */}
      <section className="py-6 bg-cream">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
          <div className="border border-gray-border/40 rounded-lg overflow-hidden">
            <div className="text-center p-10 max-[809px]:p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
                <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">Performance</span>
              </div>
              <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-[1199px]:text-[32px] max-[809px]:text-[28px]">
                Proven impact, measurable results
              </h2>
            </div>
            <div className="grid grid-cols-3 max-[809px]:grid-cols-1 border-t border-gray-border/40">
              {[
                { v: "10x", d: "faster seismic interpretation" },
                { v: "60%", d: "reduction in citizen query resolution time" },
                { v: "Zero", d: "hallucination deterministic reasoning" },
              ].map((m, i) => (
                <div key={i} className={`p-10 max-[809px]:p-6 ${i < 2 ? "border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b" : ""}`}>
                  <p className="font-serif text-[28px] font-normal leading-[1.1] tracking-[-0.28px] text-dark mb-2">{m.v}</p>
                  <p className="text-[14px] leading-[1.6] text-gray-text">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}
