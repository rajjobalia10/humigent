export default function PrivacyPolicyPage() {
  return (
    <section className="bg-cream py-16 max-[809px]:py-10">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5">
        <div className="border border-gray-border/40 rounded-lg overflow-hidden p-10 max-[809px]:p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-[10px] h-[10px] bg-primary rounded-sm" />
            <span className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-text">Legal</span>
          </div>
          <h1 className="font-serif text-[40px] font-normal leading-[1.1] tracking-[-0.4px] text-dark mb-2 max-[1199px]:text-[32px] max-[809px]:text-[28px]">
            Privacy Policy
          </h1>
          <p className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light mb-10">
            Effective Date: January 1, 2026
          </p>

          <div className="space-y-8 max-w-[800px]">
            <div>
              <h2 className="font-serif text-[22px] max-[809px]:text-[18px] text-dark mb-3">1. Information We Collect</h2>
              <p className="text-[14px] leading-[1.6] text-gray-text">We collect personal information you provide directly, such as your name, email address, company name, and phone number when you fill out forms, request demos, or contact us. We also collect usage data, technical information (IP address, browser type, device information), and cookies to improve our services.</p>
            </div>
            <div>
              <h2 className="font-serif text-[22px] max-[809px]:text-[18px] text-dark mb-3">2. How We Use Your Information</h2>
              <p className="text-[14px] leading-[1.6] text-gray-text">We use your information to provide and improve our services, respond to inquiries and support requests, send communications about updates and offerings, analyze usage patterns, and maintain security. We process data based on legitimate business interests and your consent.</p>
            </div>
            <div>
              <h2 className="font-serif text-[22px] max-[809px]:text-[18px] text-dark mb-3">3. Data Retention</h2>
              <p className="text-[14px] leading-[1.6] text-gray-text">We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
            </div>
            <div>
              <h2 className="font-serif text-[22px] max-[809px]:text-[18px] text-dark mb-3">4. Your Rights</h2>
              <p className="text-[14px] leading-[1.6] text-gray-text">You have the right to access, update, or delete your personal data; opt out of marketing communications; restrict processing; and request data portability. To exercise these rights, contact us at info@humigent.ai.</p>
            </div>
            <div>
              <h2 className="font-serif text-[22px] max-[809px]:text-[18px] text-dark mb-3">5. Cookies and Tracking</h2>
              <p className="text-[14px] leading-[1.6] text-gray-text">We use cookies and similar tracking technologies for personalization and analytics. You can opt out of non-essential cookies through your browser settings. Essential cookies required for site functionality cannot be disabled.</p>
            </div>
            <div>
              <h2 className="font-serif text-[22px] max-[809px]:text-[18px] text-dark mb-3">6. Security</h2>
              <p className="text-[14px] leading-[1.6] text-gray-text">We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.</p>
            </div>
            <div>
              <h2 className="font-serif text-[22px] max-[809px]:text-[18px] text-dark mb-3">7. Third-Party Links</h2>
              <p className="text-[14px] leading-[1.6] text-gray-text">Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies.</p>
            </div>
            <div>
              <h2 className="font-serif text-[22px] max-[809px]:text-[18px] text-dark mb-3">8. Policy Updates</h2>
              <p className="text-[14px] leading-[1.6] text-gray-text">We may update this Privacy Policy from time to time. Changes will be reflected with a revised effective date. We encourage you to review this policy periodically.</p>
            </div>
            <div className="border-t border-gray-border/40 pt-6">
              <p className="text-[14px] leading-[1.6] text-gray-text">
                For questions about this Privacy Policy, contact us at{" "}
                <a href="mailto:info@humigent.ai" className="text-primary hover:underline">info@humigent.ai</a>
                {" "}or write to: Humigent, 33 S Wood Ave Suite 660, Iselin, NJ 08830.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
