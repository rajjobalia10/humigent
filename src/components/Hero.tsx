"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-cream pt-16 pb-8 max-[809px]:pt-10">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5 text-center">
        <h1
          className={`font-serif text-[56px] font-normal leading-[1.1] tracking-[-1.12px] text-dark max-[1199px]:text-[44px] max-[809px]:text-[36px] transition-opacity duration-700 ${show ? "opacity-100" : "opacity-0"}`}
        >
          Multi-Agent Intelligence for
          <br />
          High-Stakes Decisions
        </h1>

        <p
          className={`mt-6 text-[14px] leading-[1.6] text-gray-text max-w-[520px] mx-auto transition-opacity duration-700 delay-300 ${show ? "opacity-100" : "opacity-0"}`}
        >
          Deterministic, domain-trained AI that surfaces issues, explains
          drivers, and recommends the next best actions.
        </p>

        <div
          className={`mt-8 flex items-center justify-center gap-4 max-[809px]:flex-col transition-opacity duration-700 delay-500 ${show ? "opacity-100" : "opacity-0"}`}
        >
          <a
            href="#demo"
            className="bg-primary text-white text-[14px] font-medium px-6 py-3 rounded-[4px] hover:opacity-90 transition-opacity"
          >
            Request A Demo
          </a>
          <a
            href="#about"
            className="bg-white text-dark text-[14px] font-medium px-6 py-3 rounded-[4px] border border-dark/20 hover:border-dark/40 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
