import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { StatCard } from '../ui/StatCard';
import { IconBadge } from '../ui/IconBadge';
import { MarkedText } from '../ui/MarkedText';

export function Hero() {
  // Dynamic headline from API - use [[text]] markers for gradient parts
  // Example: "Build [[Premium Software]] That Scales"
  // You can have multiple gradients: "[[Fast]] and [[Reliable]] Solutions"
  const headline = 'Build [[Premium Software]] That Scales';

  return (
    <Section py="2xl" className="relative overflow-hidden">
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
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Replies within 5 minutes
                </span>
              </Badge>
            </div>

            {/* Headline */}
            <MarkedText
              as="h1"
              text={headline}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
            />

            {/* Supporting Paragraph */}
            <p className="text-xl text-text-secondary max-w-xl leading-relaxed">
              Enterprise-grade software development services. We deliver scalable, 
              secure, and innovative solutions that drive your business forward.
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

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-4">
              <IconBadge
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                }
                text="NDA Protected"
              />
              <IconBadge
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                }
                text="100% Satisfaction"
              />
              <IconBadge
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                }
                text="24/7 Support"
              />
            </div>

            {/* Social Proof Stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-text-primary">4.9/5</div>
                <div className="text-sm text-text-secondary">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-text-primary">150+</div>
                <div className="text-sm text-text-secondary">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-text-primary">50+</div>
                <div className="text-sm text-text-secondary">Expert Engineers</div>
              </div>
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
              <div className="absolute -top-8 -right-8 animate-float" style={{ animationDelay: '0.5s' }}>
                <StatCard
                  value="5 Min"
                  label="Avg Response"
                  floating
                  className="w-48 bg-bg-card/95 backdrop-blur-sm"
                />
              </div>
              <div className="absolute top-1/4 -left-8 animate-float" style={{ animationDelay: '1.5s' }}>
                <StatCard
                  value="100%"
                  label="Transparency"
                  floating
                  className="w-48 bg-bg-card/95 backdrop-blur-sm"
                />
              </div>
              <div className="absolute bottom-1/4 -right-12 animate-float" style={{ animationDelay: '2.5s' }}>
                <StatCard
                  value="150+"
                  label="Projects Shipped"
                  floating
                  className="w-48 bg-bg-card/95 backdrop-blur-sm"
                />
              </div>
              <div className="absolute -bottom-8 left-8 animate-float" style={{ animationDelay: '3.5s' }}>
                <StatCard
                  value="Sprint"
                  label="Delivery"
                  floating
                  className="w-48 bg-bg-card/95 backdrop-blur-sm"
                />
              </div>
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
