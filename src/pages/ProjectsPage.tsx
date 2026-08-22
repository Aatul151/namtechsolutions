import { Projects } from '../components/sections/Projects';
import { Seo } from '../components/seo/Seo';
import { pageSeo } from '../seo/pageSeo';

export function ProjectsPage() {
  return (
    <>
      <Seo {...pageSeo.projects} />
      <Projects />
    </>
  );
}
