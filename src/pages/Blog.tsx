import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../context/LanguageContext";
import translations from "../lib/translations";

/**
 * Blog page component.
 *
 * Displays a list of articles with titles and excerpts. The content
 * adapts to the selected language using the language context and
 * translation definitions. Posts are currently hard coded for demonstration
 * purposes and can be later fetched from an API or CMS.
 */
export default function Blog() {
  const { language } = useLanguage();
  const t = translations[language].blog;

  // Define a small list of blog posts with translations for title and excerpt
  const posts = [
    {
      date: "2024-05-01",
      title: {
        pt: "A importância da transformação digital",
        en: "The importance of digital transformation",
      },
      excerpt: {
        pt: "Exploramos como a transformação digital está a redefinir o panorama empresarial e porque as organizações devem abraçar esta mudança.",
        en: "We explore how digital transformation is redefining the business landscape and why organisations should embrace this change.",
      },
    },
    {
      date: "2024-06-01",
      title: {
        pt: "Frameworks ágeis para gestão de projetos",
        en: "Agile frameworks for project management",
      },
      excerpt: {
        pt: "Uma análise às principais frameworks ágeis e como podem melhorar a eficiência das equipas.",
        en: "An overview of leading agile frameworks and how they can improve team efficiency.",
      },
    },
    {
      date: "2024-07-01",
      title: {
        pt: "Tendências de inovação tecnológica",
        en: "Trends in technological innovation",
      },
      excerpt: {
        pt: "Descubra as tendências emergentes em inovação tecnológica e como preparar a sua organização para o futuro.",
        en: "Discover emerging trends in technological innovation and how to prepare your organisation for the future.",
      },
    },
  ];

  return (
    /*
     * Similar to the frameworks page, add a top padding to compensate for the
     * fixed navbar. This prevents the page heading from being overlapped on
     * scroll or page load. The bottom padding mirrors other sections for
     * consistent vertical rhythm.
     */
    <section className="min-h-screen bg-muted pt-24 pb-20">
      <div className="container mx-auto px-4 space-y-8">
        <h1 className="text-4xl font-bold text-center">{t.title}</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          {t.subtitle}
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="flex flex-col justify-between p-6 bg-background/80">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {post.title[language]}
                </CardTitle>
                <CardDescription>{new Date(post.date).toLocaleDateString(language)}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 mb-4">
                <p className="text-muted-foreground">
                  {post.excerpt[language]}
                </p>
              </CardContent>
              <Button variant="outline" className="self-start">
                {t.readMore}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}