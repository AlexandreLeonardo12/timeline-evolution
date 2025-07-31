import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";

/**
 * Contact page with a simple form.
 *
 * Provides inputs for name, email and message. On submission it sends
 * the data via a POST request to FormSubmit (https://formsubmit.co) which
 * forwards the message to the configured email without exposing the
 * address on the site. A status message is displayed after submission.
 */
const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/alexandreleonardo3746@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        setStatus("Mensagem enviada com sucesso! 😊");
        form.reset();
      } else {
        setStatus("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.");
      }
    } catch (err) {
      setStatus("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <div className="min-h-screen bg-background py-16">
      <SEOHead
        title="Contacto – Alexandre Leonardo"
        description="Formulário de contacto"
      />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-foreground">
            Contacto
          </h1>
          <p className="text-muted-foreground text-center mb-6">
            Preencha o formulário abaixo para entrar em contacto. Responderei o mais
            rápido possível.
          </p>
          <Card className="p-6 bg-background/80 shadow">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1 text-foreground"
                    htmlFor="name"
                  >
                    Nome
                  </label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1 text-foreground"
                    htmlFor="email"
                  >
                    E‑mail
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1 text-foreground"
                    htmlFor="message"
                  >
                    Mensagem
                  </label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
                {status && (
                  <p className="text-sm text-green-600" role="status">
                    {status}
                  </p>
                )}
                <Button type="submit" className="mt-4">
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;