import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { MarkedText } from '../ui/MarkedText';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface AboutCompanyProps {
  title?: string;
  content?: string; // HTML content from CKEditor
}

const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Proven Track Record',
    description: '150+ successful projects delivered',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Expert Team',
    description: '50+ senior engineers',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Delivery',
    description: 'Sprint-based methodology',
  },
];

export function AboutCompany({ 
  title = "About [[Our Company]]",
  content = `
   <p style=\"text-align:justify;\"><strong>NAMTech Solutions</strong> is a growing software development company based in Navsari, focused on delivering modern and practical technology solutions. As a startup, we are dedicated to innovation, quality, and continuous improvement.</p><p style=\"text-align:justify;\">Our team works with a wide range of technologies to build reliable, scalable, and user-friendly software tailored to each client’s needs. By combining local expertise with a global outlook, we help businesses turn their ideas into effective digital products that support growth and success.</p><p style=\"text-align:justify;\">At NAMTech Solutions, we value creativity, efficiency, and strong client relationships, striving to provide customized solutions that meet the unique requirements of every project while staying updated with the latest trends in technology.</p>
  `
}: AboutCompanyProps) {
  return (
    <Section id="about" py="xl" className="relative overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-8 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-1/4 -right-8 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="info" className="mb-6 animate-slide-up">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Trusted by Industry Leaders
            </span>
          </Badge>
          <MarkedText
            as="h2"
            text={title}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          />
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Building the future of software, one exceptional solution at a time
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Side - CKEditor Content */}
          <div className="space-y-8 animate-fade-in">
            <Card className="p-8 lg:p-5">
              <div 
                className="ckeditor-content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </Card>
          </div>

          {/* Right Side - Visual Elements & Highlights */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Highlights Cards */}
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <Card hover className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                        {highlight.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-text-primary mb-1">
                          {highlight.title}
                        </h3>
                        <p className="text-text-secondary">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Decorative Visual Element */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-50"></div>
              <Card glass className="p-8 relative">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-text-primary">Innovation</div>
                    <div className="text-text-secondary">Driving Excellence</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
