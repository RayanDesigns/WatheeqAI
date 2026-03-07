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

      </div>
    </section>
  );
}
