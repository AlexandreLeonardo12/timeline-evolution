import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContactCTA from '@/components/ContactCTA';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Target, Users, Zap, CheckCircle, Download } from 'lucide-react';

const Framework = () => {
  const { t } = useLanguage();

  const frameworkPillars = [
    {
      icon: Target,
      title: t('framework.strategy.title'),
      description: t('framework.strategy.description'),
      color: 'text-blue-600 dark:text-blue-400',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Users,
      title: t('framework.people.title'),
      description: t('framework.people.description'),
      color: 'text-green-600 dark:text-green-400',
      gradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: Zap,
      title: t('framework.execution.title'),
      description: t('framework.execution.description'),
      color: 'text-violet-600 dark:text-violet-400',
      gradient: 'from-violet-500/10 to-purple-500/10'
    }
  ];

  const benefits = [
    t('framework.benefits.alignment'),
    t('framework.benefits.efficiency'),
    t('framework.benefits.innovation'),
    t('framework.benefits.scalability'),
    t('framework.benefits.measurement'),
    t('framework.benefits.culture')
  ];

  return (
    <>
      <SEOHead 
        title={`${t('framework.title')} - Alexandre Leonardo`}
        description={t('framework.description')}
      />
      
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="mb-4">
              {t('framework.badge')}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              {t('framework.hero.title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {t('framework.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="group">
                {t('framework.cta.download')}
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button variant="outline" size="lg">
                {t('framework.cta.learn')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Framework Overview */}
      <div className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('framework.overview.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('framework.overview.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {frameworkPillars.map((pillar, index) => (
                <Card key={index} className={`relative p-8 bg-gradient-to-br ${pillar.gradient} border-0 hover:shadow-xl transition-all duration-500 hover:scale-105 group`}>
                  <div className="space-y-6">
                    <div className="flex justify-center">
                      <div className="p-4 rounded-full bg-background/80 group-hover:bg-background transition-colors">
                        <pillar.icon className={`h-8 w-8 ${pillar.color}`} />
                      </div>
                    </div>
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('framework.benefits.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('framework.benefits.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Implementation */}
      <div className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('framework.implementation.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('framework.implementation.description')}
            </p>
            
            <Button size="lg" asChild>
              <a href="mailto:alexandreleonardo.pt@gmail.com?subject=Framework Implementation">
                {t('framework.implementation.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <ContactCTA />
    </>
  );
};

export default Framework;