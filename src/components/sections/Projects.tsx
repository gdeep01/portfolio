"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HUDButton } from "@/components/HUDButton";
import { ExternalLink } from "lucide-react";

import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <div id="projects" className="px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-2 h-10 bg-accent shadow-[0_0_15px_rgba(255,107,0,0.5)]" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-mono">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-[#0a0a0a] border border-white/10 overflow-hidden rounded-sm"
          >
            {/* Project Image */}
            <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
            </div>

            {/* Project Content */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="font-mono text-[9px] text-accent/80 uppercase tracking-widest border border-accent/30 px-2 py-0.5 bg-accent/5">
                  {project.stats}
                </span>
              </div>
              
              <p className="text-sm text-white/50 mb-8 font-mono leading-relaxed h-12 overflow-hidden">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 text-white/60 uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>

              <HUDButton href={project.link} variant="outline" className="w-full !text-xs py-3">
                <ExternalLink size={16} className="mr-3" />
                LIVE LINK
              </HUDButton>
            </div>

            {/* HUD Decoration Lines */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent/10 group-hover:border-accent/40 transition-all" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-accent/10 group-hover:border-accent/40 transition-all" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
