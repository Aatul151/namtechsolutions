import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Loader } from './components/ui/Loader';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Stats } from './components/sections/Stats';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Testimonials } from './components/sections/Testimonials';
import { CTASection } from './components/sections/CTASection';
import logoImage from './assets/logo/logo.png';

function App() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Loader logoImage={logoImage} />
      <Header />
      <main className="pt-0 md:pt-2">
        <Hero />
        <Services />
        <Stats />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
