"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  {
    label: "Industry-1",
    tab: "Life Sciences",
    title: "Autonomous AI for Confident Commercialization",
    desc: "Agent-based forecast and launch planning with predictive scenario modeling and competitive simulations. Products include Insights Navigator, One Customer Universe, MSL Voice, GeoForecast, Data Lens, and Dashboard Lens.",
    image: "/images/product-emails.png",
  },
  {
    label: "Industry-2",
    tab: "Food & Hospitality",
    title: "Data-Driven Intelligence for Hospitality",
    desc: "AI-powered workflow automation for hotels, restaurants, and cloud kitchens\u2014supporting smoother operations, optimized staffing, faster decision-making, and elevated guest satisfaction. Products include Reputaintel, Pricelytics, Ingredi-scan, and Foresight.",
    image: "/images/product-scheduling.png",
  },
  {
    label: "Industry-3",
    tab: "Government",
    title: "AI-Powered Governance for Citizen-Centric Services",
    desc: "Advanced AI-driven intelligence for government workflows, enabling faster decisions, improved public services, and streamlined operations. Products include Civil-Intel and DataArc.",
    image: "/images/product-task-automation.png",
  },
  {
    label: "Industry-4",
    tab: "Oil & Gas",
    title: "AI-Powered Geoscience for E&P Teams",
    desc: "Redefining seismic visualization, interpretation, and collaboration using deep neural networks. Browser-accessible platforms enabling E&P teams to interpret 3D seismic datasets up to 10x faster. Products include Visualization AI and Interpretation AI.",
    image: "/images/product-summaries.png",
  },
];

export default function Products() {
  const [active, setActive] = useState(0);

  return (
    <section id="industries" className="py-6 bg-cream">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
        <div className="border border-gray-border/40 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="text-center p-10 max-[809px]:p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
              <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                Industries
              </span>
            </div>
            <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-[1199px]:text-[32px] max-[809px]:text-[28px]">
              Solving your industry&apos;s
              <br />
              hardest challenges
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-gray-text max-w-[480px] mx-auto">
              Humigent delivers impact-ready AI agents engineered to solve
              industry-specific problems.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-[240px_1fr] max-[1199px]:grid-cols-[180px_1fr] max-[809px]:grid-cols-1 border-t border-gray-border/40">
            {/* Tabs */}
            <div className="border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b p-6 max-[809px]:p-4">
              <div className="flex flex-col max-[809px]:flex-row max-[809px]:overflow-x-auto gap-0">
                {products.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`text-left text-[12px] font-mono tracking-[-0.12px] uppercase py-3 border-b border-gray-border/40 last:border-b-0 max-[809px]:border-b-0 max-[809px]:px-3 max-[809px]:py-2 max-[809px]:whitespace-nowrap transition-colors ${
                      active === i
                        ? "text-dark font-medium"
                        : "text-gray-light hover:text-gray-text"
                    }`}
                  >
                    {p.tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Content */}
            <div className="grid grid-cols-2 max-[1199px]:grid-cols-1 max-[809px]:grid-cols-1">
              <div className="p-10 max-[809px]:p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
                  <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                    {products[active].label}
                  </span>
                </div>
                <h3 className="font-serif text-[28px] font-normal leading-[1.1] tracking-[-0.28px] text-dark mb-4 max-[809px]:text-[22px]">
                  {products[active].title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-gray-text">
                  {products[active].desc}
                </p>
              </div>
              <div className="bg-card/50 p-8 flex items-center justify-center">
                <Image
                  src={products[active].image}
                  alt={products[active].title}
                  width={476}
                  height={340}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
