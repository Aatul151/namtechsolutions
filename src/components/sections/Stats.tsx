import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import detail from '../../assets/detail.json';
import { StatCard } from '../ui/StatCard';

export function Stats() {
  const { profile } = detail;

  return (
    <>
      {profile.statistics?.length > 0 && (
        <Section py="md">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {profile.statistics.map((stat: any, index: number) => (
                <StatCard
                  key={index}
                  value={stat.number}
                  label={stat.title}
                  icon={stat.icon}
                  delay={index * 0.15}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}

