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
                Testimonials
              </span>
            </div>
            <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-[1199px]:text-[32px] max-[809px]:text-[28px]">
              Trusted by forward-thinking
              <br />
              companies
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-gray-text max-w-[480px] mx-auto">
              Humigent powers modern teams by cutting busywork and automating the
              essentials.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="border-t border-gray-border/40">
            <div className="grid grid-cols-[1fr_1fr] max-[809px]:grid-cols-1">
              <div className="border-r border-gray-border/40 max-[809px]:border-r-0">
                <Image
                  src="/images/abraham-john.png"
                  alt="Abraham John"
                  width={335}
                  height={377}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10 max-[809px]:p-6 flex flex-col justify-center">
                <p className="font-serif text-[20px] leading-[1.5] text-dark mb-8">
                  &ldquo;Humigent has completely changed the way we work. Tasks
                  that used to pile up and slow us down are now handled
                  automatically. It&apos;s like having an extra team member
                  working around the clock.&rdquo;
                </p>
                <div>
                  <p className="text-[14px] font-medium text-dark">
                    Abraham John
                  </p>
                  <p className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light">
                    Product manager, flowops
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Smaller Testimonials */}
          <div className="grid grid-cols-2 max-[809px]:grid-cols-1 border-t border-gray-border/40">
            <div className="p-10 max-[809px]:p-6 border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b">
              <p className="font-serif text-[18px] leading-[1.5] text-dark mb-8">
                &ldquo;The automation feels invisible yet powerful. Humigent
                quietly keeps everything on track so we can focus on the bigger
                picture. Our team is already loving it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/trevor-tanor.jpg"
                  alt="Trevor Tanor"
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-10 h-10"
                />
                <div>
                  <p className="text-[14px] font-medium text-dark">
                    Trevor Tanor
                  </p>
                  <p className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light">
                    Product Lead, Kloops
                  </p>
                </div>
              </div>
            </div>
            <div className="p-10 max-[809px]:p-6">
              <p className="font-serif text-[18px] leading-[1.5] text-dark mb-8">
                &ldquo;We were up and running in days. The simplicity is what
                sold us, but the results are what keep us here — more
                productivity, less stress, and happier clients.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/sarah-mitchell.png"
                  alt="Sarah Mitchell"
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-10 h-10"
                />
                <div>
                  <p className="text-[14px] font-medium text-dark">
                    Sarah Mitchell
                  </p>
                  <p className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light">
                    CMO, Nexaverser
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
