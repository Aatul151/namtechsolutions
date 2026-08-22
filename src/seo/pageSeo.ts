export const SITE_NAME = 'NAMTech Solutions';
export const SITE_URL = 'https://namtechsolutions.in';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo/namTechSolutions.png`;

export type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export const pageSeo = {
  home: {
    title: `${SITE_NAME} | Custom Software Development Company`,
    description:
      'Custom web, mobile, AI, CRM, and cloud software from NAMTech Solutions in Gujarat. Secure, scalable products built for real business needs.',
    path: '/',
  },
  about: {
    title: `About Us | ${SITE_NAME}`,
    description:
      'NAMTech Solutions is a Gujarat-based software company building custom web apps, mobile apps, AI solutions, CRM systems, APIs, and cloud platforms.',
    path: '/about',
  },
  team: {
    title: `Team Achievements | ${SITE_NAME}`,
    description:
      'Certifications and milestones earned by the NAMTech Solutions team in software engineering, quality, and professional excellence.',
    path: '/team',
  },
  services: {
    title: `Software Development Services | ${SITE_NAME}`,
    description:
      'CRM integration, database design, cloud, web, mobile, and AI development services. From MVP to production systems that scale.',
    path: '/services',
  },
  projects: {
    title: `Our Projects | ${SITE_NAME}`,
    description:
      'See NAMTech Solutions projects including Datalix, Risk 365, Sooj AI, Silur Clinic, Khel Town, KES, and custom web, mobile, and AI software.',
    path: '/projects',
  },
  whyUs: {
    title: `Why Choose Us | ${SITE_NAME}`,
    description:
      'Why businesses choose NAMTech Solutions: quality engineering, transparent process, agile delivery, and software built for long-term growth.',
    path: '/why-us',
  },
  testimonials: {
    title: `Client Testimonials | ${SITE_NAME}`,
    description:
      'Read client reviews and testimonials for NAMTech Solutions. See why companies trust us for custom software development.',
    path: '/testimonials',
  },
  contact: {
    title: `Contact Us | ${SITE_NAME}`,
    description:
      'Contact NAMTech Solutions in Navsari, Gujarat. Email contact@namtechsolutions.in to discuss custom web, mobile, AI, or cloud software.',
    path: '/contact',
  },
  privacy: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      'Read how NAMTech Solutions collects, uses, and protects personal information and cookies on namtechsolutions.in.',
    path: '/privacy-policy',
  },
  notFound: {
    title: `Page Not Found | ${SITE_NAME}`,
    description:
      'This page does not exist. Return to NAMTech Solutions to explore our software development services.',
    path: '',
    noIndex: true,
  },
} as const satisfies Record<string, PageSeoConfig>;

export const indexablePages: PageSeoConfig[] = [
  pageSeo.home,
  pageSeo.about,
  pageSeo.services,
  pageSeo.projects,
  pageSeo.whyUs,
  pageSeo.testimonials,
  pageSeo.team,
  pageSeo.contact,
  pageSeo.privacy,
];
