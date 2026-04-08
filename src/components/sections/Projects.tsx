import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { MarkedText } from '../ui/MarkedText';
import { ImageModal } from '../ui/ImageModal';
import ExpandableText from '../ui/ExpandableText';
import detail from '../../assets/detail.json'
import { useState } from 'react';

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ image: string; alt: string } | null>(null);
  const { projects } = detail

  return (
    <>
      {projects?.length > 0 &&
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
              {projects?.map((project: any, index: any) => {
                const imgUrl = project?.banners;

                return (
                  <div
                    key={project?._id}
                    className="group relative bg-bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Project Image */}
                    <div
                      className="relative h-48 overflow-hidden cursor-pointer"
                      onClick={
                        imgUrl
                          ? () =>
                            setSelectedImage({
                              image: imgUrl,
                              alt: project?.name,
                            })
                          : undefined}
                    >
                      {project?.banners &&
                        <img
                          src={imgUrl}
                          alt={project?.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://via.placeholder.com/600x400/6366f1/ffffff?text=${project.name}`;
                          }}
                        />
                      }

                      {/* Product Type Badge - Top Right Corner */}
                      {project?.type &&
                        <div className="absolute top-3 right-3 z-10">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project?.type === 'our product'
                            ? 'bg-primary text-white'
                            : 'bg-secondary text-white'
                            }`}>
                            {project?.type}
                          </span>
                        </div>
                      }
                    </div>

                    {/* Project Content */}
                    <div className="p-5 space-y-4">
                      {/* Project Name */}
                      {project?.name &&
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                          {project?.name}
                        </h3>
                      }

                      {/* Description */}
                      {project?.details &&
                        <p className="text-sm text-text-secondary leading-relaxed"
                        >
                          <ExpandableText text={project?.details} maxLines={3} />
                        </p>
                      }

                      {/* Technologies */}
                      {project?.technologies_ref?.length > 0 &&
                        <div className="flex flex-wrap gap-1.5">
                          {project?.technologies_ref?.map((tech: any, techIndex: any) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 rounded-md bg-bg-muted text-text-secondary text-xs"
                            >
                              {tech?.name}
                            </span>
                          ))}
                          {/* {project.technologies.length > 4 && (
                          <span className="px-2 py-1 rounded-md bg-bg-muted text-text-secondary text-xs">
                            +{project.technologies.length - 4}
                          </span>
                        )} */}
                        </div>
                      }
                      {/* Divider */}

                      {/* Client Review */}
                      {project?.rating_ref && (
                        <>
                          <div className="border-t border-border/30"></div>
                          <div className="space-y-2">
                            {/* Rating */}
                            <div className="flex items-center gap-1">
                              {[...Array(project?.rating_ref?.rating)].map((_, i) => (
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
                            {project?.rating_ref?.message && (
                              <p className="text-xs text-text-secondary italic leading-relaxed">
                                <ExpandableText text={project?.rating_ref?.message} maxLines={2} />
                              </p>
                            )}

                            {/* Client Info */}
                            <div>
                              {project?.rating_ref?.client_name &&
                                <div className="font-medium text-xs text-text-primary">
                                  {project?.rating_ref?.client_name}
                                </div>
                              }
                              {project?.rating_ref?.designation &&
                                <div className="text-xs text-text-secondary">
                                  {project?.rating_ref?.designation}
                                </div>
                              }
                            </div>
                          </div>
                        </>
                      )}

                      {/* View Project Link */}
                      {project?.url && (
                        <a
                          href={project?.url}
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
                )
              })}
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
      }
    </>
  );
}
