import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MarkedText } from '../ui/MarkedText';

const technologies = [
  {
    category: 'Frontend',
    techs: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    techs: ['Node.js', 'Python', 'Java', 'PHP', 'Ruby', 'Go'],
  },
  {
    category: 'Mobile',
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'],
  },
  {
    category: 'Cloud & DevOps',
    techs: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  },
  {
    category: 'Databases',
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'],
  },
  {
    category: 'Tools & Frameworks',
    techs: ['Git', 'GraphQL', 'REST APIs', 'Microservices', 'Serverless'],
  },
];

export function TechnologyStack() {
  return (
    <Section py="xl">
      <Container>
        <div className="text-center mb-16">
          <MarkedText
            as="h2"
            text="Our [[Technology]] Stack"
          />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mt-4">
            We work with cutting-edge technologies to deliver modern solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              hover 
              className="p-6 md:p-8 animate-fade-in border-2 border-border/50 hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-text-primary flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                {tech.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.techs.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1.5 rounded-lg bg-bg-muted text-text-secondary text-sm border border-border/50 hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
