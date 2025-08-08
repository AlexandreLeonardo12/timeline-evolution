import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, Users, Award, Circle, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ContactCTA from "@/components/ContactCTA";
import SEOHead from "@/components/SEOHead";
import translations from "@/lib/translations";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Home page component
 *
 * This version uses the language context and translation definitions to
 * render all copy in either Portuguese or English. Metric and value
 * definitions come directly from the translation file, and icons are
 * selected based on the label of each metric or value. The page also
 * sets SEO meta tags dynamically and improves accessibility by
 * translating alt text and job titles.
 */
const Home: React.FC = () => {
  // Determine the current language and fetch translation strings for the
  // home page. Metrics and values arrays are defined in the translations
  // file to keep content and data together.
  const { language } = useLanguage();
  const t = translations[language].home;

  // Map translation keys to metric objects, including icons from lucide-react.
  const metrics = t.metrics.map((metric: any) => {
    let IconComponent;
    switch (metric.label) {
      case 'Anos de experiência':
      case 'Years of experience':
        IconComponent = TrendingUp;
        break;
      case 'Projetos desenvolvidos':
      case 'Projects developed':
        IconComponent = Target;
        break;
      case 'Membros de equipa liderados':
      case 'Team members led':
        IconComponent = Users;
        break;
      case 'Entidades Públicas apoiadas':
      case 'Public entities supported':
        IconComponent = Award;
        break;
      default:
        IconComponent = Circle;
    }
    return { ...metric, icon: IconComponent };
  });

  // Map translation values into structured objects with icons
  const values = t.values.map((val: any) => {
    let IconComponent;
    switch (val.title) {
      case 'Simplicidade Estratégica':
      case 'Strategic Simplicity':
        IconComponent = Circle;
        break;
      case 'Arquitetura Flexível':
      case 'Flexible Architecture':
        IconComponent = Layers;
        break;
      case 'Rigor e Agilidade':
      case 'Rigour and Agility':
        IconComponent = ShieldCheck;
        break;
      default:
        IconComponent = Circle;
    }
    return { ...val, icon: IconComponent };
  });

  return (
    <>
      {/* Dynamic SEO meta tags */}
      <SEOHead
        title={`${t.title} – Alexandre Leonardo`}
        description={t.description}
      />
      {/* Hero section */}
      <section className="min-h-screen flex items-center justify-between bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:flex lg:items-center gap-10">
          <div className="flex-1">
            <Badge className="mb-4 px-3 py-1 text-sm">{t.badge}</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              {t.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
              {t.subtitle}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-6">
              {t.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button
                  size="lg"
                  className="group bg-accent hover:bg-accent/80 text-accent-foreground"
                >
                  {t.ctaProjects}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/80 text-primary-foreground"
                >
                  {t.ctaContact}
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 relative mt-10 lg:mt-0">
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-border/20 shadow-lg">
              <img
                src="/alexandre-leonardo.jpg"
                alt={language === 'en' ? 'Photo of Alexandre Leonardo' : 'Fotografia de Alexandre Leonardo'}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-2 shadow-md">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium">{language === 'en' ? 'Program Manager' : 'Gestor de Programa'}</span>
            </div>
          </div>
        </div>
      </section>
      {/* Metrics section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-center">
            {t.metricsTitle}
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            {t.metricsSubtitle}
          </p>
          <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
            {metrics.map(({ icon: Icon, label, value, description }, index) => (
              <Card key={index} className="text-center p-6 bg-background/80">
                <CardHeader className="items-center space-y-2">
                  <Icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-3xl font-bold">{value}</CardTitle>
                  <CardDescription className="uppercase tracking-wide text-xs font-semibold">
                    {label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Values section */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-center">{t.valuesTitle}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            {t.valuesSubtitle}
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }, index) => (
              <Card key={index} className="text-left p-6 bg-background/80">
                <CardHeader className="items-start space-y-2">
                  <Icon className="h-8 w-8 text-primary" />
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Contact call-to-action section */}
      <section>
        <ContactCTA />
      </section>
    </>
  );
};

export default Home;
