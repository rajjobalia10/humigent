"use client";

import CTASection from "@/components/CTASection";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-16 pb-8 max-[809px]:pt-10">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5 text-center">
          <h1 className="font-serif text-[56px] font-normal leading-[1.1] tracking-[-1.12px] text-dark max-[1199px]:text-[44px] max-[809px]:text-[36px]">
            Get in touch
          </h1>
          <p className="mt-6 text-[14px] leading-[1.6] text-gray-text max-w-[480px] mx-auto">
            Have questions about our AI-driven solutions or upcoming projects?
            We&apos;re always eager to discuss ideas, collaborations and new
            possibilities.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-6 bg-cream">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
          <div className="border border-gray-border/40 rounded-lg overflow-hidden">
            <div className="grid grid-cols-[1.2fr_1fr] max-[809px]:grid-cols-1">
              {/* Form */}
              <div className="p-10 max-[809px]:p-6 border-r border-gray-border/40 max-[809px]:border-r-0 max-[809px]:border-b">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
                  <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">Contact Form</span>
                </div>
                <h2 className="font-serif text-[28px] font-normal leading-[1.1] tracking-[-0.28px] text-dark mb-6 max-[809px]:text-[22px]">
                  Have a question? Let us know how we can help.
                </h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4 max-[809px]:grid-cols-1">
                    <div>
                      <label className="block text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text mb-2">First Name</label>
                      <input type="text" className="w-full border border-gray-border/60 rounded-[4px] px-4 py-3 text-[14px] text-dark bg-white focus:outline-none focus:border-primary" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text mb-2">Last Name</label>
                      <input type="text" className="w-full border border-gray-border/60 rounded-[4px] px-4 py-3 text-[14px] text-dark bg-white focus:outline-none focus:border-primary" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text mb-2">Email</label>
                    <input type="email" className="w-full border border-gray-border/60 rounded-[4px] px-4 py-3 text-[14px] text-dark bg-white focus:outline-none focus:border-primary" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text mb-2">Company</label>
                    <input type="text" className="w-full border border-gray-border/60 rounded-[4px] px-4 py-3 text-[14px] text-dark bg-white focus:outline-none focus:border-primary" placeholder="Company name" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text mb-2">Message</label>
                    <textarea rows={4} className="w-full border border-gray-border/60 rounded-[4px] px-4 py-3 text-[14px] text-dark bg-white focus:outline-none focus:border-primary resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="bg-primary text-white text-[14px] font-medium px-6 py-3 rounded-[4px] hover:opacity-90 transition-opacity w-full">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="p-10 max-[809px]:p-6">
                <div className="space-y-8">
                  <div>
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="1.5"/><path d="M22 6l-10 7L2 6" stroke="white" strokeWidth="1.5"/></svg>
                    </div>
                    <h3 className="font-serif text-[18px] text-dark mb-1">Email</h3>
                    <p className="text-[14px] text-gray-text">info@humigent.ai</p>
                  </div>
                  <div>
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="white" strokeWidth="1.5"/><circle cx="12" cy="10" r="3" stroke="white" strokeWidth="1.5"/></svg>
                    </div>
                    <h3 className="font-serif text-[18px] text-dark mb-1">US Office</h3>
                    <p className="text-[14px] text-gray-text">33 S Wood Ave Suite 660, Iselin, NJ 08830</p>
                  </div>
                  <div>
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="white" strokeWidth="1.5"/><circle cx="12" cy="10" r="3" stroke="white" strokeWidth="1.5"/></svg>
                    </div>
                    <h3 className="font-serif text-[18px] text-dark mb-1">India Office</h3>
                    <p className="text-[14px] text-gray-text">948, 9th floor, Tower B1, Spaze I-Tech Park, Sector 49, Sohna Road, Gurgaon, Haryana, 122018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
