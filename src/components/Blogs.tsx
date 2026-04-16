import Image from "next/image";

const blogs = [
  {
    date: "2025",
    title: "Accelerated, De-Risked Drug Launch with Agentic AI",
    excerpt:
      "Agent-based forecast and launch planning with predictive scenario modeling and competitive simulations by autonomously simulating the market ecosystem.",
    author: "Humigent Team",
    avatar: "/images/jack-callis.jpeg",
    image: "/images/blog-1.png",
    tags: ["Life Sciences", "AI"],
  },
  {
    date: "2025",
    title: "Dynamic Real-Time Pricing & Revenue Optimization",
    excerpt:
      "Autonomous agents analyze real-time market data, competitor activity and inventory levels to optimize pricing for maximum yield in hospitality.",
    author: "Humigent Team",
    avatar: "/images/laura-chen.jpeg",
    image: "/images/blog-2.png",
    tags: ["Hospitality", "Pricing"],
  },
  {
    date: "2025",
    title: "AI-Powered Governance for Citizen-Centric Services",
    excerpt:
      "Using Agentic AI and NLP to instantly categorize, prioritize and route citizen communications, resolving common issues autonomously.",
    author: "Humigent Team",
    avatar: "/images/nathan-brooks.jpeg",
    image: "/images/blog-3.png",
    tags: ["Government", "NLP"],
  },
];

export default function Blogs() {
  return (
    <section id="thought-leadership" className="py-6 bg-cream">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
        <div className="border border-gray-border/40 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="p-10 max-[809px]:p-6 flex items-end justify-between max-[809px]:flex-col max-[809px]:items-start max-[809px]:gap-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
                <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                  Thought Leadership
                </span>
              </div>
              <h2 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark max-[1199px]:text-[32px] max-[809px]:text-[28px]">
                Industry insights & use cases
              </h2>
              <p className="mt-3 text-[14px] leading-[1.6] text-gray-text max-w-[480px]">
                Explore how Humigent&apos;s Agentic AI solves real-world
                challenges across industries.
              </p>
            </div>
            <a
              href="#"
              className="bg-primary text-white text-[14px] font-medium px-6 py-3 rounded-[4px] hover:opacity-90 transition-opacity shrink-0"
            >
              Explore all insights
            </a>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-3 max-[809px]:grid-cols-1 border-t border-gray-border/40">
            {blogs.map((blog, i) => (
              <div
                key={i}
                className={`${
                  i < 2
                    ? "border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b"
                    : ""
                }`}
              >
                {/* Image Top */}
                <div className="bg-card/50 p-6 border-b border-gray-border/40 min-h-[180px] flex flex-col justify-end">
                  <p className="text-[14px] font-serif text-dark/70 text-center leading-[1.4] mb-3">
                    {blog.title}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    {blog.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="text-[11px] font-mono uppercase tracking-[-0.1px] border border-gray-border/60 rounded-[3px] px-2 py-0.5 text-gray-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Content Bottom */}
                <div className="p-8 max-[809px]:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-[8px] h-[8px] bg-primary rounded-sm" />
                    <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                      {blog.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-[22px] font-normal leading-[1.2] tracking-[-0.22px] text-dark mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-gray-text mb-6">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={blog.avatar}
                      alt={blog.author}
                      width={32}
                      height={32}
                      className="rounded-full object-cover w-8 h-8"
                    />
                    <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">
                      {blog.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
