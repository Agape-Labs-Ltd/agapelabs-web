'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { Spotlight } from '@/components/ui/spotlight';
import { IconArrowRight, IconSparkles } from '@tabler/icons-react';

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Spotlight effect */}
      <Spotlight />

      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />

      {/* Animated border */}
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-black/10 backdrop-blur"
          >
            <IconSparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-700">Let&apos;s Build Something Amazing</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 text-black"
          >
            Ready to Transform{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Vision
            </span>
            {' '}Into Reality?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Let&apos;s collaborate to create technology solutions that make a lasting impact.
            Get in touch today and discover how we can help bring your ideas to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <MagneticButton className="group relative">
                {/* Animated gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg opacity-75 group-hover:opacity-100 blur group-hover:blur-xl transition-all duration-500 animate-gradient-x" />

                {/* Button content */}
                <span className="relative bg-black text-white border border-black/20 px-8 py-4 rounded-lg flex items-center gap-2 font-medium">
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <IconArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
              </MagneticButton>
            </Link>

            <Link href="/about">
              <MagneticButton>
                <span className="border border-black/20 bg-black/5 backdrop-blur px-8 py-4 rounded-lg hover:bg-black/10 hover:border-black/40 transition-all font-medium text-black">
                  Learn More About Us
                </span>
              </MagneticButton>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Available for new projects</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>Quick response time</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💙</span>
              <span>Faith-driven values</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
