import { useState } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { MarkedText } from '../ui/MarkedText';
import { ImageModal } from '../ui/ImageModal';
import project1 from '../../assets/datalix.png';
import project2 from '../../assets/riskpro.png';


// Dummy data - replace with actual project data
const projects: any = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    image: project1,
    description: 'A comprehensive e-commerce solution with advanced inventory management, payment integration, and analytics dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe','Stripe','Stripe','Stripe','Stripe', 'AWS'],
    clientReview: 'Outstanding work! The platform exceeded our expectations and has significantly improved our sales.',
    clientName: 'John Smith',
    clientRole: 'CEO, TechStore Inc.',
    rating: 5,
    link: 'https://example.com',
    productType: 'Client Product',
  },
  {
    id: 2,
    name: 'Healthcare Management System',
    image: project2,
    description: 'A secure healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Docker', 'Azure'],
    clientReview: 'The team delivered a robust solution that has streamlined our operations. Highly professional and reliable.',
    clientName: 'Dr. Sarah Johnson',
    clientRole: 'Medical Director',
    rating: 5,
    link: 'https://example.com',
    productType: 'Client Product',
  },
  {
    id: 3,
    name: 'FinTech Mobile App',
    image: project1,
    description: 'A modern mobile banking application with biometric authentication, real-time transactions, and investment tracking.',
    technologies: ['React Native', 'Node.js', 'GraphQL', 'Redis', 'Kubernetes'],
    clientReview: 'Excellent mobile app with great UX. Our users love the seamless experience and security features.',
    clientName: 'Michael Chen',
    clientRole: 'CTO, FinanceApp',
    rating: 5,
    link: 'https://example.com',
    productType: 'Our Product',
  },
  {
    id: 4,
    name: 'Learning Management System',
    image: '/api/placeholder/600/400',
    description: 'An intuitive LMS platform with course creation, student tracking, assessments, and video conferencing integration.',
    technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'AWS'],
    // clientReview: 'Perfect solution for our online education needs. The platform is user-friendly and feature-rich.',
    // clientName: 'Emily Rodriguez',
    // clientRole: 'Director, EduTech Solutions',
    // rating: 2,
    // link: 'https://example.com',
    productType: 'Client Product',
  },
  {
    id: 5,
    name: 'Real Estate Portal',
    image: '/api/placeholder/600/400',
    description: 'A comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'Cloudinary'],
    clientReview: 'The portal has transformed how we showcase properties. Great design and functionality.',
    clientName: 'David Williams',
    clientRole: 'Founder, PropertyHub',
    rating: 5,
    link: 'https://example.com',
    productType: 'Our Product',
  },
  {
    id: 6,
    name: 'SaaS Analytics Dashboard',
    image: '/api/placeholder/600/400',
    description: 'A powerful analytics dashboard with real-time data visualization, custom reports, and API integrations.',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Docker'],
    clientReview: 'Incredible analytics platform. The insights have helped us make data-driven decisions.',
    clientName: 'Lisa Anderson',
    clientRole: 'Product Manager, DataInsights',
    rating: 5,
    link: 'https://example.com',
    productType: 'Client Product',
  },
];

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ image: string; alt: string } | null>(null);

  return (
    <Section py="md" className="bg-bg-main">
      <Container>
        <div className="text-center mb-16">
          <MarkedText
            as="h2"
            text="Our [[Projects]]"
          />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mt-4">
            Showcasing our successful projects and client collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: any, index: any) => (
            <div
              key={project.id}
              className="group relative bg-bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage({ image: project.image, alt: project.name })}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/600x400/6366f1/ffffff?text=${project.name}`;
                  }}
                />

                {/* Product Type Badge - Top Right Corner */}
                <div className="absolute top-3 right-3 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.productType === 'Our Product'
                    ? 'bg-primary text-white'
                    : 'bg-secondary text-white'
                    }`}>
                    {project.productType}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 space-y-4">
                {/* Project Name */}
                <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech: any, techIndex: any) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 rounded-md bg-bg-muted text-text-secondary text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {/* {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-md bg-bg-muted text-text-secondary text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )} */}
                </div>

                {/* Divider */}
                <div className="border-t border-border/30"></div>

                {/* Client Review */}
                {project.rating && (
                <div className="space-y-2">
                  {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3.5 h-3.5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                  {/* Review Text */}
                  {project.clientReview && (
                    <p className="text-xs text-text-secondary italic line-clamp-2">
                      "{project.clientReview}"
                    </p>
                  )}

                  {/* Client Info */}
                  <div>
                    <div className="font-medium text-xs text-text-primary">
                      {project.clientName}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {project.clientRole}
                    </div>
                  </div>
                </div>
                  )}

                {/* View Project Link */}
                {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pt-2 border-t border-border/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-secondary">View Project</span>
                    <svg className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage.image}
          alt={selectedImage.alt}
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </Section>
  );
}
