import { useEffect } from 'react';
import { useComponyDetail } from '../../context/componyContext';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, indexablePages, type PageSeoConfig } from '../../seo/pageSeo';

type SeoProps = PageSeoConfig;

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function toAbsoluteUrl(url: string | undefined, origin: string) {
  if (!url) return DEFAULT_OG_IMAGE;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `${origin}${url.startsWith('/') ? url : `/${url}`}`;
}

export function Seo({ title, description, path, noIndex = false }: SeoProps) {
  const { componyProfile } = useComponyDetail();
  const profile = componyProfile?.profile;

  useEffect(() => {
    const origin = (profile?.website_url || SITE_URL).replace(/\/$/, '');
    const canonical = path ? `${origin}${path}` : origin;
    const image = toAbsoluteUrl(profile?.logo || profile?.secondary_logo, origin);
    const pageUrl = path ? canonical : window.location.href;

    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'author', profile?.name || SITE_NAME);
    upsertMeta('name', 'theme-color', profile?.primary_color || '#0f3fd2');
    upsertMeta('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large');

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', profile?.name || SITE_NAME);
    upsertMeta('property', 'og:locale', 'en_IN');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', pageUrl);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:image:alt', `${profile?.name || SITE_NAME} logo`);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    if (noIndex) {
      document.head.querySelector('link[rel="canonical"]')?.remove();
    } else {
      upsertLink('canonical', canonical);
    }

    const telephone = profile?.mobile_number
      ? `+${String(profile.mobile_number).replace(/^\+/, '')}`
      : undefined;

    const sameAs = [
      profile?.linkedin,
      profile?.upwork,
      profile?.twitter,
      profile?.facebook,
      profile?.instagram,
      profile?.fiverr,
    ].filter((url: string | undefined) => Boolean(url));

    upsertJsonLd('seo-organization', {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
      name: profile?.name || SITE_NAME,
      slogan: profile?.slogan,
      url: origin,
      logo: image,
      email: profile?.email,
      telephone,
      address: profile?.address
        ? {
            '@type': 'PostalAddress',
            streetAddress: profile.address,
            addressLocality: 'Navsari',
            addressRegion: 'Gujarat',
            postalCode: String(profile.pincode || '396424'),
            addressCountry: 'IN',
          }
        : undefined,
      ...(sameAs.length ? { sameAs } : {}),
      areaServed: ['IN', 'Worldwide'],
    });

    upsertJsonLd('seo-website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: profile?.name || SITE_NAME,
      url: `${origin}/`,
      inLanguage: 'en-IN',
      publisher: profile?.name || SITE_NAME,
    });

    upsertJsonLd('seo-sitelinks', {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: indexablePages.map((page, index) => ({
        '@type': 'SiteNavigationElement',
        position: index + 1,
        name: page.title.split('|')[0].trim(),
        url: `${origin}${page.path === '/' ? '/' : page.path}`,
      })),
    });

    if (!noIndex && path && path !== '/') {
      const crumbName = title.split('|')[0].trim();
      upsertJsonLd('seo-breadcrumb', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${origin}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: crumbName,
            item: canonical,
          },
        ],
      });
    } else {
      document.getElementById('seo-breadcrumb')?.remove();
    }
  }, [title, description, path, noIndex, profile]);

  return null;
}
