import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { StatCard } from '../ui/StatCard';
import { useComponyDetail } from '../../context/componyContext';

export function Stats() {
  const { componyProfile } = useComponyDetail();
  const { profile } = componyProfile;

  return (
    <>
      {profile?.statistics?.length > 0 && (
        <Section py="md" className="bg-zinc-50 dark:bg-zinc-950/40 rounded-3xl">
          <Container>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {profile?.statistics.map((stat: any, index: any) => (
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

