import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MarkedText } from '../ui/MarkedText';
import detail from '../../assets/detail.json'

export function WhyChooseUs() {
  const { why_us } = detail

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
          {why_us?.map((feature: any, idx: number) => (
            <Card key={idx} hover className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              {feature?.icon &&
                <div className="text-primary mb-4 w-8 h-8">
                  <img
                    src={feature?.icon}
                    alt='image'
                    className=''
                  />
                </div>
              }
              {feature?.title &&
                <h3 className="text-xl font-semibold mb-2 text-text-primary">{feature?.title}</h3>
              }
              {feature?.description &&
                <p className="text-text-secondary"
                  dangerouslySetInnerHTML={{
                    __html: feature?.description
                  }}
                ></p>
              }
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
