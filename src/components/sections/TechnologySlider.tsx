// Dummy data - replace with actual data later
// Format: { name: 'Technology Name', logo: '/path/to/logo.png' }
import logo from '../../assets/logo/logo.png';
const technologies = [
  { name: 'React', logo: logo },
  { name: 'Vue.js', logo: logo },
  { name: 'Angular', logo: logo },
  { name: 'Node.js', logo: logo },
  { name: 'TypeScript', logo: logo },
  { name: 'Python', logo: logo },
  { name: 'Java', logo: logo },
  { name: 'AWS', logo: logo },
  { name: 'Docker', logo: logo },
  { name: 'Kubernetes', logo: logo },
  { name: 'MongoDB', logo: logo },
  { name: 'PostgreSQL', logo: logo },
  { name: 'GraphQL', logo: logo },
  { name: 'Flutter', logo: logo },
  { name: 'React Native', logo: logo },
];

export function TechnologySlider() {
  // Duplicate the array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section className="w-full py-4 md:py-16 lg:py-20 bg-bg-main border-y border-border/30 overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="w-full relative overflow-hidden py-4 md:py-8">
        {/* Slider Track */}
        <div className="flex animate-scroll gap-4 md:gap-8 lg:gap-12 items-center">
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center justify-center gap-2 md:gap-4 flex-shrink-0 group px-2 md:px-6"
            >
              {/* Logo Container with enhanced styling */}
              <div className="relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Main logo container */}
                <div className="relative w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl md:rounded-2xl bg-bg-card border-2 border-border/50 flex items-center justify-center group-hover:border-primary/60 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 p-2 md:p-4 backdrop-blur-sm">
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-secondary/10 transition-all duration-500"></div>

                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="relative z-10 w-full h-full object-contain filter group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/80x80/6366f1/ffffff?text=${tech.name.charAt(0)}`;
                    }}
                  />
                </div>
              </div>

              {/* Tech Name with enhanced styling */}
              <div className="relative">
                <span className="text-xs md:text-sm lg:text-base font-semibold text-text-secondary group-hover:text-primary transition-all duration-300 text-center whitespace-nowrap relative z-10">
                  {tech.name}
                </span>
                {/* Underline effect on hover */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Gradient Overlays - Hidden on mobile */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-bg-main via-bg-main to-transparent z-20 pointer-events-none"></div>
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-bg-main via-bg-main to-transparent z-20 pointer-events-none"></div>
        
        {/* Shine effect overlays - Hidden on mobile */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white/10 dark:from-white/5 to-transparent z-15 pointer-events-none"></div>
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/10 dark:from-white/5 to-transparent z-15 pointer-events-none"></div>
      </div>

      {/* Enhanced CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: fit-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        /* Smooth fade-in for items */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group {
          animation: fadeInUp 0.6s ease-out backwards;
        }
      `}</style>
    </section>
  );
}
