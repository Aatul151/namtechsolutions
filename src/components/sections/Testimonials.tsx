import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { MarkedText } from '../ui/MarkedText';
import { useEffect, useState } from 'react';
import { getFormEntriesByFormName } from '../../services/formservices';
import { FORMNAMES } from '../../utilities/codes';

export function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getTestimonials();
  }, [])

  const getTestimonials = async () => {
    try {
      const data = await getFormEntriesByFormName(FORMNAMES.TESTIMONIALS);
      if (data && data?.length > 0) setTestimonials(data);
    } catch (error) { }
  }

  return (
    <>
      {testimonials.length > 0 &&
        <Section id="testimonials" py="xl" className="bg-bg-muted">
          <Container>
            <div className="text-center mb-16">
              <MarkedText
                as="h2"
                text="What Our [[Clients Say]]"
              />
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Don't just take our word for it - hear from businesses we've helped succeed
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials?.map((testimonial: any, index: number) => (
                <Card key={index} hover className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {testimonial?.payload?.rating &&
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial?.payload?.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  }
                  {testimonial?.payload?.message &&
                    <p className="text-text-secondary mb-6 italic">"{testimonial?.payload?.message}"</p>
                  }
                  <div>
                    {testimonial?.payload?.client_name &&
                      <div className="font-semibold text-text-primary">{testimonial?.payload?.client_name}</div>
                    }
                    {testimonial?.payload?.designation &&
                      <div className="text-sm text-text-secondary">{testimonial?.payload?.designation}</div>
                    }
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      }
    </>
  );
}
