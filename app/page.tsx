import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Products from '@/components/Products';
import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Products />
      <Reviews />
      <Cta />
      <Footer />
    </main>
  );
}
