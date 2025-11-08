'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronLeft, IconChevronRight, IconStar } from '@tabler/icons-react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO, Tech Startup',
    content: 'Agape Labs delivered an exceptional product that exceeded our expectations. Their faith-driven approach and technical expertise made all the difference.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Sarah Johnson',
    role: 'Director, Non-Profit Org',
    content: 'Working with Agape Labs was a blessing. They understood our mission and created a platform that truly serves our community.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, E-commerce',
    content: 'The team at Agape Labs is incredibly talented and dedicated. They brought our vision to life with cutting-edge technology and outstanding support.',
    rating: 5,
    avatar: '👨‍💻'
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
            What Our{' '}
            <span className="text-gradient-prismatic">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from those we&apos;ve served
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 md:p-12 rounded-2xl border border-black/10 relative shadow-xl"
              >
                {/* Quote mark decoration */}
                <div className="absolute top-8 left-8 text-6xl text-purple-500/20 font-serif">
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <IconStar key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-gray-700 mb-8 text-center relative z-10">
                  {testimonials[currentIndex].content}
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="text-4xl">{testimonials[currentIndex].avatar}</div>
                  <div>
                    <div className="font-semibold text-black">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="Previous testimonial"
              >
                <IconChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-purple-500'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                aria-label="Next testimonial"
              >
                <IconChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
