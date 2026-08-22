import  { useState } from "react";
import { useComponyDetail } from "../../context/componyContext";
import { MarkedText } from "../ui/MarkedText";
import ImagePreviewModal from "../ui/ImagePreviewModal";

interface Certificate {
  id: string | number;
  title: string;
  description?: string;
  image: string;
}

export default function Certificates() {
  const { componyProfile } = useComponyDetail();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates: Certificate[] = componyProfile?.certificates || [];


  return (
    <section className="bg-zinc-50 py-16 dark:bg-zinc-950/10 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <MarkedText as="h2" text="Our [[Certifications]]" />
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
            Verified proof of our commitment to quality, security, and industry excellence.
          </p>
        </div>

        {/* Responsive Modern Card Grid */}
        {certificates.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl mx-auto">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[320px] bg-white dark:bg-zinc-900/90 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 p-5 shadow-xs hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-950/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 ease-out flex flex-col items-center text-center overflow-hidden"
              >
                {/* Ambient Background Radial Glow (Hover) */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-zinc-100/70 dark:from-zinc-800/20 via-transparent to-zinc-200/40 dark:to-zinc-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Certificate Frame with Blur & Expand Icon */}
                <div
                  onClick={() => setSelectedImage(cert.image)}
                  className="relative w-full h-56 bg-zinc-100/70 dark:bg-zinc-950/80 rounded-2xl p-5 flex items-center justify-center overflow-hidden border border-zinc-200/60 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors cursor-pointer"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xs dark:drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Hover Blur Overlay & Glassmorphic Icon */}
                  <div className="absolute inset-0 bg-zinc-950/40 dark:bg-zinc-950/75 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2.5">
                    <div className="w-11 h-11 rounded-2xl bg-white/90 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 shadow-xl backdrop-blur-md border border-white/50 dark:border-zinc-700/80 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
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
                    <span className="text-[10px] font-bold tracking-widest text-zinc-100 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      Preview
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="mt-5 px-1 flex-1 flex flex-col justify-between w-full z-10">
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>

                    {cert.description && (
                      <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2 font-normal">
                        {cert.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-zinc-400 dark:text-zinc-600 text-sm font-medium border border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl">
            No certificates available at this time.
          </div>
        )}
      </div>

      {selectedImage && (
        <ImagePreviewModal
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}