'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { GridPattern } from '@/components/ui/grid-pattern';
import { Spotlight } from '@/components/ui/spotlight';
import { StatCard } from '@/components/ui/animated-counter';
import { IconRocket, IconBolt, IconHeart, IconWorld } from '@tabler/icons-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function AnimatedHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Animated background elements */}
      {!prefersReducedMotion && (
        <>
          <GridPattern />
          <Spotlight />
        </>
      )}

      {/* Main content */}
      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-black/5 border border-black/10 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm text-gray-700">Building the Future with Faith</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-black"
          >
            Spreading{' '}
            <span className="text-gradient-prismatic">
              God&apos;s Love
            </span>{' '}
            <br className="hidden md:block" />
            Through Technology
          </motion.h1>

          {/* Animated subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <TypeAnimation
              sequence={[
                'We create innovative solutions inspired by faith',
                3000,
                'We build technology that makes a difference',
                3000,
                'We serve with excellence and compassion',
                3000,
              ]}
              wrapper="p"
              speed={50}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
              repeat={Infinity}
            />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <Link href="/projects">
              <MagneticButton className="group relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-cyan-500 to-yellow-500 blur-xl group-hover:blur-2xl transition-all opacity-50 group-hover:opacity-75" />
                <span className="relative bg-black text-white border border-black/20 px-8 py-4 rounded-lg flex items-center gap-2 font-medium hover:border-black/40 transition-colors">
                  Explore Our Work
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
              </MagneticButton>
            </Link>

            <Link href="/contact">
              <MagneticButton className="group">
                <span className="relative border border-black/20 bg-black/5 backdrop-blur px-8 py-4 rounded-lg hover:bg-black/10 hover:border-black/40 transition-all font-medium flex items-center gap-2 overflow-hidden text-black">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-black/20 to-transparent transition-transform duration-1000" />
                  Get in Touch
                </span>
              </MagneticButton>
            </Link>
          </motion.div>

          {/* Social proof stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <StatCard
              number={10}
              suffix="+"
              label="Years Experience"
              icon={<IconRocket className="w-6 h-6 text-blue-500" />}
              delay={0}
            />
            <StatCard
              number={50}
              suffix="+"
              label="Projects Delivered"
              icon={<IconBolt className="w-6 h-6 text-purple-500" />}
              delay={0.1}
            />
            <StatCard
              number={100}
              suffix="%"
              label="Faith-Driven"
              icon={<IconHeart className="w-6 h-6 text-pink-500" />}
              delay={0.2}
            />
            <StatCard
              number={24}
              suffix="/7"
              label="Support Available"
              icon={<IconWorld className="w-6 h-6 text-cyan-500" />}
              delay={0.3}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient orbs */}
      {!prefersReducedMotion && (
        <>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-500" />
        </>
      )}
    </section>
  );
}
