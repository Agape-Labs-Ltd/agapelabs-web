'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'Next.js', logo: '⚡' },
  { name: 'React', logo: '⚛️' },
  { name: 'TypeScript', logo: '📘' },
  { name: 'Tailwind CSS', logo: '🎨' },
  { name: 'Node.js', logo: '🟢' },
  { name: 'PostgreSQL', logo: '🐘' },
  { name: 'MongoDB', logo: '🍃' },
  { name: 'AWS', logo: '☁️' },
];

export function InfiniteLogoScroll() {
  return (
    <section className="py-16 bg-black border-y border-white/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-400 mb-2">
            Powered by Modern Technology
          </h3>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Scrolling content */}
          <motion.div
            className="flex gap-12 md:gap-16"
            animate={{
              x: [0, -50 + '%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Duplicate the array to create seamless loop */}
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center gap-2 group cursor-default"
              >
                <div className="text-5xl md:text-6xl grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110">
                  {tech.logo}
                </div>
                <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
