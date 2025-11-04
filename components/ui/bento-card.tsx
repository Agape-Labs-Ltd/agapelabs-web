'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { TiltCard } from './tilt-card';

interface BentoCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  gradient?: string;
}

export function BentoCard({
  title,
  description,
  icon,
  className = '',
  children,
  gradient = 'from-blue-600 to-cyan-600'
}: BentoCardProps) {
  return (
    <TiltCard
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-8',
        'border border-white/10',
        'hover:border-white/20 transition-all duration-300',
        className
      )}
    >
      {/* Gradient border effect */}
      <div
        className={cn(
          'absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition-all duration-500',
          gradient
        )}
      />

      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="mb-4 inline-block"
          >
            {icon}
          </motion.div>
        )}

        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>

        {description && (
          <p className="text-gray-400 text-sm md:text-base mb-4">{description}</p>
        )}

        {children && <div className="mt-4">{children}</div>}
      </div>

      {/* Gradient overlay on hover */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500',
          gradient
        )}
      />
    </TiltCard>
  );
}
