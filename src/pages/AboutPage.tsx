import { AboutCompany } from '../components/sections/AboutCompany';
import { MissionVision } from '../components/sections/MissionVision';
import { CompanyMilestones } from '../components/sections/CompanyMilestones';

export function AboutPage() {
  return (
    <>
      <AboutCompany />
      <CompanyMilestones />
      <MissionVision />
    </>
  );
}
