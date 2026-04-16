export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5 py-16 max-[809px]:py-10">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] max-[809px]:grid-cols-1 gap-12 max-[809px]:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="2.5" fill="#FF5101" />
                <circle cx="12" cy="4" r="1.5" fill="#FF5101" />
                <circle cx="12" cy="20" r="1.5" fill="#FF5101" />
                <circle cx="4" cy="12" r="1.5" fill="#FF5101" />
                <circle cx="20" cy="12" r="1.5" fill="#FF5101" />
                <circle cx="6.34" cy="6.34" r="1.5" fill="#FF5101" />
                <circle cx="17.66" cy="17.66" r="1.5" fill="#FF5101" />
                <circle cx="6.34" cy="17.66" r="1.5" fill="#FF5101" />
                <circle cx="17.66" cy="6.34" r="1.5" fill="#FF5101" />
              </svg>
              <span className="font-serif text-[18px] text-white">Humigent</span>
            </div>
            <p className="text-[14px] leading-[1.6] text-gray-light mb-6">
              AI-powered automation for modern teams.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" />
                  <circle cx="18" cy="6" r="1" fill="white" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4l11.733 16h4.267l-11.733-16zm2.533 1.467l10.8 13.066h-1.867l-10.8-13.066z" stroke="white" strokeWidth="1.2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[14px] font-medium text-white mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[14px] text-gray-light hover:text-white transition-colors">
                  Automated emails
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-gray-light hover:text-white transition-colors">
                  Scheduling
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-gray-light hover:text-white transition-colors">
                  Task automation
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-gray-light hover:text-white transition-colors">
                  Smart summaries
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[14px] font-medium text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
<li>
                <a href="#" className="text-[14px] text-gray-light hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-gray-light hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-gray-light hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Other */}
          <div>
            <h4 className="text-[14px] font-medium text-white mb-5">Other</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[14px] text-gray-light hover:text-white transition-colors">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-gray-light hover:text-white transition-colors">
                  404
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-[60px] max-[809px]:px-5 py-5 flex items-center justify-between max-[809px]:flex-col max-[809px]:gap-3 max-[809px]:text-center">
          <p className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light">
            &copy; 2026 Humigent. All rights reserved.
          </p>
          <p className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light">
            Made in Framer
          </p>
          <p className="text-[12px] font-mono tracking-[-0.12px] uppercase text-gray-light flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-gray-light/30 inline-block" />
            Template by Shubh
          </p>
        </div>
      </div>
    </footer>
  );
}
