'use client';

import { BentoCard } from '@/components/ui/bento-card';
import {
  IconHeart,
  IconBrandReact,
  IconClock,
  IconWorld,
  IconCode,
  IconSparkles
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export function BentoGrid() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Agape Labs</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with faith-driven values to deliver exceptional results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-6 gap-4"
        >
          {/* Large feature card */}
          <motion.div variants={itemVariants} className="md:col-span-4 md:row-span-2">
            <BentoCard
              className="h-full"
              title="Faith-Driven Development"
              description="We build technology solutions inspired by Christian values, integrity, and a commitment to making a positive impact in the world."
              icon={<IconHeart className="w-10 h-10 text-blue-500" />}
              gradient="from-blue-600 to-cyan-600"
            >
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg backdrop-blur">
                  <div className="text-2xl font-bold text-blue-400">100%</div>
                  <div className="text-sm text-gray-400">Faith-Driven</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg backdrop-blur">
                  <div className="text-2xl font-bold text-purple-400">∞</div>
                  <div className="text-sm text-gray-400">Dedication</div>
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* Small cards */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <BentoCard
              className="h-full"
              title="Global Reach"
              description="Serving clients worldwide"
              icon={<IconWorld className="w-8 h-8 text-purple-500" />}
              gradient="from-purple-600 to-pink-600"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <BentoCard
              className="h-full"
              title="24/7 Support"
              description="Always here to help"
              icon={<IconClock className="w-8 h-8 text-cyan-500" />}
              gradient="from-cyan-600 to-blue-600"
            />
          </motion.div>

          {/* Medium card */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <BentoCard
              className="h-full"
              title="Modern Tech Stack"
              description="Using the latest and greatest technologies"
              icon={<IconCode className="w-9 h-9 text-green-500" />}
              gradient="from-green-600 to-emerald-600"
            >
              <div className="flex flex-wrap gap-2 mt-4">
                {['Next.js', 'React', 'TypeScript', 'Tailwind'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 backdrop-blur"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </BentoCard>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-3">
            <BentoCard
              className="h-full"
              title="Innovation First"
              description="Pushing boundaries with creative solutions"
              icon={<IconSparkles className="w-9 h-9 text-yellow-500" />}
              gradient="from-yellow-600 to-orange-600"
            >
              <div className="mt-4 text-sm text-gray-400">
                We don&apos;t just follow trends—we set them. Our innovative approach ensures your project stands out.
              </div>
            </BentoCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
