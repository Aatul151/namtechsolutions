import { CSSProperties } from 'react';

interface AchievementCardProps {
  title: string;
  certificate_image: string;
  issuing_organization: string;
  organization_logo?: string;
  className?: string;
  style?: CSSProperties;
}

export function AchievementCard({
  title,
  certificate_image,
  issuing_organization,
  organization_logo,
  className = '',
  style,
}: AchievementCardProps) {
  return (
    <div
      className={`group relative bg-bg-card border border-border rounded-lg p-3 hover:shadow-soft hover:border-primary/20 transition-all duration-300 ${className}`}
      style={style}
    >
      {/* Certificate Image */}
      <div className="flex items-center justify-center mb-2">
        {organization_logo ? (
          <img
            src={organization_logo}
            alt={issuing_organization}
            className="h-8 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
          />
        ) : (
          <img
            src={certificate_image}
            alt={title}
            className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          />
        )}
      </div>

      {/* Title */}
      <h4 className="text-xs font-semibold text-text-primary mb-1 text-center line-clamp-1">
        {title}
      </h4>

      {/* Issuing Organization */}
      <p className="text-[10px] text-text-secondary text-center line-clamp-1">
        {issuing_organization}
      </p>
    </div>
  );
}
