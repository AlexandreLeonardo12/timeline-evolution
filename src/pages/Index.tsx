import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCTA from '@/components/ContactCTA';
import SEOHead from '@/components/SEOHead';
import Indicators from '@/components/Indicators';
import Journey from '@/components/Journey';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <SEOHead />
      
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link to="/about">
              <Button size="lg" className="group min-w-40">
                {t('hero.about')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg" className="min-w-40">
                {t('hero.projects')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Indicators Section */}
      <Indicators />

      {/* Journey Section */}
      <Journey />

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
};

export default Index;
