import { CompanyLocation } from '../components/sections/CompanyLocation';
import ContactUs from '../components/sections/ContactUs';
import GoogleMap from '../components/sections/GoogleMap';
import { Container } from '../components/ui/Container';
import { MarkedText } from '../components/ui/MarkedText';
import { Section } from '../components/ui/Section';

export function ContactPage() {
  return (
    <Section className="py-16 md:py-24 bg-gray-50">
      <Container size="lg">
        {/* Heading */}
        <div className="text-center mb-14 px-2">
          <MarkedText as="h2" text="Contact [[Us]]" />
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mt-4">
            We'd love to hear from you. Reach out for inquiries or support.
          </p>
        </div>

        {/* Two-column layout with equal height */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10">

          {/* Left Side: CompanyLocation + GoogleMap */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 flex flex-col gap-6 h-full">
              <CompanyLocation />

            </div>
          </div>

          {/* Right Side: ContactUs Form */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-text-secondary mb-6">
                Fill out the form below and our team will get back to you shortly.
              </p>
              <ContactUs />
            </div>
          </div>

        </div>
        <div className="flex-1 overflow-hidden rounded-2xl">
          <GoogleMap />
        </div>
      </Container>
    </Section>
  );
}