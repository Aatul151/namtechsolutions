import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { MarkedText } from '../ui/MarkedText';
import { useComponyDetail } from '../../context/componyContext';
import { ServiceLogo } from '../ui/ServiceLogo';

export function HomeServices() {
  const { componyProfile } = useComponyDetail();
  const services = componyProfile?.our_services?.services ?? [];

  if (!services.length) return null;

  return (
    <Section id="services" py="xl">
      <Container>
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              What we build
            </p>
            <MarkedText as="h2" text="Services that move [[products forward]]" />
          </div>
          <Link
            to="/services"
            className="text-sm font-semibold text-primary hover:underline"
          >
            See all services →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service: any, index: number) => (
            <article
              key={index}
              className="group flex h-full flex-col rounded-3xl border border-border bg-bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-strong"
            >
              <div className="mb-5 flex h-14 items-center">
                <ServiceLogo service={service} />
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-text-primary group-hover:text-primary">
                {service?.Title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">
                {service?.description}
              </p>

              {service?.technologis_ref?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.technologis_ref.slice(0, 3).map((tech: any, tidx: number) => (
                    <span
                      key={tidx}
                      className="rounded-full border border-border bg-bg-main px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-text-secondary"
                    >
                      {tech?.name}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
