import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title = "Alexandre Leonardo - Transformação Digital & Inovação Estratégica",
  description = "Especialista em transformação digital e inovação estratégica na EY. Criando soluções digitais simples, eficazes e com impacto real para organizações modernas.",
  keywords = "transformação digital, inovação estratégica, gestão de programas, consultoria digital, EY, Alexandre Leonardo",
  ogImage = "/placeholder.svg"
}: SEOHeadProps) => {
  const location = useLocation();
  const currentUrl = `https://alexandreleonardo.pt${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Alexandre Leonardo');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'pt-PT');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'Alexandre Leonardo', true);
    updateMetaTag('og:locale', 'pt_PT', true);

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

  }, [title, description, keywords, ogImage, currentUrl]);

  return null;
};

export default SEOHead;