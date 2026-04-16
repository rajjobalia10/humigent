import Image from "next/image";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

const team = [
  { name: "Leadership", role: "CEO & Founder", img: "/images/abraham-john.png" },
  { name: "Product Lead", role: "Head of Product", img: "/images/trevor-tanor.jpg" },
  { name: "Engineering", role: "CTO", img: "/images/sarah-mitchell.png" },
  { name: "AI Research", role: "Head of AI/ML", img: "/images/jack-callis.jpeg" },
  { name: "Operations", role: "COO", img: "/images/laura-chen.jpeg" },
  { name: "Growth", role: "VP of Growth", img: "/images/nathan-brooks.jpeg" },
];

const values = [
  { title: "Trust & Integrity", desc: "Our solutions are built with a Humigent Trust Index and full auditability, ensuring that every insight is compliant, transparent and absolutely reliable." },
  { title: "Domain-First Expertise", desc: "We are not just a technology company; we are domain experts first. Our solutions are always contextually correct, designed by executives who have sat in your seat." },
  { title: "Precision & Impact", desc: "We prioritize measurable results over vanity metrics. Our goal is to move beyond descriptive analysis to deliver predictive action and tangible commercial impact." },
  { title: "Action & Agility", desc: "Our Smart Workbench technology is designed for seamless integration and rapid deployment, ensuring your team can move from strategy to market action in days, not months." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-16 pb-8 max-[809px]:pt-10">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5 text-center">
          <h1 className="font-serif text-[56px] font-normal leading-[1.1] tracking-[-1.12px] text-dark max-[1199px]:text-[44px] max-[809px]:text-[36px]">
            The Future of Intelligence is
            <br />
            Human + AI Agents
          </h1>
          <p className="mt-6 text-[14px] leading-[1.6] text-gray-text max-w-[520px] mx-auto">
            Humigent bridges the gap between complex data and confident,
            compliant business decisions, powered by Agentic AI and decades of
            industry expertise.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-6 bg-cream">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
          <div className="border border-gray-border/40 rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 max-[809px]:grid-cols-1">
              <div className="p-10 max-[809px]:p-6 border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
                  <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">Our Story</span>
                </div>
                <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark mb-6 max-[1199px]:text-[32px] max-[809px]:text-[28px]">
                  Building Humigent: from frustration to flow
                </h2>
                <p className="text-[14px] leading-[1.6] text-gray-text mb-4">
                  It all began with a simple frustration: our leaders, all veterans from major pharma
                  companies, consulting firms, and successful tech startups realized the traditional
                  analytics model was broken.
                </p>
                <p className="text-[14px] leading-[1.6] text-gray-text mb-4">
                  For decades, teams were drowning in static dashboards and complex reports, leaving
                  leaders paralyzed and unable to act fast enough. They knew that if AI was to truly
                  transform the industry, it needed to do more than just report the data; it needed to
                  act on it.
                </p>
                <p className="text-[14px] leading-[1.6] text-gray-text">
                  Humigent was founded to solve this with Agentic AI, a new class of artificial
                  intelligence that reasons, acts and solves end-to-end business problems autonomously.
                </p>
              </div>
              <div className="bg-card/50 flex items-center justify-center p-8">
                <Image src="/images/in-action-workflow.png" alt="Humigent Platform" width={595} height={578} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-6 bg-cream">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
          <div className="border border-gray-border/40 rounded-lg overflow-hidden">
            <div className="text-center p-10 max-[809px]:p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
                <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">Our Vision</span>
              </div>
              <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-[1199px]:text-[32px] max-[809px]:text-[28px]">
                Our vision and purpose
              </h2>
              <p className="mt-4 text-[14px] leading-[1.6] text-gray-text max-w-[600px] mx-auto">
                Empowering organizations to seamlessly adopt and scale cutting-edge Applied AI
                and Advanced Analytics to generate business solutions in an efficient and impactful manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-6 bg-cream">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
          <div className="border border-gray-border/40 rounded-lg overflow-hidden">
            <div className="text-center p-10 pb-0 max-[809px]:p-6 max-[809px]:pb-0">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
                <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">Core Values</span>
              </div>
              <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark mb-10 max-[1199px]:text-[32px] max-[809px]:text-[28px]">
                The principles that guide us
              </h2>
            </div>
            <div className="grid grid-cols-2 max-[809px]:grid-cols-1 border-t border-gray-border/40">
              {values.map((v, i) => (
                <div key={i} className={`p-10 max-[809px]:p-6 ${i % 2 === 0 ? "border-r border-gray-border/40 max-[809px]:border-r-0" : ""} ${i < 2 ? "border-b border-gray-border/40" : ""}`}>
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-5">
                    <span className="text-white font-medium text-[14px]">0{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-[22px] font-normal leading-[1.1] tracking-[-0.22px] text-dark mb-2">{v.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-gray-text">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-6 bg-cream">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
          <div className="border border-gray-border/40 rounded-lg overflow-hidden">
            <div className="text-center p-10 max-[809px]:p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
                <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">Team</span>
              </div>
              <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-[1199px]:text-[32px] max-[809px]:text-[28px]">
                The people behind Humigent
              </h2>
            </div>
            <div className="grid grid-cols-3 max-[809px]:grid-cols-2 border-t border-gray-border/40">
              {team.map((t, i) => (
                <div key={i} className={`border-b border-gray-border/40 ${(i % 3 !== 2) ? "border-r border-gray-border/40 max-[809px]:border-r-0" : ""} ${(i % 2 === 0) ? "max-[809px]:border-r max-[809px]:border-gray-border/40" : ""}`}>
                  <div className="bg-card/50 aspect-square flex items-center justify-center overflow-hidden">
                    <Image src={t.img} alt={t.name} width={300} height={300} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="text-[14px] font-medium text-dark">{t.name}</p>
                    <p className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-6 bg-cream">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
          <div className="border border-gray-border/40 rounded-lg overflow-hidden p-10 max-[809px]:p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
              <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">Careers</span>
            </div>
            <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark mb-4 max-[1199px]:text-[32px] max-[809px]:text-[28px]">
              Join our team
            </h2>
            <p className="text-[14px] leading-[1.6] text-gray-text max-w-[480px] mx-auto mb-8">
              Build, innovate, and grow with a team that cares about impact. We&apos;re
              always looking for passionate people who want to shape the future of AI.
            </p>
            <a href="/contact" className="inline-block bg-primary text-white text-[14px] font-medium px-6 py-3 rounded-[4px] hover:opacity-90 transition-opacity">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}
