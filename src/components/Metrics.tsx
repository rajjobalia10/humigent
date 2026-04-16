const metrics = [
  { value: "97%", desc: "accuracy in AI-generated summaries" },
  { value: "200+ hours", desc: "saved per team each month" },
  { value: "3x faster", desc: "meeting scheduling & follow-ups" },
];

export default function Metrics() {
  return (
    <section className="py-6 bg-cream">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
        <div className="border border-gray-border/40 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="text-center p-10 max-[809px]:p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
              <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                Metrics
              </span>
            </div>
            <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-[1199px]:text-[32px] max-[809px]:text-[28px]">
              Measurable results, every time
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-gray-text max-w-[520px] mx-auto">
              Humigent isn&apos;t just another tool - it delivers speed, accuracy,
              and real productivity gains for modern teams.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 max-[809px]:grid-cols-1 border-t border-gray-border/40">
            {metrics.map((m, i) => (
              <div
                key={i}
                className={`p-10 max-[809px]:p-6 ${
                  i < 2
                    ? "border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b"
                    : ""
                }`}
              >
                <p className="font-serif text-[28px] font-normal leading-[1.1] tracking-[-0.28px] text-dark mb-2 max-[809px]:text-[24px]">
                  {m.value}
                </p>
                <p className="text-[14px] leading-[1.6] text-gray-text">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
