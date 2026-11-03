(function () {
  var origin = 'https://namtechsolutions.in';
  var pages = {
    '/': {
      title: 'NAMTech Solutions | Custom Software Development Company',
      description: 'Custom web, mobile, AI, CRM, and cloud software from NAMTech Solutions in Gujarat. Secure, scalable products built for real business needs.'
    },
    '/about': {
      title: 'About Us | NAMTech Solutions',
      description: 'NAMTech Solutions is a Gujarat-based software company building custom web apps, mobile apps, AI solutions, CRM systems, APIs, and cloud platforms.'
    },
    '/team': {
      title: 'Team Achievements | NAMTech Solutions',
      description: 'Certifications and milestones earned by the NAMTech Solutions team in software engineering, quality, and professional excellence.'
    },
    '/services': {
      title: 'Software Development Services | NAMTech Solutions',
      description: 'CRM integration, database design, cloud, web, mobile, and AI development services. From MVP to production systems that scale.'
    },
    '/projects': {
      title: 'Our Projects | NAMTech Solutions',
      description: 'See NAMTech Solutions projects including Datalix, Risk 365, Sooj AI, Silur Clinic, Khel Town, KES, and custom web, mobile, and AI software.'
    },
    '/why-us': {
      title: 'Why Choose Us | NAMTech Solutions',
      description: 'Why businesses choose NAMTech Solutions: quality engineering, transparent process, agile delivery, and software built for long-term growth.'
    },
    '/testimonials': {
      title: 'Client Testimonials | NAMTech Solutions',
      description: 'Read client reviews and testimonials for NAMTech Solutions. See why companies trust us for custom software development.'
    },
    '/contact': {
      title: 'Contact Us | NAMTech Solutions',
      description: 'Contact NAMTech Solutions in Navsari, Gujarat. Email contact@namtechsolutions.in to discuss custom web, mobile, AI, or cloud software.'
    },
    '/privacy-policy': {
      title: 'Privacy Policy | NAMTech Solutions',
      description: 'Read how NAMTech Solutions collects, uses, and protects personal information and cookies on namtechsolutions.in.'
    },
    '/celebration': {
      title: 'Happy Diwali | NAMTech Solutions',
      description: 'NAMTech Solutions wishes you a Happy Diwali. A festival greeting from our software team in Gujarat — Dil Se, Tech Tak.'
    }
  };

  var path = (window.location.pathname || '/').replace(/\/+$/, '') || '/';
  var page = pages[path];
  if (!page) {
    var robots = document.querySelector('meta[name="robots"]');
    if (robots) robots.setAttribute('content', 'noindex, follow');
    return;
  }

  var url = origin + (path === '/' ? '/' : path);
  document.title = page.title;

  var desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', page.description);

  var canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', url);

  var ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', page.title);
  var ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', page.description);
  var ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', url);

  var twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', page.title);
  var twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', page.description);
})();
