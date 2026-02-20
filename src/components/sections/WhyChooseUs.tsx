import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MarkedText } from '../ui/MarkedText';
import { getFormEntriesByFormName } from '../../services/formservices';
import { useEffect, useState } from 'react';
import { FORMNAMES } from '../../utilities/codes';
import { APIENDPOINT } from '../../services/apihelper';

export function WhyChooseUs() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    getFeatures();
  }, [])

  const getFeatures = async () => {
    try {
      const data = await getFormEntriesByFormName(FORMNAMES.WHY_US);
      if (data && data?.length > 0) setFeatures(data);
    } catch (error) { }
  }
  return (
    <Section id="why-us" py="xl">
      <Container>
        <div className="text-center mb-16">
          <MarkedText
            as="h2"
            text="Why Choose [[Us]]"
          />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            We combine technical excellence with business acumen to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features?.map((feature: any, idx: number) => (
            <Card key={idx} hover className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              {feature?.payload?.icon &&
                <div className="text-primary mb-4 w-8 h-8">
                  <img
                    src={APIENDPOINT + feature?.payload?.icon?.fileUrl}
                    alt='image'
                    className=''
                  />
                </div>
              }
              <h3 className="text-xl font-semibold mb-2 text-text-primary">{feature?.payload?.title}</h3>
              <p className="text-text-secondary"
                dangerouslySetInnerHTML={{
                  __html: feature?.payload?.description
                }}
              ></p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
