import { Header } from './components/layout/Header';
import { SubHeader } from './components/layout/SubHeader';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Stats } from './components/sections/Stats';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Testimonials } from './components/sections/Testimonials';
import { CTASection } from './components/sections/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-bg-main">
      <Header />
      <SubHeader />
      <main className="pt-16 lg:pt-20">
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
