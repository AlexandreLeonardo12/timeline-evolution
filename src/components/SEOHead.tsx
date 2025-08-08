import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * SEOHead injects basic meta tags into the document head for search engine
 * optimisation. It updates the document title and sets Open Graph tags so
 * links shared on social platforms provide useful context.
 */
export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const defaultTitle =
  "Alexandre Leonardo – Transformação Digital & Inovação Estratégica";
const defaultDescription =
  "Especialista em transformação digital e inovação estratégica. Criando soluções digitais simples, eficazes e com impacto real para organizações modernas.";
const defaultKeywords =
  "transformação digital, inovação estratégica, gestão de programas, consultoria, EY, Alexandre Leonardo";
const defaultOgImage = "/placeholder.svg";

export default function SEOHead({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  ogImage = defaultOgImage,
}: SEOHeadProps) {
  const location = useLocation();
  const currentUrl = `https://www.alexandreleonardo.pt${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to update or create meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      property = false,
    ) => {
      const attribute = property ? "property" : "name";
      let tag = document.querySelector(`meta[${attribute}='${name}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Alexandre Leonardo");
    updateMetaTag("robots", "index, follow");
    updateMetaTag("language", "pt-PT");
    updateMetaTag("revisit-after", "7 days");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:image", ogImage, true);
  }, [title, description, keywords, ogImage, currentUrl]);

  return null;
}
