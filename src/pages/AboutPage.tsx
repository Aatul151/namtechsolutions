import { AboutCompany } from '../components/sections/AboutCompany';
import { MissionVision } from '../components/sections/MissionVision';
import { CompanyMilestones } from '../components/sections/CompanyMilestones';
import Certificates from '../components/sections/Certificates';

export function AboutPage() {
  return (
    <>
      <AboutCompany />
      <CompanyMilestones />
      <Certificates />
      <MissionVision />
    </>
  );
}
