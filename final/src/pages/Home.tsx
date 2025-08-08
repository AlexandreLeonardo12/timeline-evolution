import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BarChart3, Briefcase, User, Lightbulb, Users, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ContactCTA from "@/components/ContactCTA";
import SEOHead from "@/components/SEOHead";

const Home = () => {
  const metrics = [
    { icon: BarChart3, label: "Anos de experiência", value: "10+" },
    { icon: Briefcase, label: "Projetos concluídos", value: "40+" },
    { icon: User, label: "Clientes satisfeitos", value: "20+" },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      // Ajustado para primeira pessoa do singular
      description: "Desenvolvo soluções criativas e eficazes para desafios complexos.",
    },
    {
      icon: Users,
      title: "Colaboração",
      // Ajustado para primeira pessoa do singular
      description: "Trabalho lado a lado com os clientes para garantir sucesso conjunto.",
    },
    {
      icon: Rocket,
      title: "Impacto",
      // Ajustado para primeira pessoa do singular
      description: "Foco‑me em resultados que geram valor real e mensurável.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Alexandre Leonardo – Gestão de Programa e Inovação"
        description="Gestor de programa especializado em transformação digital e inovação estratégica."
      />
      <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
        <div className="container mx-auto px-4 py-20 text-center space-y-8 z-10">
          <Badge className="mx-auto px-3 py-1 text-sm">
            Transformação digital e inovação estratégica
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Transformo ideias em resultados concretos
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ajudo organizações e líderes a desenhar, implementar e gerir programas de
            transformação digital com foco em pessoas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button size="lg" className="group">
                Sobre mim
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">
                Ver Projetos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {metrics.map(({ icon: Icon, label, value }, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader className="items-center space-y-2">
                  <Icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-3xl font-bold">{value}</CardTitle>
                  <CardDescription>{label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-center">Valores que me guiam</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader className="items-center space-y-2">
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

      <ContactCTA />
    </>
  );
};

export default Home;
