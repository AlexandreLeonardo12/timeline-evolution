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
  /**
   * Optional language code for the page. Defaults to "pt-PT". When provided,
   * it updates the <meta name="language"> tag to reflect the current
   * language (e.g. "en" for English). This helps search engines serve
   * the correct language version of the page.
   */
  lang?: string;
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
  lang = "pt-PT",
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
    // The language meta tag is dynamic based on the lang prop. If no lang
    // is provided, default to pt-PT. This helps Google and other search
    // engines serve the appropriate language version.
    updateMetaTag("language", lang);
    updateMetaTag("revisit-after", "7 days");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:image", ogImage, true);

    // Set canonical link. If a canonical tag already exists, update its href,
    // otherwise create one. Canonical tags help a página principal a
    // consolidar sinais de indexação quando existem múltiplas URLs que podem
    // servir o mesmo conteúdo.
    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", currentUrl);

    // Inject structured data (JSON-LD) for the Person schema. This data
    // descreve o proprietário do site e ajuda os motores de busca a
    // entender a entidade por detrás da página. Caso já exista um script
    // JSON‑LD, ele será actualizado; caso contrário, será criado.
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Alexandre Leonardo",
      "url": "https://www.alexandreleonardo.pt/",
      "jobTitle": "Gestor de Programa",
      "worksFor": {
        "@type": "Organization",
        "name": "EY"
      }
    };
    let ldScript = document.querySelector(
      'script[type="application/ld+json"]#person-schema',
    );
    if (!ldScript) {
      ldScript = document.createElement("script");
      ldScript.setAttribute("type", "application/ld+json");
      ldScript.setAttribute("id", "person-schema");
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify(schemaData);
  }, [title, description, keywords, ogImage, currentUrl]);

  return null;
}
