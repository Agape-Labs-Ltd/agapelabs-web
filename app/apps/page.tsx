import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AppCard } from '@/components/ui/app-card';

export default function AppsPage() {
  return (
    <main className="pt-28 md:pt-32">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Apps</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of apps we’re building to serve the Church.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AppCard
              imgSrc="/images/rhema_logo.png"
              title="Rhema"
              description="Memorise Scripture with Rhema's fun, Duolingo-style games. Short, adaptive microsessions build lasting memory, turning practice into a deep meditation on God's Word."
              link="https://rhema-app.com"
              linkText="Visit site"
              downloadLink="https://apps.apple.com/gb/app/rhema-memorise-and-meditate/id6750488143"
              instagramLink="https://www.instagram.com/rhema_app_/"
            />

            <AppCard
              imgSrc="/images/digible_logo.png"
              title="Digible"
              description="Your Bible, reimagined for iPad and Apple Pencil. Digible lets you freely write, draw, and annotate Scripture, making your personal study more engaging and interactive than ever."
              link="https://digibleapp.com"
              linkText="Visit site"
              downloadLink="https://apps.apple.com/gb/app/digible-your-digital-bible/id6748240828"
              instagramLink="https://www.instagram.com/digible.app/"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


