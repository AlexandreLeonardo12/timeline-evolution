import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Code, Users, Trophy, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCTA from '@/components/ContactCTA';
import SEOHead from '@/components/SEOHead';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  const metrics = [
    { 
      value: '10+', 
      label: t('indicators.experience'), 
      icon: TrendingUp,
      description: 'Anos moldando o futuro digital',
      color: 'from-blue-600 to-purple-600'
    },
    { 
      value: '760k€+', 
      label: 'Projetos Desenvolvidos', 
      icon: Target,
      description: 'Valor em projetos executados',
      color: 'from-emerald-600 to-cyan-600'
    },
    { 
      value: '50+', 
      label: t('indicators.teams'), 
      icon: Users,
      description: 'Profissionais liderados',
      color: 'from-orange-600 to-red-600'
    },
    { 
      value: '18+', 
      label: 'Clientes Impactados', 
      icon: Trophy,
      description: 'Organizações transformadas',
      color: 'from-violet-600 to-pink-600'
    }
  ];

  const values = [
    {
      title: 'Simplicidade Estratégica',
      description: 'Simplifico processos complexos, desenhando soluções intuitivas e centradas nas pessoas.',
      icon: Target
    },
    {
      title: 'Arquitetura Flexível',
      description: 'Concebo soluções com visão de longo prazo, com impacto real e mensurável.',
      icon: Code
    },
    {
      title: 'Rigor e Agilidade',
      description: 'Integro frameworks sólidas com metodologias ágeis, ajustando à realidade de cada contexto.',
      icon: Briefcase
    }
  ];
  
  return (
    <>
      <SEOHead />
      
      {/* Hero Section */}
      <div className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  A moldar o futuro digital no projeto ReInovar da EY
                </Badge>
                
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                    Alexandre
                  </span>
                  <br />
                  <span className="text-foreground">Leonardo</span>
                </h1>
                
                <div className="space-y-2">
                  <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
                    Gestor de Programa | Transformação Digital e Inovação Estratégica
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    Tornar as experiências digitais mais simples, ágeis e centradas nas pessoas.
                  </p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button size="lg" className="group min-w-48 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all">
                    Ver Projetos
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="min-w-48 border-2 hover:bg-muted/50">
                    Entrar em contacto
                  </Button>
                </Link>
              </div>
            </div>

            {/* Professional Image */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 z-10">
                  <Card className="p-3 shadow-xl bg-background/95 backdrop-blur-sm border-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="font-semibold text-sm">Program Manager</span>
                    </div>
                  </Card>
                </div>
                
                {/* Main image container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-background/50">
                  <img 
                    src="/lovable-uploads/e6034d6b-5a32-480d-8185-a0b716f959ae.png" 
                    alt="Alexandre Leonardo" 
                    className="w-80 h-96 md:w-96 md:h-[28rem] object-cover object-center transition-transform hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Metrics Section */}
      <div className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Transformação Digital com Impacto
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Resultados mensuráveis em múltiplos sectores e organizações
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="group relative overflow-hidden p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-primary/20">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative space-y-4">
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${metric.color} shadow-lg`}>
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-bold text-foreground">
                      {metric.value}
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {metric.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.description}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Valores-Chave
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que orientam a minha abordagem à transformação digital
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20">
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
};

export default Index;
