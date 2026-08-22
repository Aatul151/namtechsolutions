import { CTASection } from '../components/sections/CTASection';
import { Testimonials } from '../components/sections/Testimonials';
import { Seo } from '../components/seo/Seo';
import { pageSeo } from '../seo/pageSeo';

export function TestimonialsPage() {
  return (
    <>
      <Seo {...pageSeo.testimonials} />
      <Testimonials />
      <CTASection />
    </>
  );
}
