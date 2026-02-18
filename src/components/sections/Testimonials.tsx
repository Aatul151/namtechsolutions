import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MarkedText } from '../ui/MarkedText';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'Namtech Solutions transformed our legacy system into a modern, scalable platform. Their expertise and attention to detail is unmatched.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, StartupXYZ',
    content: 'Working with Namtech was a game-changer. They delivered our MVP in record time and the code quality exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager, Enterprise Inc',
    content: 'The team\'s responsiveness and technical depth helped us launch our product ahead of schedule. Highly recommended!',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" py="xl" className="bg-bg-muted">
      <Container>
        <div className="text-center mb-16">
          <MarkedText
            as="h2"
            text="What Our [[Clients Say]]"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped succeed
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-secondary mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-text-primary">{testimonial.name}</div>
                <div className="text-sm text-text-secondary">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
