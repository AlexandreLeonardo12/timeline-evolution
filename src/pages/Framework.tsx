import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { useLanguage } from "../context/LanguageContext";
import translations from "../lib/translations";

/**
 * Framework page component.
 *
 * Presents a set of recognised frameworks used in digital transformation
 * and programme management. The content adapts based on the selected
 * language. Each framework card includes a title and brief description.
 */
export default function Framework() {
  const { language } = useLanguage();
  const t = translations[language].framework;

  // List of frameworks with translations for title and description
  const frameworks = [
    {
      title: { pt: "SAFe (Scaled Agile Framework)", en: "SAFe (Scaled Agile Framework)" },
      description: {
        pt: "Integra práticas ágeis e lean para transformação empresarial.",
        en: "Integrates lean and agile practices for enterprise transformation.",
      },
    },
    {
      title: { pt: "TOGAF", en: "TOGAF" },
      description: {
        pt: "Framework de arquitetura empresarial líder mundial.",
        en: "Leading enterprise architecture framework.",
      },
    },
    {
      title: { pt: "ITIL", en: "ITIL" },
      description: {
        pt: "Melhores práticas para gestão de serviços de TI.",
        en: "Best practices for IT service management.",
      },
    },
    {
      title: { pt: "COBIT", en: "COBIT" },
      description: {
        pt: "Governança e gestão de TI orientada a processos.",
        en: "Process‑oriented IT governance and management.",
      },
    },
  ];

  return (
    /*
     * Apply a generous top padding to offset the fixed navigation bar. Without
     * this margin the first heading can be obscured on small viewports. The
     * container uses the same horizontal padding and spacing as other pages
     * for consistency.
     */
    <section className="min-h-screen bg-muted pt-24 pb-20">
      <div className="container mx-auto px-4 space-y-8">
        <h1 className="text-4xl font-bold text-center">{t.title}</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          {t.subtitle}
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {frameworks.map((fw, index) => (
            <Card key={index} className="p-6 bg-background/80">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {fw.title[language]}
                </CardTitle>
                <CardDescription>{/* reserved for future metadata */}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {fw.description[language]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}