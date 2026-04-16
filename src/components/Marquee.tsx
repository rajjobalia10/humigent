const row1 = [
  "Drug Launch Planning",
  "HCP Engagement",
  "Dynamic Pricing",
  "Guest Personalization",
  "Compliance Retrieval",
  "Citizen Service Triage",
];

const row2 = [
  "Seismic Interpretation",
  "Revenue Optimization",
  "Data Harmonization",
  "Sentiment Analysis",
  "Workforce Planning",
  "Regulatory Extraction",
];

function Tag({ text }: { text: string }) {
  return (
    <span className="inline-block whitespace-nowrap border border-gray-border/60 rounded-[4px] px-4 py-2 text-[14px] max-[809px]:text-[12px] max-[809px]:px-3 max-[809px]:py-1.5 text-gray-text mr-3 shrink-0">
      {text}
    </span>
  );
}

export default function Marquee() {
  return (
    <section className="py-12 bg-cream overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
        {/* Row 1 - scrolls left */}
        <div className="overflow-hidden mb-3">
          <div className="flex marquee-left">
            {[...row1, ...row1, ...row1, ...row1].map((t, i) => (
              <Tag key={i} text={t} />
            ))}
          </div>
        </div>
        {/* Row 2 - scrolls right */}
        <div className="overflow-hidden">
          <div className="flex marquee-right">
            {[...row2, ...row2, ...row2, ...row2].map((t, i) => (
              <Tag key={i} text={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
