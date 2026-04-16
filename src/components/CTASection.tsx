export default function CTASection() {
  return (
    <section className="py-10 bg-cream">
      <div className="mx-auto max-w-[1200px] px-0">
        <div className="bg-dark relative overflow-hidden px-[60px] max-[809px]:px-5 py-20 max-[809px]:py-12">
          {/* Text content */}
          <div className="relative z-10">
            <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-white max-w-[500px] max-[1199px]:text-[32px] max-[809px]:text-[28px]">
              Work smarter, not harder with Humigent
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-gray-light max-w-[480px]">
              Start automating tasks today and give your team more time to focus
              on what matters.
            </p>
            <a
              href="#"
              className="mt-8 inline-block bg-primary text-white text-[14px] font-medium px-6 py-3 rounded-[4px] hover:opacity-90 transition-opacity"
            >
              Request a demo
            </a>
          </div>

          {/* Sunburst SVG - positioned top right, clipped by container */}
          <div className="absolute top-[-180px] right-[-180px] w-[450px] h-[450px] max-[809px]:w-[300px] max-[809px]:h-[300px] max-[809px]:top-[-100px] max-[809px]:right-[-100px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 450 450"
              fill="none"
            >
              <path
                d="M 278.898 21.702 L 235.739 10.145 L 199.33 145.902 L 166.5 23.339 L 123.341 34.895 L 158.83 167.318 L 70.445 78.955 L 38.843 110.536 L 135.798 207.491 L 15.055 175.132 L 3.477 218.291 L 135.409 253.657 C 127.081 217.783 141.608 180.473 172.001 159.675 C 202.395 138.878 242.432 138.849 272.855 159.604 C 303.278 180.359 317.857 217.648 309.58 253.534 L 429.443 285.648 L 441.02 242.489 L 308.577 207 L 429.32 174.641 L 417.743 131.482 L 285.32 166.97 L 373.705 78.586 L 342.102 46.984 L 246.498 142.589 Z"
                fill="#FF5101"
              />
              <path
                d="M 309.436 254.025 C 305.787 269.411 298.114 283.551 287.202 294.995 L 374.052 381.845 L 405.655 350.243 Z M 286.323 295.916 C 275.482 306.982 261.777 315.266 246.395 319.52 L 277.998 437.461 L 321.157 425.905 Z M 244.78 319.95 C 229.62 323.853 213.702 323.712 198.614 319.541 L 166.991 437.605 L 210.15 449.161 Z M 197.1 319.111 C 182.148 314.682 168.616 306.417 157.848 295.139 L 70.793 382.214 L 102.395 413.816 Z M 157.132 294.382 C 146.498 283.018 139.023 269.07 135.45 253.923 L 15.198 286.139 L 26.775 329.298 L 157.152 294.382 Z"
                fill="#FF5101"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
