"use client";

import { motion } from "framer-motion";

function ArchLayers() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Layer 1 — widest */}
        <path
          d="M-40 0H1480V420C1480 455 1460 485 1430 500L770 830C735 850 695 850 660 830L10 500C-20 485 -40 455 -40 420V0Z"
          fill="url(#arch1)"
          stroke="url(#archStroke1)"
          strokeOpacity="0.15"
          strokeWidth="0.8"
        />
        {/* Layer 2 */}
        <path
          d="M100 0H1340V320C1340 355 1320 385 1290 400L770 660C735 680 695 680 660 660L150 400C120 385 100 355 100 320V0Z"
          fill="url(#arch2)"
          stroke="url(#archStroke2)"
          strokeOpacity="0.15"
          strokeWidth="0.8"
        />
        {/* Layer 3 */}
        <path
          d="M260 0H1180V230C1180 265 1160 295 1130 310L770 500C735 515 695 515 660 500L300 310C270 295 260 265 260 230V0Z"
          fill="url(#arch3)"
          stroke="url(#archStroke3)"
          strokeOpacity="0.12"
          strokeWidth="0.8"
        />
        {/* Layer 4 — narrowest */}
        <path
          d="M410 0H1030V140C1030 175 1010 205 980 220L770 330C735 345 695 345 660 330L460 220C430 205 410 175 410 140V0Z"
          fill="url(#arch4)"
          stroke="url(#archStroke4)"
          strokeOpacity="0.1"
          strokeWidth="0.8"
        />

        <defs>
          <linearGradient id="arch1" x1="720" y1="650" x2="720" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ededff" />
            <stop offset="1" stopColor="#fafafd" />
          </linearGradient>
          <linearGradient id="archStroke1" x1="720" y1="0" x2="720" y2="850" gradientUnits="userSpaceOnUse">
            <stop offset="0.4" stopColor="#d5d5ff" />
            <stop offset="1" stopColor="#0004E8" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="arch2" x1="720" y1="520" x2="720" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e0e0ff" />
            <stop offset="1" stopColor="#f5f5ff" />
          </linearGradient>
          <linearGradient id="archStroke2" x1="720" y1="0" x2="720" y2="700" gradientUnits="userSpaceOnUse">
            <stop offset="0.3" stopColor="#d5d5ff" />
            <stop offset="1" stopColor="#0004E8" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="arch3" x1="720" y1="400" x2="720" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d5d5ff" />
            <stop offset="1" stopColor="#f0f0ff" />
          </linearGradient>
          <linearGradient id="archStroke3" x1="720" y1="0" x2="720" y2="530" gradientUnits="userSpaceOnUse">
            <stop offset="0.2" stopColor="#c5c5ff" />
            <stop offset="1" stopColor="#0004E8" stopOpacity="0.08" />
          </linearGradient>

          <linearGradient id="arch4" x1="720" y1="270" x2="720" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ccccff" />
            <stop offset="1" stopColor="#ebebff" />
          </linearGradient>
          <linearGradient id="archStroke4" x1="720" y1="0" x2="720" y2="360" gradientUnits="userSpaceOnUse">
            <stop offset="0.15" stopColor="#b5b5ff" />
            <stop offset="1" stopColor="#0004E8" stopOpacity="0.06" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function GlowBlobs() {
  return (
    <>
      <div
        className="absolute -bottom-32 -left-40 w-[700px] h-[500px] rounded-full opacity-40 blur-[120px]"
        style={{ background: "linear-gradient(135deg, #0004E8 0%, transparent 100%)" }}
      />
      <div
        className="absolute -bottom-32 -right-40 w-[700px] h-[500px] rounded-full opacity-40 blur-[120px]"
        style={{ background: "linear-gradient(225deg, #0004E8 0%, transparent 100%)" }}
      />
    </>
  );
}

const logos = [
  "Partner Hospital",
  "Saudi TPA Network",
  "Al Habib Group",
  "National Insurer",
  "MedTech Alliance",
  "HealthTech KSA",
];

export default function Hero({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <section className="relative min-h-[100vh] flex flex-col overflow-hidden bg-bg">
      <ArchLayers />
      <GlowBlobs />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center section-container text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="badge-label bg-primary/8 text-primary inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            AI-Powered Claims Adjudication
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-text leading-[1.08] tracking-tight mb-6 max-w-3xl"
        >
          From Pile of Claims
          <br />
          to <span className="text-primary">Clear Decisions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-lg lg:text-xl text-text/50 leading-relaxed mb-10 max-w-xl"
        >
          AI that reads claims, matches policy clauses, and drafts responses —
          so your examiners decide faster with full transparency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onDemoClick}
            className="px-8 py-3.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
          <a
            href="#features"
            className="group px-8 py-3.5 bg-white/65 hover:bg-white/80 backdrop-blur-sm text-text/70 hover:text-text font-medium rounded-xl text-base transition-all duration-200 border border-white/60 flex items-center gap-2"
          >
            Learn more
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-0.5 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>

        {/* Avatars cluster */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center gap-3"
        >
          <div className="flex -space-x-2.5">
            {["A", "S", "K", "M"].map((initial, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                style={{
                  background: [
                    "linear-gradient(135deg, #0004E8, #4a4de9)",
                    "linear-gradient(135deg, #4a4de9, #8e8fe6)",
                    "linear-gradient(135deg, #8e8fe6, #0004E8)",
                    "linear-gradient(135deg, #0004E8, #8e8fe6)",
                  ][i],
                }}
              >
                {initial}
              </div>
            ))}
          </div>
          <p className="text-sm text-text/40">
            Trusted by <span className="font-semibold text-text/60">leading Saudi insurers</span>
          </p>
        </motion.div>
      </div>

      {/* Logo strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative z-10 pb-10"
      >
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {logos.map((logo, i) => (
              <span
                key={i}
                className="text-sm font-medium text-text/20 px-3 py-1"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
