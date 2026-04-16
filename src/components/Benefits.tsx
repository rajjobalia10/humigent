const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="white" strokeWidth="1.5" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    title: "Domain-Trained Agents",
    desc: "Purpose-engineered AI that understands industry context, nuance, workflows, and compliance.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    title: "Deterministic Reasoning",
    desc: "Zero-hallucination, auditable intelligence with explainable causal chains and consistent outputs.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Real-World Complexity Ready",
    desc: "Architected for messy, multi-source data, unstructured signals, and evolving business conditions.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Connected Decision Intelligence",
    desc: "AI that links insights, actions, and outcomes\u2014across teams, systems, and time horizons.",
  },
];

export default function Benefits() {
  return (
    <section className="py-6 bg-cream">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
        <div className="border border-gray-border/40 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="text-center p-10 pb-0 max-[809px]:p-6 max-[809px]:pb-0">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
              <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                Core Capabilities
              </span>
            </div>
            <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-[1199px]:text-[32px] max-[809px]:text-[28px]">
              Enterprise-grade AI, built for certainty
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-gray-text max-w-[520px] mx-auto mb-10">
              Humigent fuses cognitive architecture, governed reasoning, and
              enterprise-grade intelligence to help organizations act with
              certainty when it matters most.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 max-[809px]:grid-cols-1 border-t border-gray-border/40">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`p-10 max-[809px]:p-6 ${
                  i % 2 === 0 ? "border-r border-gray-border/40 max-[809px]:border-r-0" : ""
                } ${i < 2 ? "border-b border-gray-border/40" : ""}`}
              >
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-5">
                  {b.icon}
                </div>
                <h3 className="font-serif text-[22px] font-normal leading-[1.1] tracking-[-0.22px] text-dark mb-2">
                  {b.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-gray-text">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
