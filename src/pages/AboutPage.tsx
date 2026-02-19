import { AboutCompany } from '../components/sections/AboutCompany';
import { MissionVision } from '../components/sections/MissionVision';
import { OurValues } from '../components/sections/OurValues';
import { CompanyMilestones } from '../components/sections/CompanyMilestones';
import { TechnologyStack } from '../components/sections/TechnologyStack';
import { CompanyLocation } from '../components/sections/CompanyLocation';

export function AboutPage() {
  return (
    <>
      <AboutCompany />
      <MissionVision />
      <OurValues />
      <CompanyMilestones />
      <TechnologyStack />
      <CompanyLocation />
    </>
  );
}
