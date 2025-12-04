import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Hero } from '@/components/ui/hero-with-group-of-images-text-and-two-buttons';
import { EnhancedFeatures } from '@/components/home/EnhancedFeatures';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <main className="bg-white pt-28 md:pt-32">
      <Header />
      <Hero />
      <EnhancedFeatures />
      <CTASection />
      <Footer />
    </main>
  );
}
