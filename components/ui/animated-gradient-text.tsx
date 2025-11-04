'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function AnimatedGradientText({
  children,
  className = '',
  as: Component = 'span'
}: AnimatedGradientTextProps) {
  const MotionComponent = motion[Component] as any;

  return (
    <MotionComponent
      className={cn(
        'relative inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent',
        'bg-[length:200%_auto]',
        className
      )}
      animate={{
        backgroundPosition: ['0% center', '200% center'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </MotionComponent>
  );
}
