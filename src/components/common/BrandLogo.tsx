import React from 'react';
import { siteConfig } from '../../config/site';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'icon';
  className?: string;
  imgClassName?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  className = '',
  imgClassName = 'h-9 w-auto',
  showTagline = true,
}) => {
  if (variant === 'icon') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <img
          src="/logo-icon.png"
          alt="BuilderBob Logo Icon"
          className={imgClassName || "w-9 h-9 rounded-xl shadow-md"}
        />
      </div>
    );
  }

  const logoSrc = variant === 'dark' ? '/logo-dark.png' : '/logo-light.png';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoSrc}
        alt={`${siteConfig.name} — ${siteConfig.tagline}`}
        className={`${imgClassName} object-contain transition-transform group-hover:scale-[1.02]`}
      />
    </div>
  );
};
