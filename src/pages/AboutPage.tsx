import { AboutCompany } from '../components/sections/AboutCompany';
import { MissionVision } from '../components/sections/MissionVision';
import { CompanyMilestones } from '../components/sections/CompanyMilestones';
import Certificates from '../components/sections/Certificates';
import { Seo } from '../components/seo/Seo';
import { pageSeo } from '../seo/pageSeo';

export function AboutPage() {
  return (
    <>
      <Seo {...pageSeo.about} />
      <AboutCompany />
      <CompanyMilestones />
      <Certificates />
      <MissionVision />
    </>
  );
}
