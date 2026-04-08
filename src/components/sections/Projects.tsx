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

            <div className="space-y-16">
              {projects?.map((project: any, index: any) => {
                const imgUrl = project?.banners;

                return (
                  <div
                    key={project?._id}
                    className="grid items-center gap-8 border-b border-zinc-200 pb-12 dark:border-white/10 lg:grid-cols-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image */}
                    <div
                      className="group relative overflow-hidden rounded-3xl cursor-pointer"
                      onClick={
                        imgUrl
                          ? () =>
                            setSelectedImage({
                              image: imgUrl,
                              alt: project?.name,
                            })
                          : undefined
                      }
                    >
                      {project?.banners && (
                        <img
                          src={imgUrl}
                          alt={project?.name}
                          className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://via.placeholder.com/800x500/6366f1/ffffff?text=${project.name}`;
                          }}
                        />
                      )}

                      {project?.type && (
                        <div className="absolute left-4 top-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${project?.type === "our product"
                              ? "bg-primary text-white"
                              : "bg-secondary text-white"
                              }`}
                          >
                            {project.type}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-5">
                      {project?.name && (
                        <h3 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                          {project.name}
                        </h3>
                      )}

                      {project?.details && (
                        <div className="text-base leading-8 text-zinc-600 dark:text-zinc-400">
                          <ExpandableText text={project.details} maxLines={4} />
                        </div>
                      )}

                      {/* technologies */}
                      {project?.technologies_ref?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies_ref.map((tech: any, techIndex: any) => (
                            <span
                              key={techIndex}
                              className="text-sm text-zinc-500 dark:text-zinc-400"
                            >
                              {tech?.name}
                              {techIndex !== project.technologies_ref.length - 1 && " •"}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* link */}
                      {project?.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-primary"
                        >
                          View Project
                          <svg
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                );
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
