'use client';

import { useMousePosition } from '@/hooks/useMousePosition';

export function Spotlight() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
      }}
    />
  );
}
