"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    desc: "For individuals looking to automate their daily tasks.",
    monthly: 39,
    annual: 19,
    cta: "Get Started",
    featured: false,
    features: [
      "100 tasks/month",
      "Email automation",
      "Meeting summaries",
      "Google Calendar integration",
      "Slack notifications",
      "Basic support",
    ],
  },
  {
    name: "Pro",
    desc: "For fast-moving teams ready to offload the busywork.",
    monthly: 79,
    annual: 39,
    cta: "Get Started",
    featured: true,
    features: [
      "Everything in Starter",
      "1,000 tasks/month",
      "Priority email automation",
      "Advanced meeting summaries",
      "Multi-calendar sync",
      "Slack & Teams notifications",
    ],
  },
  {
    name: "Enterprise",
    desc: "For large teams and organizations that need scale and security.",
    monthly: 199,
    annual: 99,
    cta: "Get Started",
    featured: false,
    features: [
      "Everything in Pro",
      "Unlimited tasks/month",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced analytics & reporting",
      "24/7 priority support",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-6 bg-cream">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
        <div className="border border-gray-border/40 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="text-center p-10 max-[809px]:p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
              <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                Pricing
              </span>
            </div>
            <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-[1199px]:text-[32px] max-[809px]:text-[28px]">
              Simple, flexible plans
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-gray-text max-w-[420px] mx-auto">
              Choose the right plan for your team and scale as you grow.
            </p>

            {/* Toggle */}
            <div className="mt-8 flex flex-col items-center justify-center">
              <div className="relative inline-flex bg-dark rounded-full p-1">
                <button
                  onClick={() => setAnnual(true)}
                  className={`relative z-10 px-5 py-2 text-[13px] font-medium rounded-full transition-colors ${
                    annual ? "bg-white text-dark" : "text-white"
                  }`}
                >
                  Annually
                </button>
                <button
                  onClick={() => setAnnual(false)}
                  className={`relative z-10 px-5 py-2 text-[13px] font-medium rounded-full transition-colors ${
                    !annual ? "bg-white text-dark" : "text-white"
                  }`}
                >
                  Monthly
                </button>
              </div>
              {annual && (
                <span className="mt-2 bg-primary text-white text-[11px] font-medium px-2.5 py-1 rounded-full uppercase">
                  Save 53%
                </span>
              )}
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-3 max-[809px]:grid-cols-1 border-t border-gray-border/40">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`p-8 max-[809px]:p-6 ${
                  i < 2
                    ? "border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b"
                    : ""
                }`}
              >
                <h3 className="font-serif text-[22px] font-normal leading-[1.1] tracking-[-0.22px] text-dark">
                  {plan.name}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-gray-text min-h-[44px]">
                  {plan.desc}
                </p>
                <p className="mt-6 mb-6">
                  <span className="font-serif text-[28px] font-normal leading-[1.1] tracking-[-0.28px] text-dark">
                    ${annual ? plan.annual : plan.monthly}
                  </span>
                  <span className="text-[14px] text-gray-light ml-1">/mo</span>
                </p>
                <a
                  href="#"
                  className={`block text-center text-[14px] font-medium px-6 py-3 rounded-[4px] transition-opacity ${
                    plan.featured
                      ? "bg-primary text-white hover:opacity-90"
                      : "bg-white text-dark border border-dark/20 hover:border-dark/40"
                  }`}
                >
                  {plan.cta}
                </a>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <span
                        className={`w-[6px] h-[6px] rounded-full mt-2 shrink-0 ${
                          plan.featured ? "bg-primary" : "bg-gray-light"
                        }`}
                      />
                      <span className="text-[14px] leading-[1.6] text-gray-text">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
