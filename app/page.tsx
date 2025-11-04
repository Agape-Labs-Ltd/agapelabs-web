import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AnimatedHero } from '@/components/home/AnimatedHero';
import { EnhancedFeatures } from '@/components/home/EnhancedFeatures';
import { BentoGrid } from '@/components/home/BentoGrid';
import { InfiniteLogoScroll } from '@/components/home/InfiniteLogoScroll';
import { TestimonialsCarousel } from '@/components/home/TestimonialsCarousel';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <AnimatedHero />
      <InfiniteLogoScroll />
      <EnhancedFeatures />
      <BentoGrid />
      <TestimonialsCarousel />
      <CTASection />
      <Footer />
    </main>
  );
}
