import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/lib/translations";
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

  // Access the current language outside of event handlers so it can be
  // referenced safely. Declaring this before handleSubmit avoids
  // temporal dead zone issues when the variable is used inside the
  // async handler.
  const { language } = useLanguage();
  const t = translations[language].contactPage;

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
        // Use translated success message based on current language
        setStatus(translations[language].contactPage.statusSuccess);
        form.reset();
      } else {
        // Use translated error message based on current language
        setStatus(translations[language].contactPage.statusError);
      }
    } catch (err) {
      // Use translated error message based on current language in case of exception
      setStatus(translations[language].contactPage.statusError);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Use SEOHead with dynamic language and translated title/description */}
      <SEOHead
        title={`${t.title} – Alexandre Leonardo`}
        description={t.description}
        lang={language === 'en' ? 'en' : 'pt-PT'}
      />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-foreground">
            {t.formTitle}
          </h1>
          <p className="text-muted-foreground text-center mb-6">
            {t.description}
          </p>
          <Card className="p-6 bg-background/80 shadow">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1 text-foreground"
                    htmlFor="name"
                  >
                    {t.nameLabel}
                  </label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1 text-foreground"
                    htmlFor="email"
                  >
                    {t.emailLabel}
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1 text-foreground"
                    htmlFor="message"
                  >
                    {t.messageLabel}
                  </label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
                {status && (
                  <p className="text-sm text-green-600" role="status">
                    {status}
                  </p>
                )}
                <Button type="submit" className="mt-4">
                  {t.sendButton}
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