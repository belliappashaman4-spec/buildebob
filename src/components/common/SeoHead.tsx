import { useEffect } from 'react';
import { siteConfig } from '../../config/site';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

export const SeoHead: React.FC<SeoHeadProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | ${siteConfig.name} Bengaluru` 
      : siteConfig.seo.defaultTitle;
    document.title = fullTitle;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || siteConfig.seo.defaultDescription);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords.join(', '));
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, keywords]);

  return null;
};
