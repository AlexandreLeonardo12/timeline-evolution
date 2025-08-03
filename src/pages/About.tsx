import React from 'react';

import SEOHead from '@/components/SEOHead';
import Timeline from '@/components/Timeline';

// Experiências profissionais para o percurso de Alexandre Leonardo. Cada entrada
// contém o período, a organização, o cargo ocupado e uma breve descrição do
// trabalho desenvolvido. Estes dados foram sintetizados a partir do currículo
// fornecido e destinam‑se a ilustrar o percurso profissional de forma
// cronológica numa timeline vertical.
const experiences = [
  {
    period: '07/2024 – presente',
    company: 'EY',
    role: 'Senior Consultant',
    description:
      'Consultor sénior na EY, liderando iniciativas de consultoria em transformação digital e inovação desde Julho de 2024.',
  },
  {
    period: '07/2022 – 07/2024',
    company: 'Wrightia',
    role: 'Project & Program Manager',
    description:
      'Gestor de projectos e programas na Wrightia, coordenando equipas e implementando soluções digitais de Julho de 2022 a Julho de 2024.',
  },
  {
    period: '08/2019 – 07/2022',
    company: 'Smartvision',
    role: 'Business Analyst & Project Manager',
    description:
      'Analista de negócio e gestor de projectos na Smartvision, definindo requisitos e liderando iniciativas de 2019 a 2022.',
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Sobre"
        description="Conheça o percurso profissional de Alexandre Leonardo"
      />

      {/* Secção de cabeçalho e biografia */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre mim
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>
              O meu nome é Alexandre Leonardo; trabalho actualmente como consultor em transformação digital e inovação estratégica na EY. Ao longo dos últimos anos tenho apoiado organizações na modernização de processos e serviços, contribuindo para transformar modelos operacionais com soluções digitais simples, eficazes e com impacto real.
            </p>
            <p>
              Acredito que a transformação não é apenas tecnológica — é feita por pessoas, para pessoas. O meu foco está em redesenhar processos de forma inteligente, com base em dados, sistemas robustos e equipas comprometidas com a mudança. O que me move é transformar ideias em soluções concretas, ajudar equipas a trabalhar melhor e garantir que cada entrega melhora de forma tangível a vida das pessoas e o funcionamento da organização.
            </p>
          </div>
        </div>
      </div>

      {/* Secção de Experiência Profissional com timeline vertical */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
              Experiência Profissional
            </h2>
            <div className="relative pl-8 border-l-2 border-primary/30">
              {experiences.map((exp, idx) => (
                <div key={idx} className="mb-10 ml-2 relative">
                  {/* marcador circular */}
                  <span className="absolute -left-4 top-1 flex h-3 w-3 rounded-full bg-primary"></span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.period} · {exp.role}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Secção de Formação e Certificações */}
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
    </div>
  );
};

export default About;