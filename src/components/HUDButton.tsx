"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HUDButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export const HUDButton = ({ href, children, variant = "primary", className = "", onClick }: HUDButtonProps) => {
  const isExternal = href.startsWith("http") || href.startsWith("mailto");

  const baseStyles = "relative inline-flex items-center justify-center px-6 py-2 font-mono text-sm uppercase tracking-widest transition-all duration-300 group overflow-hidden";
  
  const variants = {
    primary: "bg-accent text-black border border-accent hover:bg-black hover:text-accent shadow-[0_0_15px_rgba(255,107,0,0.4)]",
    outline: "bg-transparent text-accent border border-accent/50 hover:border-accent hover:shadow-[0_0_15px_rgba(255,107,0,0.2)]",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <div className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-[-20deg] transition-all duration-500 group-hover:left-[100%]" />
      
      {/* Corner Details */}
      <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-current opacity-50" />
      <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-current opacity-50" />
      <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-current opacity-50" />
      <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-current opacity-50" />
    </>
  );

  if (isExternal) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <Link href={href} passHref>
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </motion.button>
    </Link>
  );
};
