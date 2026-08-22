import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Seo } from '../components/seo/Seo';
import { pageSeo } from '../seo/pageSeo';

export function WhyChooseUsPage() {
  return (
    <>
      <Seo {...pageSeo.whyUs} />
      <WhyChooseUs />
    </>
  );
}
