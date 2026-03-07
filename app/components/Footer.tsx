"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-bg-border bg-bg">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image src="/logo.svg" alt="Watheeq AI" width={120} height={24} />
            </div>
            <p className="text-sm text-text/40 leading-relaxed max-w-xs">
              AI-powered healthcare claims adjudication built for the Saudi market.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text/30 mb-4">Platform</h4>
            <ul className="space-y-2">
              {["Evidence Extract", "Coverage Match", "Draft Reply", "Analytics"].map((item) => (
                <li key={item}><a href="#features" className="text-sm text-text/45 hover:text-text transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text/30 mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}><a href="#" className="text-sm text-text/45 hover:text-text transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text/30 mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-text/45">
              <li className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text/25">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                hello@watheeq.ai
              </li>
              <li className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text/25">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Riyadh, Saudi Arabia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bg-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text/25">&copy; {new Date().getFullYear()} Watheeq AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-text/25 hover:text-text/45 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-text/25 hover:text-text/45 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
