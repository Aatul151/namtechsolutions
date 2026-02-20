import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MarkedText } from '../ui/MarkedText';
import { getFormEntriesByFormName } from '../../services/formservices';
import { FORMNAMES } from '../../utilities/codes';
import { useEffect, useState } from 'react';
import { APIENDPOINT } from '../../services/apihelper';

export function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices();
  }, [])

  const getServices = async () => {
    try {
      const data = await getFormEntriesByFormName(FORMNAMES.SERVICES);
      if (data && data?.length > 0) setServices(data);
    } catch (error) { }
  }
  return (
    <>
      {services?.length > 0 &&
        <Section id="services" py="xl">
          <Container>
            <div className="text-center mb-16">
              <MarkedText
                as="h2"
                text="Our [[Services]]"
              />
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Comprehensive software development solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services?.map((service: any, index: number) => (
                <Card key={index} hover className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {service?.payload?.image &&
                    <div className="text-primary mb-4 w-8 h-8">
                      <img
                        src={APIENDPOINT + service?.payload?.image?.fileUrl}
                        alt='image'
                        className=''
                      />
                    </div>
                  }
                  <h3 className="text-xl font-semibold mb-2 text-text-primary">{service?.payload?.Title}</h3>
                  <p className="text-text-secondary mb-2">{service?.payload?.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service?.payload?.technologis_ref?.map((tech: any, idx: any) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-md bg-bg-muted text-text-secondary text-xs"
                      >
                        {tech?.name}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      }
    </>
  );
}
