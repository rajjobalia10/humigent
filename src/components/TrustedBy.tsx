const logos = [
  { name: "Life Sciences", icon: "L" },
  { name: "Hospitality", icon: "H" },
  { name: "Government", icon: "G" },
  { name: "Oil & Gas", icon: "O" },
  { name: "Pharma", icon: "P" },
  { name: "Life Sciences", icon: "L" },
  { name: "Hospitality", icon: "H" },
];

function LogoIcon({ letter }: { letter: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="4" fill="#181818" />
      <text x="10" y="14" textAnchor="middle" fill="white" fontSize="11" fontFamily="Georgia, serif">
        {letter}
      </text>
    </svg>
  );
}

export default function TrustedBy() {
  return (
    <section className="py-12 bg-cream">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
        <p className="text-center text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light mb-8">
          Serving diverse industries with precision
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap max-[809px]:gap-6">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2">
              <LogoIcon letter={logo.icon} />
              <span className="text-[14px] font-serif font-normal text-dark">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
