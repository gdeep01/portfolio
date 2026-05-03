"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const GithubIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const socialLinks = [
  {
    name: "GITHUB",
    icon: <GithubIcon size={20} />,
    href: "https://github.com/gdeep01",
    handle: "gdeep01",
  },
  {
    name: "LINKEDIN",
    icon: <LinkedinIcon size={20} />,
    href: "https://linkedin.com/in/gagan-deep-755130296/",
    handle: "gagan-deep-755130296",
  },
  {
    name: "EMAIL",
    icon: <Mail size={20} />,
    href: "mailto:gdeepg19@gmail.com",
    handle: "gdeepg19@gmail.com",
  },
];

export const Contact = () => {
  return (
    <div id="contact" className="px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-10 bg-accent shadow-[0_0_15px_rgba(255,107,0,0.5)]" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase font-mono">
              Establish Connection
            </h2>
          </div>
          <p className="font-mono text-xl text-white/50 max-w-md leading-relaxed">
            Open to Development and Engineering roles.
          </p>
        </div>

        <div className="space-y-6">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex items-center justify-between p-8 border border-white/10 hover:border-accent/40 bg-white/[0.01] hover:bg-accent/[0.03] transition-all rounded-sm"
            >
              <div className="flex items-center gap-6">
                <div className="text-white/50 group-hover:text-accent transition-colors">
                  {link.icon}
                </div>
                <div>
                  <p className="font-mono text-[10px] text-accent/50 uppercase tracking-[0.3em] font-bold">
                    {link.name}
                  </p>
                  <p className="font-mono text-lg text-white group-hover:translate-x-1 transition-transform">
                    {link.handle}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="text-white/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </motion.a>
          ))}
        </div>
      </div>

      <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
        <div className="space-y-2 text-center md:text-left">
          <p className="font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
            © 2026 Gagan Deep
          </p>
          <p className="font-mono text-[9px] tracking-widest text-white/60">
            ENGINEERED WITH NEXT.JS, TAILWIND & MOTION
          </p>
        </div>
        <div className="flex gap-12">
          <p className="font-mono text-[10px] tracking-widest uppercase">
            [MSRIT // EIE // BLR]
          </p>
          <p className="font-mono text-[10px] tracking-widest uppercase">
            LATENCY: 14MS
          </p>
        </div>
      </footer>
    </div>
  );
};
