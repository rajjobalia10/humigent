export default function CTASection() {
  return (
    <section id="demo" className="py-10 bg-cream">
      <div className="mx-auto max-w-[1200px] px-0">
        <div className="bg-dark relative overflow-hidden px-[60px] max-[809px]:px-5 py-20 max-[809px]:py-12">
          {/* Text content */}
          <div className="relative z-10">
            <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-white max-w-[540px] max-[1199px]:text-[32px] max-[809px]:text-[28px]">
              Want to see how Agentic AI can solve your toughest challenges?
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-gray-light max-w-[480px]">
              Book a demo with our experts today and discover how Humigent&apos;s
              multi-agent intelligence can transform your operations.
            </p>
            <a
              href="#"
              className="mt-8 inline-block bg-primary text-white text-[14px] font-medium px-6 py-3 rounded-[4px] hover:opacity-90 transition-opacity"
            >
              Book a Demo
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
