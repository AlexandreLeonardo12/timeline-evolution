import React from 'react';

import SEOHead from '@/components/SEOHead';
import Timeline from '@/components/Timeline';
import translations from '@/lib/translations';
import { useLanguage } from '@/context/LanguageContext';

// Biographical paragraphs translated into Portuguese and English. Each array
// entry represents a paragraph. The biography can be extended as
// needed, ensuring both languages have the same number of entries.
const biography: Record<string, string[]> = {
  pt: [
    'Chamo‑me Alexandre Leonardo e sou consultor em transformação digital e inovação estratégica na EY. Nos últimos anos acompanhei organizações na modernização de processos e serviços, ajudando‑as a redesenhar modelos operacionais com soluções digitais simples, eficazes e de impacto real.',
    // Segundo parágrafo revisto para transmitir a ideia de que a transformação dos negócios
    // nasce das pessoas que operam e melhoram continuamente os processos, tirando partido
    // de sistemas inteligentes. Realça também que cada avanço envolve risco e exige
    // coragem para inovar, de forma natural e pessoal.
    'Acredito que a transformação dos negócios é feita por pessoas que, todos os dias, reinventam processos e colocam a tecnologia ao serviço de decisões mais inteligentes. Gosto de desenhar soluções que partem dos dados e se traduzem em experiências simples, sabendo que cada avanço traz consigo riscos e exige coragem para inovar.',
  ],
  en: [
    'My name is Alexandre Leonardo and I am a consultant in digital transformation and strategic innovation at EY. In recent years I have helped organisations modernise processes and services, redesigning their operating models with simple and effective digital solutions that deliver real impact.',
    // Updated second paragraph in English to mirror the Portuguese sentiment. It conveys
    // that transformation happens through people reinventing processes and using
    // technology to make smarter decisions, while acknowledging that progress
    // carries risks and requires the courage to innovate.
    'I believe business transformation happens through people who reinvent processes every day and use technology to make smarter decisions. I enjoy designing solutions that build on data and translate into simple experiences, knowing that every step forward carries risks and requires the courage to innovate.',
  ],
};

// Professional experiences with translations for role and description. The
// period and company remain language‑agnostic, while role and
// description adapt to the selected language.
const experiences = [
  {
    period: '07/2024 – presente',
    company: 'EY',
    role: { pt: 'Consultor Sénior', en: 'Senior Consultant' },
    description: {
      pt: 'Consultor sénior na EY, liderando iniciativas de consultoria em transformação digital e inovação desde Julho de 2024.',
      en: 'Senior consultant at EY, leading digital transformation and innovation initiatives since July 2024.',
    },
  },
  {
    period: '07/2022 – 07/2024',
    company: 'Wrightia',
    role: { pt: 'Gestor de Projetos e Programas', en: 'Project & Programme Manager' },
    description: {
      pt: 'Gestor de projectos e programas na Wrightia, coordenando equipas e implementando soluções digitais de Julho de 2022 a Julho de 2024.',
      en: 'Project & Programme Manager at Wrightia, coordinating teams and implementing digital solutions from July 2022 to July 2024.',
    },
  },
  {
    period: '08/2019 – 07/2022',
    company: 'Smartvision',
    role: { pt: 'Business Analyst & Project Manager', en: 'Business Analyst & Project Manager' },
    description: {
      pt: 'Analista de negócio e gestor de projectos na Smartvision, definindo requisitos e liderando iniciativas de 2019 a 2022.',
      en: 'Business analyst and project manager at Smartvision, defining requirements and leading initiatives from 2019 to 2022.',
    },
  },
];

const About: React.FC = () => {
  // Use language context to fetch translation strings specific to the About page
  const { language } = useLanguage();
  const t = translations[language].aboutPage;
  const bio = biography[language];
  // Subtitle for the education/certifications section, translated inline
  const educationSubtitle =
    language === 'en'
      ? 'Continuous learning path and professional development focused on digital transformation and strategic management'
      : 'Percurso de aprendizagem contínua e desenvolvimento profissional, com foco em transformação digital e gestão estratégica';

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={t.title} description={t.description} lang={language === 'en' ? 'en' : 'pt-PT'} />

      {/* Header and biography section */}
      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t.header}</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            {bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Experience section with vertical timeline */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-foreground">{t.experienceTitle}</h2>
            <div className="relative pl-8 border-l-2 border-primary/30">
              {experiences.map((exp, idx) => (
                <div key={idx} className="mb-10 ml-2 relative">
                  {/* Circular marker */}
                  <span className="absolute -left-4 top-1 flex h-3 w-3 rounded-full bg-primary"></span>
                  <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.period} · {exp.role[language]}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{exp.description[language]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education and Certifications section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">{t.educationTitle}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{educationSubtitle}</p>
            </div>
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
