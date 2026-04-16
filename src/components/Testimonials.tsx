import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-6 bg-cream">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
        <div className="border border-gray-border/40 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="text-center p-10 max-[809px]:p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
              <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                Our Principles
              </span>
            </div>
            <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-[1199px]:text-[32px] max-[809px]:text-[28px]">
              The principles that guide us
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-gray-text max-w-[480px] mx-auto">
              At Humigent, we believe the future of intelligence is Human + AI
              Agents.
            </p>
          </div>

          {/* Featured Value */}
          <div className="border-t border-gray-border/40">
            <div className="grid grid-cols-[1fr_1fr] max-[809px]:grid-cols-1">
              <div className="border-r border-gray-border/40 max-[809px]:border-r-0">
                <Image
                  src="/images/abraham-john.png"
                  alt="Humigent Vision"
                  width={335}
                  height={377}
                  className="w-full h-full object-cover max-[809px]:max-h-[300px]"
                />
              </div>
              <div className="p-10 max-[809px]:p-6 flex flex-col justify-center">
                <p className="font-serif text-[20px] max-[809px]:text-[17px] leading-[1.5] text-dark mb-8">
                  &ldquo;We know data trust is paramount. Our solutions are
                  built with a Humigent Trust Index and full auditability,
                  ensuring that every insight is compliant, transparent and
                  absolutely reliable.&rdquo;
                </p>
                <div>
                  <p className="text-[14px] font-medium text-dark">
                    Trust & Integrity
                  </p>
                  <p className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light">
                    CEO
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two More Values */}
          <div className="grid grid-cols-2 max-[809px]:grid-cols-1 border-t border-gray-border/40">
            <div className="p-10 max-[809px]:p-6 border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b">
              <p className="font-serif text-[18px] max-[809px]:text-[16px] leading-[1.5] text-dark mb-8">
                &ldquo;We are not just a technology company; we are domain
                experts first. Our solutions are always contextually correct,
                solving the right problems because they are designed by
                executives who have sat in your seat.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/trevor-tanor.jpg"
                  alt="Domain-First Expertise"
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-10 h-10"
                />
                <div>
                  <p className="text-[14px] font-medium text-dark">
                    Domain-First Expertise
                  </p>
                  <p className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light">
                    CEO
                  </p>
                </div>
              </div>
            </div>
            <div className="p-10 max-[809px]:p-6">
              <p className="font-serif text-[18px] max-[809px]:text-[16px] leading-[1.5] text-dark mb-8">
                &ldquo;We prioritize measurable results over vanity metrics. Our
                goal is to move beyond descriptive analysis to deliver predictive
                action, ensuring every resource deployed drives tangible
                commercial impact.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/sarah-mitchell.png"
                  alt="Precision & Impact"
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-10 h-10"
                />
                <div>
                  <p className="text-[14px] font-medium text-dark">
                    Precision & Impact
                  </p>
                  <p className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light">
                    CEO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
