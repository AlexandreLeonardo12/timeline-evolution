import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Calendar } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Prontos para o próximo desafio?
          </h2>
          <p className="text-muted-foreground">
            Se está a enfrentar desafios de transformação digital ou a procurar acelerar a inovação na sua organização, vamos conversar.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Email Direto */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Mail className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">Email Direto</h3>
              <p className="text-muted-foreground">
                Resposta rápida para questões específicas
              </p>
              <Button variant="outline">Enviar Email</Button>
            </CardContent>
          </Card>
          {/* LinkedIn */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Linkedin className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <p className="text-muted-foreground">
                Conecte-se para networking e atualizações profissionais
              </p>
              <Button variant="outline">Conectar</Button>
            </CardContent>
          </Card>
          {/* Consultoria */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-4">
              <Calendar className="h-8 w-8 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">Consultoria</h3>
              <p className="text-muted-foreground">
                Discussão estratégica para projetos complexos
              </p>
              <Button variant="outline">Agendar</Button>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button size="lg">Iniciar Conversa</Button>
        </div>
      </div>
    </section>
  );
}
