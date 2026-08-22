import { Link } from 'react-router-dom';
import { type ReactNode } from 'react';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Seo } from '../components/seo/Seo';
import { pageSeo } from '../seo/pageSeo';
import { useComponyDetail } from '../context/componyContext';

function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-text-secondary">{children}</div>
    </section>
  );
}

export function PrivacyPolicyPage() {
  const { componyProfile } = useComponyDetail();
  const profile = componyProfile?.profile;
  const company = profile?.name || 'NAMTech Solutions';
  const email = profile?.email || 'contact@namtechsolutions.in';
  const address = profile?.address || 'Navsari, Gujarat, India';

  return (
    <Section py="md" className="bg-bg-main">
      <Seo {...pageSeo.privacy} />
      <Container size="md">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Legal</p>
        <h1 className="text-3xl font-bold text-text-primary md:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-text-secondary">Last updated: 22 August 2026</p>

        <div className="mt-10 space-y-10 rounded-[1.75rem] border border-border bg-bg-card p-6 shadow-soft md:p-10">
          <PolicySection title="Who we are">
            <p>
              {company} (“we”, “us”, “our”) is a software development company based at {address}.
              This policy explains how we collect, use, and protect information when you visit{' '}
              <a href="https://namtechsolutions.in" className="font-medium text-primary hover:underline">
                namtechsolutions.in
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="Information we collect">
            <p>We collect only what we need to run this website and respond to enquiries:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Contact details you submit (name, email, phone, and message)</li>
              <li>Basic technical data such as browser type and pages visited</li>
              <li>Cookie preference (accepted or declined), stored in your browser</li>
            </ul>
            <p>We do not sell personal information or buy marketing lists.</p>
          </PolicySection>

          <PolicySection title="How we use information">
            <ul className="list-disc space-y-1 pl-5">
              <li>To reply to project enquiries sent through the contact form</li>
              <li>To operate, secure, and improve the website</li>
              <li>To remember your cookie choice</li>
            </ul>
            <p>
              Messages sent from the contact form are delivered by email through EmailJS so we can
              reach you at the address you provide.
            </p>
          </PolicySection>

          <PolicySection title="Cookies">
            <p>
              We use a small cookie-preference record in your browser so the consent banner does not
              appear on every visit. If you accept cookies, we may also use them to understand how
              the site is used. You can decline non-essential cookies. Essential operation of the
              site does not require marketing cookies.
            </p>
            <p>
              You can change your choice anytime from the Cookie preferences link in the footer.
            </p>
          </PolicySection>

          <PolicySection title="Sharing and retention">
            <p>
              We share contact-form data only with the email delivery provider needed to send us
              your message. We keep enquiry emails for as long as needed to respond and follow up,
              then delete them when they are no longer required.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              For privacy questions, email{' '}
              <a href={`mailto:${email}`} className="font-medium text-primary hover:underline">
                {email}
              </a>
              .
            </p>
            <p>
              <Link to="/contact" className="font-medium text-primary hover:underline">
                Go to the contact page
              </Link>
            </p>
          </PolicySection>
        </div>
      </Container>
    </Section>
  );
}
