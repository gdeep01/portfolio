"use client";

import { useState, useEffect } from "react";

const lines = [
  "> Location: Bengaluru, IN",
  "> Degree: B.E @ MSRIT, 2026",
  "> Products shipped: 5",
  "> Active users: 408+",
  "> Currently: Open to Development and Engineering roles",
];

const TerminalFacts = () => {

  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => (prev < lines.length ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full font-mono text-[11px] md:text-sm bg-black border border-accent/20 p-6 shadow-[0_0_20px_rgba(255,107,0,0.05)] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-accent/10" />
      <div className="space-y-2">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={line.startsWith(">") ? "text-accent/60" : "text-white/90"}>
            {line}
          </div>
        ))}
        {visibleLines < lines.length && (
          <span className="inline-block w-2 h-4 bg-accent animate-pulse align-middle ml-1" />
        )}
      </div>

      {/* HUD accents */}
      <div className="absolute bottom-2 right-2 text-[8px] text-accent/20">
        SECURE_CONNECTION // DATA_STREAM
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <div id="about" className="px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-10 bg-accent shadow-[0_0_15px_rgba(255,107,0,0.5)]" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-mono">
              Status Report
            </h2>
          </div>

          <div className="space-y-8 font-mono text-white/70 leading-relaxed text-lg">
            <p>
              Final-year EIE student at MSRIT. I build and ship full-stack web applications — real products, with real users. I pick up new tools fast and care about getting the details right.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
            <div className="space-y-4">
              <p className="text-xs text-accent tracking-[0.4em] uppercase font-bold">{"// EDUCATION"}</p>
              <div>
                <p className="text-lg text-white font-bold">MSRIT, Bengaluru</p>
                <p className="text-sm text-white/50 uppercase tracking-widest mt-1">EIE | 2020 - 2026</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs text-accent tracking-[0.4em] uppercase font-bold">{"// INTERESTS"}</p>
              <div>
                <p className="text-lg text-white font-bold">Formula 1 & Photography</p>
                <p className="text-sm text-white/50 uppercase tracking-widest mt-1">Speed, Aero & Optics</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-8 lg:mt-0">
          <TerminalFacts />
        </div>
      </div>
    </div>
  );
};
