import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Code, Lightbulb, Rocket } from 'lucide-react';

const Journey = () => {
  const { t } = useLanguage();

  const journeySteps = [
    {
      icon: Code,
      title: t('journey.technical.title'),
      description: t('journey.technical.description'),
      gradient: 'from-blue-500/10 to-cyan-500/10',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Lightbulb,
      title: t('journey.strategic.title'),
      description: t('journey.strategic.description'),
      gradient: 'from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-600 dark:text-amber-400'
    },
    {
      icon: Rocket,
      title: t('journey.impact.title'),
      description: t('journey.impact.description'),
      gradient: 'from-violet-500/10 to-purple-500/10',
      iconColor: 'text-violet-600 dark:text-violet-400'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('journey.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('journey.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <Card key={index} className={`relative p-8 bg-gradient-to-br ${step.gradient} border-0 hover:shadow-xl transition-all duration-500 hover:scale-105 group`}>
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 rounded-full bg-background/80 group-hover:bg-background transition-colors">
                    <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                  </div>
                </div>
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Connection line (except for last item) */}
              {index < journeySteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;