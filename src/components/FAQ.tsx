"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What can I automate with Humigent?",
    a: "Humigent handles repetitive work like emails, scheduling, and meeting summaries, while integrating with your favorite tools.",
  },
  {
    q: "Do I need technical skills to use it?",
    a: "No. Humigent is built to be simple — just connect your apps and automation starts running in the background.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. All data is encrypted and processed securely, following industry best practices.",
  },
  {
    q: "Can I change my plan later?",
    a: "Of course. You can upgrade, downgrade, or cancel anytime as your needs evolve.",
  },
  {
    q: "Which tools does Humigent connect with?",
    a: "Humigent works with Gmail, Google Calendar, Slack, Notion, and many more productivity apps.",
  },
  {
    q: "How quickly can my team get started?",
    a: "Most teams are up and running in under a day. Humigent is designed to be simple and intuitive, so you can start automating tasks immediately without long onboarding processes.",
  },
  {
    q: "What kind of support does Humigent provide?",
    a: "We provide dedicated email support, detailed documentation, and regular product updates. Every customer also gets access to a free 30-minute onboarding call to help tailor Humigent to your workflows.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-6 bg-cream">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
        <div className="border border-gray-border/40 rounded-lg overflow-hidden">
          <div className="grid grid-cols-[1fr_1.2fr] max-[809px]:grid-cols-1">
            {/* Left: Title */}
            <div className="p-10 max-[809px]:p-6 border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
                <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                  FAQ
                </span>
              </div>
              <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-[1199px]:text-[32px] max-[809px]:text-[28px]">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-[14px] leading-[1.6] text-gray-text">
                Everything you need to know about getting started with Humigent.
              </p>
            </div>

            {/* Right: Accordion */}
            <div>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-b border-gray-border/40 last:border-b-0"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-card/30 transition-colors"
                  >
                    <span className="text-[15px] leading-[1.4] text-dark pr-4">
                      {faq.q}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`shrink-0 transition-transform duration-200 ${
                        open === i ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M5 7.5l5 5 5-5"
                        stroke="#919191"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      open === i ? "max-h-[200px]" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-[14px] leading-[1.6] text-gray-text">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
