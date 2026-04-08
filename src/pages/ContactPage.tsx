import { CompanyLocation } from '../components/sections/CompanyLocation';
import ContactUs from '../components/sections/ContactUs';
import GoogleMap from '../components/sections/GoogleMap';
import { Container } from '../components/ui/Container';
import { MarkedText } from '../components/ui/MarkedText';
import { Section } from '../components/ui/Section';

export function ContactPage() {
  return (
    <Section className="bg-zinc-50 py-16 dark:bg-zinc-950/40 md:py-24">
      <Container size="lg">
        {/* heading */}
        <div className="mb-14 text-center">
          <MarkedText as="h2" text="Contact [[Us]]" />
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 md:text-lg">
            We'd love to hear from you. Reach out for inquiries or support.
          </p>
        </div>

        <div className="space-y-8">
          {/* top company location */}
          <CompanyLocation />

          {/* bottom 2 grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* map */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-900">
              <GoogleMap />
            </div>

            {/* form */}
            {/* <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900"> */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-900">

              <ContactUs />
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}