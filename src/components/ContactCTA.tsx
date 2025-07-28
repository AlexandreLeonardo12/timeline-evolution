import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Calendar } from "lucide-react";

/**
 * A simple call-to-action section encouraging visitors to get in touch.
 *
 * This component displays three contact methods: email, chat (e.g. LinkedIn) and
 * meeting scheduling. It does not rely on any translation infrastructure and
 * can easily be extended with new contact channels.
 */
export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/50 to-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Interessado em colaborar?
          </h2>
          <p className="text-muted-foreground">
            Escolha a forma de contacto que melhor se adequa às suas necessidades.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* E-mail Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Mail className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">Enviar E-mail</h3>
              <p className="text-muted-foreground">
                Fale directamente comigo para discutir potenciais projectos ou parcerias.
              </p>
              <Button asChild variant="outline">
                <a href="mailto:alexandreleonardo.pt@gmail.com">Enviar email</a>
              </Button>
            </CardContent>
          </Card>
          {/* Chat Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <MessageCircle className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">Contactar pelo LinkedIn</h3>
              <p className="text-muted-foreground">
                Entre em contacto através da minha rede profissional para saber mais.
              </p>
              <Button asChild variant="outline">
                <a
                  href="https://www.linkedin.com/in/alexandre-leonardo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar LinkedIn
                </a>
              </Button>
            </CardContent>
          </Card>
          {/* Meeting Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Calendar className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">Marcar Reunião</h3>
              <p className="text-muted-foreground">
                Agende uma reunião para discutir como posso ajudar a sua organização.
              </p>
              <Button asChild variant="outline">
                <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar reunião
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
