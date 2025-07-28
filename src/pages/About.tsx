import React from 'react';

/**
 * About page
 *
 * Provides a detailed biography of Alexandre Leonardo, outlines his core
 * values and displays a timeline of his certifications and training.
 * At the end of the page a call‑to‑action invites visitors to explore
 * further projects or get in touch. This page is intentionally rich in
 * content to give visitors a deep understanding of Alexandre's
 * professional background.
 */
import Timeline from '@/components/Timeline';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre mim
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              O meu nome é Alexandre Leonardo, atualmente trabalho como consultor em transformação digital e inovação estratégica na EY. Ao longo dos últimos anos, tenho trabalhado com organizações que enfrentam o desafio de modernizar os seus processos e serviços, contribuindo para transformar modelos operacionais com soluções digitais simples, eficazes e com impacto real.
            </p>
            
            <p>
              Acredito que a transformação não é apenas tecnológica — é feita por pessoas, para pessoas. O meu foco está em redesenhar processos de forma inteligente, com base em dados, sistemas robustos e equipas comprometidas com a mudança. Isso implica compreender a complexidade de cada organização, saber onde intervir e ter coragem para assumir que gerar valor sustentável envolve risco - mas que o risco faz parte de qualquer evolução positiva. O que me move é transformar ideias em soluções concretas, ajudar equipas a trabalhar melhor, e garantir que cada entrega melhora de forma tangível a vida das pessoas e o funcionamento da organização.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              Valores-Chave
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Princípios que orientam a minha abordagem à transformação digital
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-timeline-primary" />
                    <h3 className="text-xl font-semibold text-foreground">
                      Simplicidade Estratégica
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Simplifico processos complexos, desenhando soluções intuitivas e centradas nas pessoas - com planos concretos e garantindo que as entregas são úteis e dentro dos prazos.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-timeline-completed" />
                    <h3 className="text-xl font-semibold text-foreground">
                      Arquitetura de negócio flexível
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Concebo soluções com visão de longo prazo, com impacto real e mensurável no dia a dia - respeitando as especificidades do negócio mas adaptáveis ao crescimento e a inovação contínua.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <h3 className="text-xl font-semibold text-foreground">
                      Equilíbrio entre rigor e agilidade
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Compreendo rapidamente estruturas organizacionais, alinho stakeholders e antecipo obstáculos antes de se tornarem problemas. Integro frameworks sólidas com metodologias ágeis, ajustando a abordagem à maturidade e realidade de cada contexto.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Formação e Certificações
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Percurso de aprendizagem contínua e desenvolvimento profissional, com foco em transformação digital e gestão estratégica
              </p>
            </div>
            
            <Timeline />
          </div>
        </div>
      </div>

      {/*
        Call-to-Action Section

        This section encourages visitors to get in touch or explore further after
        they finish reading the about page. It is intentionally placed only on
        the About page to avoid repetition across the site. Feel free to
        customise the text or link destination to better fit future content.
      */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Prontos para o próximo desafio?
            </h2>
            <p className="text-muted-foreground mb-6">
              Estou sempre à procura de novos projectos e colaborações.
              Vamos conversar sobre como posso ajudar a sua organização a evoluir.
            </p>
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Ver Projetos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;