import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Users, Target, Clock, Award } from 'lucide-react';

const Indicators = () => {
  const { t } = useLanguage();

  const indicators = [
    {
      icon: Target,
      value: '15+',
      label: t('indicators.projects'),
      color: 'text-primary'
    },
    {
      icon: Users,
      value: '50+',
      label: t('indicators.teams'),
      color: 'text-accent'
    },
    {
      icon: Clock,
      value: '10+',
      label: t('indicators.experience'),
      color: 'text-primary'
    },
    {
      icon: Award,
      value: '8+',
      label: t('indicators.certifications'),
      color: 'text-accent'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center space-y-3">
                <div className={`p-3 rounded-full bg-gradient-to-br from-primary/10 to-accent/10`}>
                  <indicator.icon className={`h-6 w-6 ${indicator.color}`} />
                </div>
                <div className="space-y-1">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {indicator.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {indicator.label}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Indicators;