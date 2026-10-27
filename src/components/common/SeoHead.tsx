import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  includeFaqSchema?: boolean;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords,
  includeFaqSchema = false,
}) => {
  const location = useLocation();

  useEffect(() => {
    const baseUrl = 'https://www.builderbob.in';
    const canonicalUrl = `${baseUrl}${location.pathname === '/' ? '/' : location.pathname}`;

    const fullTitle = title
      ? `${title} | ${siteConfig.name} Bengaluru`
      : siteConfig.seo.defaultTitle;
    const metaDesc = description || siteConfig.seo.defaultDescription;

    document.title = fullTitle;

    // Helper to set or create meta tags
    const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Standard meta
    setMetaTag('meta[name="description"]', 'name', 'description', metaDesc);
    if (keywords && keywords.length > 0) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords.join(', '));
    }

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', metaDesc);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);

    // Twitter
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metaDesc);
    setMetaTag('meta[name="twitter:url"]', 'name', 'twitter:url', canonicalUrl);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Dynamic JSON-LD Structured Data (BreadcrumbList + FAQPage when applicable)
    const existingScript = document.getElementById('dynamic-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    const graph: Record<string, unknown>[] = [];

    // BreadcrumbList Schema
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/`,
      },
    ];

    if (location.pathname !== '/') {
      const segments = location.pathname.split('/').filter(Boolean);
      segments.forEach((seg, index) => {
        const pathUpToSeg = '/' + segments.slice(0, index + 1).join('/');
        const readableName = seg
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: index + 2,
          name: index === segments.length - 1 && title ? title : readableName,
          item: `${baseUrl}${pathUpToSeg}`,
        });
      });
    }

    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    });

    // FAQPage Schema for Homepage & Pricing Page
    if (includeFaqSchema || location.pathname === '/' || location.pathname === '/pricing') {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: siteConfig.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    const script = document.createElement('script');
    script.id = 'dynamic-json-ld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph,
    });
    document.head.appendChild(script);
  }, [title, description, keywords, includeFaqSchema, location.pathname]);

  return null;
};
