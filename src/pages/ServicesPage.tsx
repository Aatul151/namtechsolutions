import { Services } from '../components/sections/Services';
import { TechnologySlider } from '../components/sections/TechnologySlider';
import { ServiceProcess } from '../components/sections/ServiceProcess';
import { Seo } from '../components/seo/Seo';
import { pageSeo } from '../seo/pageSeo';

export function ServicesPage() {
  return (
    <>
      <Seo {...pageSeo.services} />
      <Services />
      <TechnologySlider />
      <ServiceProcess />
    </>
  );
}
