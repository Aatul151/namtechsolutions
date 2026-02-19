import { Hero } from '../components/sections/Hero';
import { AboutCompany } from '../components/sections/AboutCompany';
import { Services } from '../components/sections/Services';
import { Stats } from '../components/sections/Stats';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Testimonials } from '../components/sections/Testimonials';
import { CTASection } from '../components/sections/CTASection';

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutCompany />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
