import Image from "next/image";

const steps = [
  {
    label: "Phase-1",
    title: "Education & Alignment",
    desc: "Foundational AI workshops plus quick-win productivity applications to build organizational readiness.",
    image: "/images/step-1-connect.png",
  },
  {
    label: "Phase-2",
    title: "Discovery & Roadmap",
    desc: "Departmental interviews identifying pain points, aligned to business milestones and a prioritized AI roadmap.",
    image: "/images/step-2-understand.png",
  },
  {
    label: "Phase-3",
    title: "Deploy & Scale",
    desc: "Agentic AI implementation with a subscription-based rent-to-own model, transitioning to in-house deployment with ongoing support.",
    image: "/images/step-3-results.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-6 bg-cream">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
        <div className="border border-gray-border/40 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="p-10 max-[809px]:p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
              <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                AI-EaaS Execution Model
              </span>
            </div>
            <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-w-[500px] max-[1199px]:text-[32px] max-[809px]:text-[28px]">
              From strategy to impact in three phases
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-gray-text max-w-[480px]">
              Humigent&apos;s AI-as-a-Service model ensures seamless adoption,
              rapid deployment, and measurable outcomes.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-3 max-[809px]:grid-cols-1 border-t border-gray-border/40">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`${
                  i < 2
                    ? "border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b"
                    : ""
                }`}
              >
                {/* Image */}
                <div className="bg-card/50 p-6 flex items-center justify-center min-h-[220px] border-b border-gray-border/40">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={400}
                    height={278}
                    className="w-full max-w-[320px] h-auto"
                  />
                </div>
                {/* Text */}
                <div className="p-8 max-[809px]:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
                    <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                      {s.label}
                    </span>
                  </div>
                  <h3 className="font-serif text-[22px] font-normal leading-[1.1] tracking-[-0.22px] text-dark mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-gray-text">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
