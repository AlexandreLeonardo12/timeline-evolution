import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-muted/40 via-background to-muted/20 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AL</span>
              </div>
              <span className="font-semibold text-foreground">
                Alexandre Leonardo
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" asChild>
                <a 
                  href="https://linkedin.com/in/alexandreleonardo-pt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a 
                  href="mailto:alexandreleonardo.pt@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {t('nav.projects')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.specialties')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t('footer.specialty.digital')}</li>
              <li>{t('footer.specialty.programs')}</li>
              <li>{t('footer.specialty.innovation')}</li>
              <li>{t('footer.specialty.architecture')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('footer.contact.title')}</h3>
            <p className="text-muted-foreground text-sm">
              {t('footer.contact.description')}
            </p>
            <Button size="sm" asChild>
              <a href="mailto:alexandreleonardo.pt@gmail.com">
                {t('footer.contact.cta')}
                <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Alexandre Leonardo. {t('footer.rights')}
          </p>
          <p className="text-muted-foreground text-xs">
            {t('footer.developed')}{' '}
            <a 
              href="https://lovable.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Lovable
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;