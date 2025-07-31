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

      {/* Experiência Profissional */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              Experiência Profissional
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Experiência 1 */}
              <Card className="p-6 bg-background/80">
                <CardContent>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Projetos Estratégicos IRN – PRR
                  </h3>
                  <p className="text-muted-foreground mb-1">
                    <strong>Função:</strong> Product Owner &amp; Gestor de Programa | EY
                  </p>
                  <p className="text-muted-foreground mb-1">
                    <strong>Duração:</strong> 2024–presente
                  </p>
                  <p className="text-muted-foreground">
                    Gestão integrada de múltiplos projetos estratégicos do Registo Comercial,
                    supervisionando uma equipa multidisciplinar e alinhando expectativas de
                    stakeholders no âmbito do Plano de Recuperação e Resiliência.
                  </p>
                </CardContent>
              </Card>
              {/* Experiência 2 */}
              <Card className="p-6 bg-background/80">
                <CardContent>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Projetos Estratégicos Registo Comercial
                  </h3>
                  <p className="text-muted-foreground mb-1">
                    <strong>Função:</strong> Gestor de Projetos | Wrightia
                  </p>
                  <p className="text-muted-foreground mb-1">
                    <strong>Duração:</strong> 2022–2024
                  </p>
                  <p className="text-muted-foreground">
                    Gestão integral do ciclo de vida de projetos do Registo Comercial,
                    coordenando 36 elementos e liderando a implementação da plataforma
                    Empresa Online 2.0 (EOL 2.0) com foco na digitalização e na simplificação
                    dos processos.
                  </p>
                </CardContent>
              </Card>
              {/* Experiência 3 */}
              <Card className="p-6 bg-background/80">
                <CardContent>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Observatório de Transformação Digital – MunLab
                  </h3>
                  <p className="text-muted-foreground mb-1">
                    <strong>Função:</strong> Business Development Manager | SmartVision
                  </p>
                  <p className="text-muted-foreground mb-1">
                    <strong>Duração:</strong> 2019–2022
                  </p>
                  <p className="text-muted-foreground">
                    Liderança de um projeto de transformação digital de 150&nbsp;000 € para a
                    Comunidade Intermunicipal do Alentejo Central e municípios associados,
                    envolvendo análise de requisitos, gestão orçamental e implementação de
                    soluções de modernização administrativa.
                  </p>
                </CardContent>
              </Card>
              {/* Experiência 4 */}
              <Card className="p-6 bg-background/80">
                <CardContent>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Modernização Administrativa – Nisa e Monforte
                  </h3>
                  <p className="text-muted-foreground mb-1">
                    <strong>Função:</strong> Consultor de Modernização | SmartVision
                  </p>
                  <p className="text-muted-foreground mb-1">
                    <strong>Duração:</strong> 2021–2022
                  </p>
                  <p className="text-muted-foreground">
                    Apoio técnico e funcional à modernização administrativa destes municípios,
                    com foco na reorganização interna, transição digital e implementação de
                    novos modelos de atendimento.
                  </p>
                </CardContent>
              </Card>
              {/* Experiência 5 */}
              <Card className="p-6 bg-background/80">
                <CardContent>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Práticas de Atendimento – CIMAC (13 Municípios)
                  </h3>
                  <p className="text-muted-foreground mb-1">
                    <strong>Função:</strong> Business Development Manager | SmartVision
                  </p>
                  <p className="text-muted-foreground mb-1">
                    <strong>Duração:</strong> 2019–2022
                  </p>
                  <p className="text-muted-foreground">
                    Implementação de práticas de atendimento presenciais e serviços online em
                    13 municípios da CIMAC, uniformizando processos e modernizando o
                    relacionamento com os munícipes.
                  </p>
                </CardContent>
              </Card>
              {/* Experiência 6 */}
              <Card className="p-6 bg-background/80">
                <CardContent>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Atendimento Multicanal – Lajes do Pico
                  </h3>
                  <p className="text-muted-foreground mb-1">
                    <strong>Função:</strong> Consultor &amp; Gestor de Projeto | SmartVision
                  </p>
                  <p className="text-muted-foreground mb-1">
                    <strong>Duração:</strong> 2020–2022
                  </p>
                  <p className="text-muted-foreground">
                    Desenvolvimento e implementação de um modelo de atendimento multicanal
                    adaptado às necessidades locais no projeto “Lajes do Pico +Perto dos
                    Munícipes”.
                  </p>
                </CardContent>
              </Card>
              {/* Experiência 7 */}
              <Card className="p-6 bg-background/80">
                <CardContent>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Transformação Digital – Madalena do Pico
                  </h3>
                  <p className="text-muted-foreground mb-1">
                    <strong>Função:</strong> Consultor &amp; Gestor de Projeto | SmartVision
                  </p>
                  <p className="text-muted-foreground mb-1">
                    <strong>Duração:</strong> 2020–2022
                  </p>
                  <p className="text-muted-foreground">
                    Transformação digital dos serviços municipais, com planeamento e
                    monitorização da execução, assegurando a disponibilização online de
                    serviços e a modernização do atendimento.
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