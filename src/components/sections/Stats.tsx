import { useComponyDetail } from '../../context/componyContext';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { StatCard } from '../ui/StatCard';

export function Stats() {
  const { statistics } = useComponyDetail();

  return (
    <>
      {statistics?.length > 0 &&
        <Section py="lg" className="bg-bg-muted">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {statistics.map((stat: any, index: number) => (
                <StatCard
                  key={index}
                  value={stat?.payload?.number}
                  label={stat?.payload?.title}
                  icon={stat?.payload?.icon?.fileUrl}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>
          </Container>
        </Section>
      }
    </>
  );
}
