import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Schedule />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <FAQ />
      <Footer />
    </div>
  );
}
