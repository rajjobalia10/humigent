import Image from "next/image";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

const blogs = [
  { title: "Accelerated, De-Risked Drug Launch with Agentic AI", author: "Humigent Team", avatar: "/images/jack-callis.jpeg", tags: ["Life Sciences", "AI"], excerpt: "Agent-based forecast and launch planning with predictive scenario modeling and competitive simulations." },
  { title: "Precision HCP Engagement & Next Best Action", author: "Humigent Team", avatar: "/images/laura-chen.jpeg", tags: ["Pharma", "NBA"], excerpt: "Compliant, personalized recommendations that guide sales and MSL teams to the most impactful actions." },
  { title: "Dynamic Real-Time Pricing for Hospitality", author: "Humigent Team", avatar: "/images/nathan-brooks.jpeg", tags: ["Hospitality", "Pricing"], excerpt: "Autonomous agents analyze real-time market data and competitor activity to optimize pricing for maximum yield." },
  { title: "Enterprise Data Clarity with CortexIQ & DataLens", author: "Humigent Team", avatar: "/images/jack-callis.jpeg", tags: ["Enterprise", "Data"], excerpt: "Unify siloed metrics into a single source of truth with contextual, compliant, action-ready insights." },
  { title: "Hyper-Personalized Guest Journey Mapping", author: "Humigent Team", avatar: "/images/laura-chen.jpeg", tags: ["Hospitality", "CX"], excerpt: "Unify guest profiles, anticipate needs across the booking lifecycle, and deliver personalized upsell messages." },
  { title: "AI-Powered Governance for Citizen Services", author: "Humigent Team", avatar: "/images/nathan-brooks.jpeg", tags: ["Government", "NLP"], excerpt: "Using Agentic AI to categorize, prioritize and route citizen communications autonomously." },
  { title: "Automated Compliance & Regulatory Retrieval", author: "Humigent Team", avatar: "/images/jack-callis.jpeg", tags: ["Compliance", "RAG"], excerpt: "Automated extraction and real-time retrieval of complex regulatory documents via intelligent chatbot." },
  { title: "Seismic Interpretation at 10x Speed", author: "Humigent Team", avatar: "/images/laura-chen.jpeg", tags: ["Oil & Gas", "AI"], excerpt: "Browser-accessible platforms enabling E&P teams to interpret 3D seismic datasets dramatically faster." },
  { title: "The Deterministic Reasoning Advantage", author: "Humigent Team", avatar: "/images/nathan-brooks.jpeg", tags: ["Technology", "Trust"], excerpt: "Zero-hallucination, auditable intelligence with explainable causal chains and consistent outputs." },
  { title: "From Static Dashboards to Agentic Intelligence", author: "Humigent Team", avatar: "/images/jack-callis.jpeg", tags: ["Strategy", "AI"], excerpt: "Why the traditional analytics model is broken and how Agentic AI delivers predictive action." },
  { title: "Building Domain-Trained AI Agents at Scale", author: "Humigent Team", avatar: "/images/laura-chen.jpeg", tags: ["Engineering", "Scale"], excerpt: "Purpose-engineered AI that understands industry context, nuance, workflows, and compliance requirements." },
];

export default function BlogsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-16 pb-8 max-[809px]:pt-10">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5 text-center">
          <h1 className="font-serif text-[56px] font-normal leading-[1.1] tracking-[-1.12px] text-dark max-[1199px]:text-[44px] max-[809px]:text-[36px]">
            Stay ahead with Agentic AI insights
          </h1>
          <p className="mt-6 text-[14px] leading-[1.6] text-gray-text max-w-[480px] mx-auto">
            Explore industry use cases, product updates, and expert perspectives
            from the Humigent team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-6 bg-cream">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
          <div className="border border-gray-border/40 rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 max-[1199px]:grid-cols-2 max-[809px]:grid-cols-1">
              {blogs.map((blog, i) => (
                <div
                  key={i}
                  className={`${(i % 3 !== 2) ? "border-r border-gray-border/40 max-[809px]:border-r-0" : ""} border-b border-gray-border/40`}
                >
                  {/* Image Placeholder */}
                  <div className="bg-card/50 p-6 min-h-[160px] flex flex-col justify-end border-b border-gray-border/40">
                    <p className="text-[14px] font-serif text-dark/70 text-center leading-[1.4] mb-3">{blog.title}</p>
                    <div className="flex items-center justify-center gap-2">
                      {blog.tags.map((tag, ti) => (
                        <span key={ti} className="text-[11px] font-mono uppercase tracking-[-0.1px] border border-gray-border/60 rounded-[3px] px-2 py-0.5 text-gray-text">{tag}</span>
                      ))}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-[18px] font-normal leading-[1.2] tracking-[-0.18px] text-dark mb-2">{blog.title}</h3>
                    <p className="text-[13px] leading-[1.6] text-gray-text mb-4">{blog.excerpt}</p>
                    <div className="flex items-center gap-3">
                      <Image src={blog.avatar} alt={blog.author} width={28} height={28} className="rounded-full object-cover w-7 h-7" />
                      <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">{blog.author}</span>
                    </div>
                  </div>
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
