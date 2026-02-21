import { CompanyLocation } from '../components/sections/CompanyLocation';
import ContactUs from '../components/sections/ContactUs';
import GoogleMap from '../components/sections/GoogleMap';
import { Container } from '../components/ui/Container';
import { MarkedText } from '../components/ui/MarkedText';
import { Section } from '../components/ui/Section';

export function ContactPage() {
  return (
    <>
      <CompanyLocation />
      <Section py='md'>
        <div className="text-center mb-16">
          <MarkedText
            as="h2"
            text="Contact [[Us]]"
          />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            We'd love to here from you.Reach out for inquiries or support
          </p>
        </div>
        <Container size='full'>
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
            <GoogleMap />
            <ContactUs />
          </div>
        </Container>
      </Section>
    </>
  );
}
