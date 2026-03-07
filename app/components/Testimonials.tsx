"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Watheeq AI reduced our claims processing time by 60%, allowing our team to focus on complex cases that truly need human expertise.",
    author: "Dr. Ahmed Al-Rashid", role: "VP of Claims Operations", company: "Leading Saudi TPA", initials: "AA",
  },
  {
    quote: "The transparency in AI-assisted decisions has significantly improved our provider relationships and reduced appeal rates.",
    author: "Sarah Al-Dosari", role: "Chief Medical Officer", company: "Regional Health Insurer", initials: "SA",
  },
];

const logos = ["Partner Hospital Group", "National TPA", "Saudi Health Network", "Regional Insurance Co.", "MedTech Alliance"];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="section-eyebrow">What Leaders Say</p>

          <div className="relative mt-10 min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-primary/10 mx-auto mb-6">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg lg:text-xl text-text/60 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/8 flex items-center justify-center text-sm font-bold text-primary/60">
                    {testimonials[current].initials}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-text text-sm">{testimonials[current].author}</p>
                    <p className="text-xs text-text/40">{testimonials[current].role}, {testimonials[current].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-7" : "bg-text/10 w-2 hover:bg-text/20"}`} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="mt-16 pt-12 border-t border-bg-border">
          <p className="text-center text-[11px] font-semibold text-text/20 uppercase tracking-[0.2em] mb-8">Trusted by leading organizations</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 lg:gap-x-14 gap-y-4">
            {logos.map((logo, i) => (
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
      </div>
    </section>
  );
}
