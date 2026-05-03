"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  hoverOnly?: boolean;
}

export const GlitchText = ({ text, className = "", hoverOnly = false }: GlitchTextProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

  useEffect(() => {
    if (!hoverOnly || isHovered) {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);

      return () => clearInterval(interval);
    } else {
      const timeoutId = setTimeout(() => setDisplayText(text), 0);
      return () => clearTimeout(timeoutId);
    }
  }, [isHovered, text, hoverOnly]);

  return (
    <motion.span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} ${isHovered ? "glitch" : ""}`}
    >
      {displayText}
    </motion.span>
  );
};
