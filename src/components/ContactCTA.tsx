import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Calendar } from "lucide-react";
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
          {/* Email card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Mail className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">Email Direto</h3>
              <p className="text-muted-foreground">{t.contactEmailDesc}</p>
              <Button variant="outline">{t.contactEmailCTA}</Button>
            </CardContent>
          </Card>
          {/* LinkedIn card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Linkedin className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <p className="text-muted-foreground">{t.contactLinkedInDesc}</p>
              <Button variant="outline">{t.contactLinkedInCTA}</Button>
            </CardContent>
          </Card>
          {/* Consulting card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Calendar className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">Consultoria</h3>
              <p className="text-muted-foreground">{t.contactConsultingDesc}</p>
              <Button variant="outline">{t.contactConsultingCTA}</Button>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button size="lg">{t.contactCTA}</Button>
        </div>
      </div>
    </section>
  );
}
