"use client";

import { motion } from "framer-motion";
import { GlitchText } from "@/components/GlitchText";
import { HUDButton } from "@/components/HUDButton";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background HUD Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] border border-accent/10 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="mb-4 inline-block px-3 py-1 border border-accent/30 bg-accent/5 rounded-sm">
          <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase animate-pulse">
            System Initialize // Port-2026
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tighter">
          <GlitchText text="GAGAN DEEP" className="block text-white" />
        </h1>


        <p className="text-xl md:text-3xl font-mono text-white mb-12 max-w-3xl mx-auto tracking-tight font-medium leading-tight">
          I find the problem. <br className="md:hidden" /> Then I build the fix.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <HUDButton href="#projects">
            VIEW PROJECTS
          </HUDButton>
          <HUDButton href="mailto:gdeepg19@gmail.com" variant="outline">
            CONTACT ME
          </HUDButton>
        </div>
      </motion.div>

      {/* Decorative Lines */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="w-40 h-[1px] bg-accent/30 mb-2" />
        <div className="w-20 h-[1px] bg-accent/30" />
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block text-right">
        <p className="font-mono text-[8px] text-accent/50 tracking-widest uppercase">
          Latency: 12ms | Uptime: 99.9%
        </p>
      </div>
    </section>
  );
};
