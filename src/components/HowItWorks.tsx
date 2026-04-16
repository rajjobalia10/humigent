import Image from "next/image";

const steps = [
  {
    label: "Step-1",
    title: "Connect your tools",
    desc: "Link Gmail, Slack, Calendar, Notion, and more in a few clicks.",
    image: "/images/step-1-connect.png",
  },
  {
    label: "Step-2",
    title: "Let AI understand the work",
    desc: "Emails, tasks, and docs are scanned and summarized instantly.",
    image: "/images/step-2-understand.png",
  },
  {
    label: "Step-3",
    title: "Get results, automatically",
    desc: "Summaries, tasks, and scheduling handled in the background — no manual effort.",
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
                How It Works
              </span>
            </div>
            <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-w-[500px] max-[1199px]:text-[32px] max-[809px]:text-[28px]">
              Automation in three simple steps
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-gray-text max-w-[480px]">
              Humigent makes complex workflows effortless — from start to finish.
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
