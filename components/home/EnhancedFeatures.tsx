'use client';

import { motion } from 'framer-motion';
import { IconShield, IconSettings, IconWorld, IconUsers } from '@tabler/icons-react';
import { TiltCard } from '@/components/ui/tilt-card';

const features = [
  {
    icon: IconShield,
    title: 'Faith-Driven Technology',
    description: 'Our solutions are built on a foundation of Christian values, integrity, and ethical practices.',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    icon: IconSettings,
    title: 'Innovative Solutions',
    description: 'We leverage cutting-edge technology to create innovative solutions for modern challenges.',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    icon: IconWorld,
    title: 'Global Impact',
    description: 'Making a positive difference in communities worldwide through technology and service.',
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    icon: IconUsers,
    title: 'Service-Oriented',
    description: 'Committed to serving clients with excellence, compassion, and understanding.',
    gradient: 'from-orange-600 to-red-600'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export function EnhancedFeatures() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
            Our Mission &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Agape Labs, we&apos;re committed to developing technology solutions that embody Christian love and service.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <TiltCard className="h-full">
                  <div className="relative h-full bg-white p-8 rounded-xl border border-black/10 hover:border-black/20 transition-all duration-300 group shadow-lg hover:shadow-xl">
                    {/* Gradient glow effect */}
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 blur transition-all duration-500 rounded-xl -z-10`}
                    />

                    {/* Icon with animation */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                      className="mb-5"
                    >
                      <div
                        className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient}`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-3 text-black">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative element */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl`}
                    />
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
