"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Why Watheeq?", href: "#features" },
  { label: "Suite Me?", href: "#flows" },
  { label: "Compliance", href: "#compliance" },
];

export default function Navbar({ onDemoClick }: { onDemoClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer for fixed nav — only at top */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "top-4 left-0 right-0 mx-auto w-[92%] max-w-3xl"
            : "top-0 left-0 right-0 w-full"
        }`}
      >
        <div
          className={`transition-all duration-500 ease-out ${
            scrolled
              ? "bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 px-5 py-2.5"
              : "bg-transparent px-0 py-0"
          }`}
          style={
            scrolled
              ? {
                  boxShadow:
                    "0 4px 24px rgba(0, 4, 232, 0.06), 0 1px 3px rgba(5, 5, 8, 0.05)",
                }
              : undefined
          }
        >
          <div className={`${scrolled ? "" : "section-container"} h-14 lg:h-16 flex items-center justify-between`}>
            <a href="#" className="flex items-center flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Watheeq AI"
                width={scrolled ? 110 : 130}
                height={scrolled ? 22 : 26}
                priority
                className="transition-all duration-300"
              />
            </a>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    scrolled
                      ? "text-text/55 hover:text-text"
                      : "text-text/50 hover:text-text"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={onDemoClick}
                className="px-5 py-2 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Request Demo
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text/50 hover:text-text transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden overflow-hidden mt-1 ${
                scrolled
                  ? "bg-white/80 backdrop-blur-xl rounded-2xl border border-white/50"
                  : "bg-white/90 backdrop-blur-xl rounded-b-2xl border-b border-x border-white/50"
              }`}
              style={{ boxShadow: "0 4px 24px rgba(0, 4, 232, 0.06)" }}
            >
              <div className="px-5 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-text/55 hover:text-text py-2.5 px-3 rounded-lg hover:bg-primary/5 font-medium text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onDemoClick();
                  }}
                  className="mt-2 px-5 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-xl transition-all w-full"
                >
                  Request Demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
