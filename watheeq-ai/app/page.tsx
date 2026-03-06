"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSolution from "./components/Problems";
import CoreFlows from "./components/CoreFlows";
import Compliance from "./components/Compliance";
import ProductScreens from "./components/ProductScreens";
import Testimonials from "./components/Testimonials";
import Qualifier from "./components/Qualifier";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import DemoModal from "./components/DemoModal";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <Navbar onDemoClick={() => setDemoOpen(true)} />

      <main>
        <Hero onDemoClick={() => setDemoOpen(true)} />
        <ProblemSolution />
        <CoreFlows />
        <Compliance />
        <ProductScreens />
        <Testimonials />
        <Qualifier />
        <FinalCTA />
      </main>

      <Footer />

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />

      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-white/90 backdrop-blur-md border-t border-bg-border">
        <button
          onClick={() => setDemoOpen(true)}
          className="w-full py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-all shadow-sm"
        >
          Request Demo
        </button>
      </div>
    </>
  );
}
