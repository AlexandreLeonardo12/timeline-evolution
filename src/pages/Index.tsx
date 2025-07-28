import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, Users, Award, Circle, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ContactCTA from "@/components/ContactCTA";
import SEOHead from "@/components/SEOHead";

const Home = () => {
  const metrics = [
    { icon: TrendingUp, label: "Anos de experiência", value: "10+", description: "Anos moldando o futuro digital" },
    { icon: Target, label: "Projetos desenvolvidos", value: "760k€+", description: "Valor em projetos executados" },
    { icon: Users, label: "Equipas lideradas", value: "50+", description: "Profissionais liderados" },
    { icon: Award, label: "Clientes impactados", value: "18+", description: "Organizações transformadas" },
  ];

  const values = [
    {
      icon: Circle,
      title: "Simplicidade Estratégica",
      description: "Simplifico processos complexos, desenhando soluções intuitivas e centradas nas pessoas.",
    },
    {
      icon: Layers,
      title: "Arquitetura Flexível",
      description: "Concebo soluções com visão de longo prazo, com impacto real e mensurável.",
    },
    {
      icon: ShieldCheck,
      title: "Rigor e Agilidade",
      description:
        "Integro frameworks sólidas com metodologias ágeis, ajustando à realidade de cada contexto.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Alexandre Leonardo – Gestão de Programa e Inovação"
        description="Gestor de programa especializado em transformação digital e inovação estratégica."
      />
      <section className="min-h-screen flex items-center justify-between bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:flex lg:items-center gap-10">
          <div className="flex-1">
            <Badge className="mb-4 px-3 py-1 text-sm">
              A moldar o futuro digital no projeto ReInovar da EY
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Alexandre Leonardo
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
              Gestor de Programa | Transformação Digital e Inovação Estratégica
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-6">
              Tornar as experiências digitais mais simples, ágeis e centradas nas pessoas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button size="lg" className="group">
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/#contact">
                <Button variant="outline" size="lg">
                  Entrar em contacto
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 relative mt-10 lg:mt-0">
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-border/20 shadow-lg">
              <img
                src="/alexandre-leonardo.jpg"
                alt="Alexandre Leonardo"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-2 shadow-md">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium">Program Manager</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-center">
            Transformação Digital com Impacto
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Resultados mensuráveis em múltiplos sectores e organizações
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
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-center">Valores-Chave</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Princípios que orientam a minha abordagem à transformação digital
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
      <ContactCTA />
    </>
  );
};

export default Home;
