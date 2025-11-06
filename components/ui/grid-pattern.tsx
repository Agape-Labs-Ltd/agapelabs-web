'use client';

import { motion } from 'framer-motion';

export function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full stroke-black/5"
        fill="none"
      >
        <defs>
          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
            x="0"
            y="0"
          >
            <path d="M0 32V0h32" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-pink-500/10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Radial gradient from center - lighter for white background */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/30 to-white" />
    </div>
  );
}
