export default function Hero() {
  return (
    <section className="bg-cream pt-16 pb-8 max-[809px]:pt-10">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5 text-center">
        <h1 className="font-serif text-[56px] font-normal leading-[1.1] tracking-[-1.12px] text-dark max-[1199px]:text-[44px] max-[809px]:text-[36px]">
          Where AI Meets Domain Expertise
          <br />
          to Drive Decisions
        </h1>
        <p className="mt-6 text-[14px] leading-[1.6] text-gray-text max-w-[520px] mx-auto">
          Deterministic, domain-trained AI that surfaces issues, explains
          drivers, and recommends the next best actions.
        </p>
      </div>
    </section>
  );
}
