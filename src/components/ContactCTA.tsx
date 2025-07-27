import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageCircle, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactCTA = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {t('contact.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="group border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('contact.email.title')}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t('contact.email.description')}
                </p>
                <Button size="sm" variant="outline" asChild>
                  <a href="mailto:alexandreleonardo.pt@gmail.com">
                    {t('contact.email.cta')}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-timeline-completed/20 to-timeline-completed/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-timeline-completed/30 group-hover:to-timeline-completed/20 transition-colors">
                  <MessageCircle className="h-6 w-6 text-timeline-completed" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('contact.linkedin.title')}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t('contact.linkedin.description')}
                </p>
                <Button size="sm" variant="outline" asChild>
                  <a 
                    href="https://linkedin.com/in/alexandreleonardo-pt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {t('contact.linkedin.cta')}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-accent/30 group-hover:to-accent/20 transition-colors">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('contact.consultation.title')}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t('contact.consultation.description')}
                </p>
                <Button size="sm" variant="outline" asChild>
                  <a href="mailto:alexandreleonardo.pt@gmail.com?subject=Consultoria">
                    {t('contact.consultation.cta')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <Button size="lg" asChild>
              <a href="mailto:alexandreleonardo.pt@gmail.com?subject=Colaboração">
                {t('contact.cta')}
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;