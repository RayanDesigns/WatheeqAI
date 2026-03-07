"use client";

import { motion } from "framer-motion";

function ArchLayers() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Full-bleed background so the arch colors extend all the way */}
      <div className="absolute inset-0" style={{ background: "#ededff" }} />

      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ minHeight: "100%" }}
      >
        <rect width="1440" height="900" fill="#fafafd" />
        <path
          d="M-40 0H1480V420C1480 455 1460 485 1430 500L770 830C735 850 695 850 660 830L10 500C-20 485 -40 455 -40 420V0Z"
          fill="url(#arch1)" stroke="url(#archStroke1)" strokeOpacity="0.12" strokeWidth="0.8"
        />
        <path
          d="M100 0H1340V320C1340 355 1320 385 1290 400L770 660C735 680 695 680 660 660L150 400C120 385 100 355 100 320V0Z"
          fill="url(#arch2)" stroke="url(#archStroke2)" strokeOpacity="0.12" strokeWidth="0.8"
        />
        <path
          d="M260 0H1180V230C1180 265 1160 295 1130 310L770 500C735 515 695 515 660 500L300 310C270 295 260 265 260 230V0Z"
          fill="url(#arch3)" stroke="url(#archStroke3)" strokeOpacity="0.1" strokeWidth="0.8"
        />
        <path
          d="M410 0H1030V140C1030 175 1010 205 980 220L770 330C735 345 695 345 660 330L460 220C430 205 410 175 410 140V0Z"
          fill="url(#arch4)" stroke="url(#archStroke4)" strokeOpacity="0.08" strokeWidth="0.8"
        />
        <defs>
          <linearGradient id="arch1" x1="720" y1="650" x2="720" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ededff" /><stop offset="1" stopColor="#fafafd" />
          </linearGradient>
          <linearGradient id="archStroke1" x1="720" y1="0" x2="720" y2="850" gradientUnits="userSpaceOnUse">
            <stop offset="0.4" stopColor="#d5d5ff" /><stop offset="1" stopColor="#0004E8" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="arch2" x1="720" y1="520" x2="720" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e0e0ff" /><stop offset="1" stopColor="#f5f5ff" />
          </linearGradient>
          <linearGradient id="archStroke2" x1="720" y1="0" x2="720" y2="700" gradientUnits="userSpaceOnUse">
            <stop offset="0.3" stopColor="#d5d5ff" /><stop offset="1" stopColor="#0004E8" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="arch3" x1="720" y1="400" x2="720" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d5d5ff" /><stop offset="1" stopColor="#f0f0ff" />
          </linearGradient>
          <linearGradient id="archStroke3" x1="720" y1="0" x2="720" y2="530" gradientUnits="userSpaceOnUse">
            <stop offset="0.2" stopColor="#c5c5ff" /><stop offset="1" stopColor="#0004E8" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="arch4" x1="720" y1="270" x2="720" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ccccff" /><stop offset="1" stopColor="#ebebff" />
          </linearGradient>
          <linearGradient id="archStroke4" x1="720" y1="0" x2="720" y2="360" gradientUnits="userSpaceOnUse">
            <stop offset="0.15" stopColor="#b5b5ff" /><stop offset="1" stopColor="#0004E8" stopOpacity="0.06" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom fade to white so it blends with the next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col overflow-hidden">
      <ArchLayers />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center section-container text-center pt-28 pb-24 lg:pt-32 lg:pb-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-primary/8 text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            AI-Powered Claims Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="text-[2.5rem] sm:text-5xl lg:text-[3.75rem] font-extrabold text-text leading-[1.1] tracking-tight mb-5 max-w-2xl"
        >
          Process claims <span className="text-primary">10x faster</span> with AI
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-base lg:text-lg text-text/45 leading-relaxed mb-8 max-w-md"
        >
          AI matches policies to claims and drafts responses.
          Your examiners just review and approve.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href="/register"
            className="px-7 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl text-[15px] transition-all shadow-lg hover:shadow-xl"
          >
            Start free
          </a>
          <a
            href="#features"
            className="group px-7 py-3 bg-white/60 hover:bg-white/80 backdrop-blur-sm text-text/60 hover:text-text font-medium rounded-xl text-[15px] transition-all border border-white/50 flex items-center gap-2"
          >
            See how it works
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex items-center gap-3"
        >
          <div className="flex -space-x-2">
            {["N", "R", "K", "A"].map((initial, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
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
          <p className="text-[13px] text-text/35">
            Built for <span className="font-semibold text-text/55">Saudi insurers & TPAs</span>
          </p>
        </motion.div>
      </div>

      {/* Trusted by - in hero blank area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative z-10 w-full section-container pb-16 lg:pb-20"
      >
        <p className="text-center text-[11px] font-semibold text-text/20 uppercase tracking-[0.2em] mb-6">Trusted by leading organizations</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 lg:gap-x-14 gap-y-4">
          {["Partner Hospital Group", "National TPA", "Saudi Health Network", "Regional Insurance Co.", "MedTech Alliance"].map((logo, i) => (
            <div key={i} className="flex items-center gap-2 text-text/15 hover:text-text/30 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" style={{ opacity: 0.5 }}>
                {[
                  <><path key="p" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline key="pl" points="9 22 9 12 15 12 15 22" /></>,
                  <><rect key="r" x="2" y="7" width="20" height="14" rx="2" /><path key="p" d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" /></>,
                  <><path key="p" d="M22 12h-4l-3 9L9 3l-3 9H2" /></>,
                  <><path key="p" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>,
                  <><circle key="c1" cx="12" cy="12" r="10" /><line key="l1" x1="2" y1="12" x2="22" y2="12" /><path key="p" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
                ][i]}
              </svg>
              <span className="text-[13px] font-semibold tracking-wide whitespace-nowrap">{logo}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
