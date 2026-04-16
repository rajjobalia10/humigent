const row1 = [
  "Draft client emails",
  "Summarize meetings",
  "Schedule calls",
  "Generate blog posts",
  "Enrich CRM data",
  "Translate documents",
];

const row2 = [
  "Create reports",
  "Track deadlines",
  "Manage tickets",
  "Research leads",
  "Assist shoppers",
  "Automate reminders",
];

function Tag({ text }: { text: string }) {
  return (
    <span className="inline-block whitespace-nowrap border border-gray-border/60 rounded-[4px] px-4 py-2 text-[14px] text-gray-text mr-3 shrink-0">
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
