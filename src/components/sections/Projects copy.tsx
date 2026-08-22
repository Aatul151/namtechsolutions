import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { MarkedText } from '../ui/MarkedText';
import ExpandableText from '../ui/ExpandableText';
import { useState } from 'react';
import { useComponyDetail } from '../../context/componyContext';
import ImagePreviewModal from '../ui/ImagePreviewModal';

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { componyProfile } = useComponyDetail();
  const { projects } = componyProfile

  return (
    <>
      {projects?.length > 0 &&
        <Section py="md" className="bg-zinc-50 py-20 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
          <Container>
            {/* Section Header */}
            <div className="text-center mb-20">
              <MarkedText as="h2" text="Our [[Projects]]" />
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
                Showcasing our successful projects and client collaborations
              </p>
            </div>

            {/* Modern Projects Grid */}
            <div className="space-y-20">
              {projects?.map((project: any, index: number) => {
                const imgUrl = project?.banners;
                const isEven = index % 2 === 1;

                return (
                  <div
                    key={project?._id || index}
                    className="group relative bg-white/60 dark:bg-zinc-900/40 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 p-6 md:p-8 shadow-xs hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-950/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-500 animate-fade-in overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Subtle Ambient Radial Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2 relative z-10">
                      {/* Image Frame Container (Alternates position on desktop) */}
                      <div
                        className={`group/img relative overflow-hidden rounded-2xl cursor-pointer bg-zinc-100 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800 ${isEven ? "lg:order-2" : "lg:order-1"
                          }`}
                        onClick={
                          imgUrl
                            ? () =>
                              setSelectedImage(imgUrl)
                            : undefined
                        }
                      >
                        {project?.banners && (
                          <img
                            src={imgUrl}
                            alt={project?.name}
                            className="h-[320px] md:h-[380px] w-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://via.placeholder.com/800x500/6366f1/ffffff?text=${encodeURIComponent(
                                project?.name || "Project"
                              )}`;
                            }}
                          />
                        )}

                        {/* Glassmorphic Project Type Badge */}
                        {project?.type && (
                          <div className="absolute left-4 top-4 z-10">
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold backdrop-blur-md border shadow-sm uppercase tracking-wider ${project?.type === "our product"
                                ? "bg-blue-600/90 text-white border-blue-400/30"
                                : "bg-zinc-900/80 dark:bg-white/90 text-zinc-100 dark:text-zinc-900 border-white/20 dark:border-zinc-300"
                                }`}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              {project?.type}
                            </span>
                          </div>
                        )}

                        {/* Hover Glass Blur Overlay */}
                        <div className="absolute inset-0 bg-zinc-950/40 dark:bg-zinc-950/60 backdrop-blur-[2px] opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                          <div className="w-11 h-11 rounded-2xl bg-white/90 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 shadow-xl backdrop-blur-md border border-white/50 dark:border-zinc-700/80 flex items-center justify-center transform scale-75 group-hover/img:scale-100 transition-transform duration-300">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 3h6v6m0-6L14 10M9 21H3v-6m0 6l7-7"
                              />
                            </svg>
                          </div>
                          <span className="text-[10px] font-bold tracking-widest text-white uppercase opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 delay-75">
                            Expand Banner
                          </span>
                        </div>
                      </div>

                      {/* Content Block */}
                      <div
                        className={`space-y-6 flex flex-col justify-center ${isEven ? "lg:order-1" : "lg:order-2"
                          }`}
                      >
                        {project?.name && (
                          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project?.name}
                          </h3>
                        )}

                        {project?.details && (
                          <div className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
                            <ExpandableText text={project?.details} maxLines={4} />
                          </div>
                        )}

                        {/* Technologies Pill Tag Grid */}
                        {project?.technologies_ref?.length > 0 && (
                          <div className="pt-2">
                            <div className="flex flex-wrap gap-2">
                              {project?.technologies_ref?.map(
                                (tech: any, techIndex: number) => (
                                  <span
                                    key={techIndex}
                                    className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/60 shadow-xs"
                                  >
                                    {tech?.name}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        {/* External Action Button */}
                        {project?.url && (
                          <div className="pt-2">
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-semibold shadow-sm hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 group/btn"
                            >
                              <span>Explore Project</span>
                              <svg
                                className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>

          {/* Image Modal */}
          {selectedImage && (
            <ImagePreviewModal
              selectedImage={selectedImage}
              onClose={() => setSelectedImage(null)}
            />
          )}
        </Section>
      }
    </>
  );
}
