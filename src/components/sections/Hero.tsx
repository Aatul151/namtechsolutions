import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { StatCard } from '../ui/StatCard';
import { MarkedText } from '../ui/MarkedText';
import { AchievementCard } from '../ui/AchievementCard';
import acvimentlogo from '../../assets/upworkLogo.png'
import { useComponyDetail } from '../../context/componyContext';
import { useEffect, useState } from 'react';
import { getFormEntriesByFormName } from '../../services/formservices';
import { FORMNAMES } from '../../utilities/codes';

interface Achievement {
  title: string;
  certificate_image: string;
  issuing_organization: string;
  organization_logo?: string;
}

export function Hero() {
  const { componyProfile } = useComponyDetail();
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    getStats();
  }, [])

  const getStats = async () => {
    try {
      const data = await getFormEntriesByFormName(FORMNAMES.STATISTICS);

      if (data) {
        let values: any = []
        const animationStyles = [
          'absolute -top-8 -right-8 animate-float',
          'absolute top-1/4 -left-8 animate-float',
          'absolute bottom-1/4 -right-12 animate-float',
          'absolute -bottom-8 left-8 animate-float',
        ]

        const animationDelay = ['0.5s', '1.5s', '2.5s', '3.5s']

        for (let index = 0; index < data?.length; index++) {
          const eachval = data[index];
          values?.push({ ...eachval, animationStyle: animationStyles[index], animationDelay: animationDelay[index] })
        }
        setStatistics(values)

      }
    } catch (error) {

    }
  }

  // Dynamic achievements data from API
  // Replace this with your API call
  const achievements: Achievement[] = [
    {
      title: 'Top Rated Plus',
      certificate_image: acvimentlogo, // Replace with actual image URL
      issuing_organization: 'Upwork',
      organization_logo: acvimentlogo, // Replace with actual logo URL
    },
    // Add more achievements from API
  ];

  return (
    <Section py="xs" className="relative overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8 animate-fade-in">
            {/* Animated Badge */}
            <div className="inline-block">
              <Badge variant="success" className="animate-slide-up">
                <span className="flex items-center gap-2">
                  {componyProfile?.welcome_tagline}
                </span>
              </Badge>
            </div>

            {/* Headline */}
            {componyProfile?.short_title &&
              <MarkedText
                as="h1"
                text={componyProfile?.short_title}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
              />
            }

            {/* Supporting Paragraph */}
            <p className="text-xl text-text-secondary max-w-xl leading-relaxed">
              {componyProfile?.short_description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>

            {/* Achievements */}
            {achievements.length > 0 && (
              <div className="pt-3">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {achievements.map((achievement, index) => (
                    <AchievementCard
                      key={index}
                      title={achievement.title}
                      certificate_image={achievement.certificate_image}
                      issuing_organization={achievement.issuing_organization}
                      organization_logo={achievement.organization_logo}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Social Proof statistics */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-border">
              {statistics?.length > 0 &&
                statistics?.slice(4, statistics.length)?.map((stat: any, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-bold text-text-primary">{stat?.payload?.number}</div>
                    <div className="text-sm text-text-secondary">{stat?.payload?.title}</div>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Right Side */}
          <div className="relative lg:block hidden">
            {/* Professional Image Placeholder */}
            <div className="relative">
              <div className="w-full h-[600px] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border shadow-strong flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-primary/30 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p className="text-text-secondary">Professional Development</p>
                </div>
              </div>

              {/* Floating Stat Cards */}
              {statistics?.length > 0 &&
                statistics?.slice(0, 4)?.map((stats: any) => (
                  <div className={stats?.animationStyle} style={{ animationDelay: stats?.animationDelay }}>
                    <StatCard
                      value={stats?.payload?.number}
                      label={stats?.payload?.title}
                      floating
                      className="w-48 bg-bg-card/95 backdrop-blur-sm"
                    />
                  </div>
                ))
              }
            </div>
          </div>

          {/* Mobile: Show simplified version */}
          <div className="lg:hidden space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <StatCard value="5 Min" label="Avg Response" floating />
              <StatCard value="100%" label="Transparency" floating />
              <StatCard value="150+" label="Projects Shipped" floating />
              <StatCard value="Sprint" label="Delivery" floating />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
