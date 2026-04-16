import Image from "next/image";

export default function InAction() {
  return (
    <section id="about" className="py-6 bg-cream">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
        {/* Section Card */}
        <div className="border border-gray-border/40 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="p-10 max-[809px]:p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
              <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                About Humigent
              </span>
            </div>
            <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-[1199px]:text-[32px] max-[809px]:text-[28px]">
              The Next Generation of Domain-focused Agentic AI Solutions
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-gray-text max-w-[560px]">
              We combine Agentic AI, technology and deep domain expertise to
              solve complex business problems that drive smarter and more
              efficient decision making.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 max-[809px]:grid-cols-1 border-t border-gray-border/40">
            {/* Left: Stats + Quote */}
            <div className="border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b">
              <div className="p-10 max-[809px]:p-6 border-b border-gray-border/40">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
                  <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                    Our Vision
                  </span>
                </div>
                <h3 className="font-serif text-[28px] font-normal leading-[1.1] tracking-[-0.28px] text-dark max-[809px]:text-[22px]">
                  See What Others Miss. Act Before They Can.
                </h3>
                <a
                  href="#demo"
                  className="mt-6 inline-block bg-primary text-white text-[14px] font-medium px-6 py-3 rounded-[4px] hover:opacity-90 transition-opacity"
                >
                  Request A Demo
                </a>
              </div>

              {/* Mission */}
              <div className="p-10 max-[809px]:p-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="mb-4"
                >
                  <path
                    d="M8 16H4C4 10.477 8.477 6 14 6v4c-3.314 0-6 2.686-6 6zm16 0h-4c0-5.523 4.477-10 10-10v4c-3.314 0-6 2.686-6 6z"
                    fill="#FF5101"
                  />
                </svg>
                <p className="text-[16px] leading-[1.6] text-dark mb-6">
                  &ldquo;Humigent&apos;s multi-agent intelligence detects the
                  signals buried in complexity&mdash;then tells you exactly what
                  to do about them.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/paul-lohim.png"
                    alt="Humigent Leadership"
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-10 h-10"
                  />
                  <div>
                    <p className="text-[14px] font-medium text-dark">
                      Humigent Team
                    </p>
                    <p className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light">
                      Applied AI for Real World Applications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="p-10 max-[809px]:p-6 flex items-center justify-center bg-card/30">
              <Image
                src="/images/in-action-workflow.png"
                alt="Humigent AI Platform"
                width={595}
                height={578}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
