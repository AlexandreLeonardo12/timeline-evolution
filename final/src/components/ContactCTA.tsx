import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../lib/translations";

export default function ContactCTA() {
  const { language } = useLanguage();
  const t = translations[language].home;
  return (
    <section className="py-20 bg-muted" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{t.contactTitle}</h2>
          <p className="text-muted-foreground">{t.contactSubtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Formulário de contacto */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Mail className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">
                {language === 'pt' ? 'Contacto' : 'Contact'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'pt'
                  ? 'Envie-me uma mensagem através do formulário'
                  : 'Send me a message via the form'}
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">
                  {language === 'pt' ? 'Formulário' : 'Form'}
                </Link>
              </Button>
            </CardContent>
          </Card>
          {/* LinkedIn card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Linkedin className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <p className="text-muted-foreground">{t.contactLinkedInDesc}</p>
              <Button variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/alexandre-leonardo-976830151"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.contactLinkedInCTA}
                </a>
              </Button>
            </CardContent>
          </Card>
          {/* Consulting card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Calendar className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">
                {language === 'pt' ? 'Consultoria' : 'Consulting'}
              </h3>
              <p className="text-muted-foreground">{t.contactConsultingDesc}</p>
              <Button variant="outline" asChild>
                <a
                  href="https://calendly.com/alexandreleonardo3746"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.contactConsultingCTA}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
        {/* Removed the bottom CTA button as contact options above serve as entry points */}
      </div>
    </section>
  );
}
