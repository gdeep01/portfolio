"use client";

import { motion } from "framer-motion";

import { skillCategories } from "@/data/skills";

export const Skills = () => {
  return (
    <div id="skills" className="px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-2 h-10 bg-accent shadow-[0_0_15px_rgba(255,107,0,0.5)]" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-mono">
          Technical Arsenal
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-6"
          >
            <h3 className="font-mono text-sm tracking-[0.4em] text-accent font-bold uppercase flex items-center gap-3">
              <span className="opacity-50">/</span> {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="border border-orange-500/40 text-orange-300 font-mono text-xs px-3 py-1 rounded-sm bg-orange-500/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
