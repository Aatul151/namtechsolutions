import { Hero } from '../components/sections/Hero';
import { HomeAbout } from '../components/sections/HomeAbout';
import { HomeServices } from '../components/sections/HomeServices';
import { Stats } from '../components/sections/Stats';
import { HomeWhyUs } from '../components/sections/HomeWhyUs';
import { Testimonials } from '../components/sections/Testimonials';
import { CTASection } from '../components/sections/CTASection';
import { TechnologySlider } from '../components/sections/TechnologySlider';
import { Seo } from '../components/seo/Seo';
import { pageSeo } from '../seo/pageSeo';

export function HomePage() {
  return (
    <>
      <Seo {...pageSeo.home} />
      <Hero />
      <TechnologySlider />
      <HomeAbout />
      <HomeServices />
      <Stats />
      <HomeWhyUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
