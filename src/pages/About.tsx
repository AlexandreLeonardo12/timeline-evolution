import React from 'react';
import SEOHead from '@/components/SEOHead';
import Timeline from '@/components/Timeline';
import { useLanguage } from '../context/LanguageContext';

// Define biographical paragraphs in both Portuguese and English.
const biography = {
  pt: [
    'O meu nome é Alexandre Leonardo; trabalho actualmente como consultor em transformação digital e inovação estratégica na EY. Ao longo dos últimos anos tenho apoiado organizações na modernização de processos e serviços, contribuindo para transformar modelos operacionais com soluções digitais simples, eficazes e com impacto real.',
    'Acredito que a transformação não é apenas tecnológica — é feita por pessoas, para pessoas. O meu foco está em redesenhar processos de forma inteligente, com base em dados, sistemas robustos e equipas comprometidas com a mudança. O que me move é transformar ideias em soluções concretas, ajudar equipas a trabalhar melhor e garantir que cada entrega melhora de forma tangível a vida das pessoas e o funcionamento da organização.',
  ],
  en: [
    'My name is Alexandre Leonardo; I currently work as a consultant in digital transformation and strategic innovation at EY. Over the last years I have been supporting organisations in modernising processes and services, helping to transform operating models with simple, effective solutions that have a real impact.',
    'I believe that transformation is not only technological — it is done by people, for people. My focus is on intelligently redesigning processes based on data, robust systems and teams committed to change. What drives me is turning ideas into concrete solutions, helping teams work better and ensuring that each delivery tangibly improves people’s lives and the organisation’s operations.',
  ],
};

// Experiences with translations for role and description.
const experiences = [
  {
    period: '2023 – presente',
    company: 'IRN PRR (EY)',
    role: { pt: 'Gestor de Projetos e Programas', en: 'Project & Program Manager' },
    description: {
      pt: 'Liderança do programa de modernização do Registo e Notariado no âmbito do PRR, actuando como Product Owner e gestor de programa na EY.',
      en: 'Leading the modernization programme for the Registry and Notary under the PRR, acting as Product Owner and program manager at EY.',
    },
  },
  {
    period: '2022 – 2023',
    company: 'Empresa Online 2.0',
    role: { pt: 'Gestor de Projecto (Wrightia/EY)', en: 'Project Manager (Wrightia/EY)' },
    description: {
      pt: 'Gestão do projecto EOL 2.0 para digitalizar o ciclo de vida das empresas, coordenando equipas multidisciplinares e garantindo entrega contínua.',
      en: 'Managing the EOL 2.0 project to digitise the company lifecycle, coordinating multidisciplinary teams and ensuring continuous delivery.',
    },
  },
  {
    period: '2021 – 2022',
    company: 'MunLab / CIM Algarve',
    role: { pt: 'Consultor de Transformação Digital', en: 'Digital Transformation Consultant' },
    description: {
      pt: 'Definição de estratégia e implementação de laboratório municipal de inovação, promovendo a adopção de soluções digitais nos municípios do Algarve.',
      en: 'Defined strategy and implemented a municipal innovation lab, promoting the adoption of digital solutions in Algarve municipalities.',
    },
  },
  {
    period: '2020 – 2021',
    company: 'Municípios de Nisa & Monforte',
    role: { pt: 'Gestor de Projecto', en: 'Project Manager' },
    description: {
      pt: 'Condução de iniciativas de modernização administrativa e implementação de novos modelos de atendimento.',
      en: 'Led administrative modernization initiatives and implemented new service models.',
    },
  },
  {
    period: '2019 – 2020',
    company: 'CIMAC',
    role: { pt: 'Consultor de Inovação', en: 'Innovation Consultant' },
    description: {
      pt: 'Apoio à definição de arquitectura tecnológica e roadmap de transformação digital para os municípios da Comunidade Intermunicipal do Alentejo Central.',
      en: 'Supported the definition of technology architecture and digital transformation roadmap for municipalities of the Central Alentejo Intermunicipal Community.',
    },
  },
  {
    period: '2018 – 2019',
    company: 'Lajes do Pico',
    role: { pt: 'Consultor', en: 'Consultant' },
    description: {
      pt: 'Coordenação da modernização dos serviços municipais, incluindo a introdução de plataformas de atendimento online.',
      en: 'Coordinated modernization of municipal services, including introduction of online service platforms.',
    },
  },
  {
    period: '2017 – 2018',
    company: 'Madalena do Pico',
    role: { pt: 'Consultor', en: 'Consultant' },
    description: {
      pt: 'Desenvolvimento e implementação de soluções de gestão urbana e melhoria da relação com o munícipe.',
      en: 'Developed and implemented urban management solutions and improved citizen relationships.',
    },
  },
];

const About: React.FC = () => {
  const { language } = useLanguage();
  const bioParagraphs = biography[language];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={language === 'pt' ? 'Sobre' : 'About'}
        description={
          language === 'pt'
            ? 'Conheça o percurso profissional de Alexandre Leonardo'
            : 'Learn about the professional journey of Alexandre Leonardo'
        }
      />

      {/* Header and biography section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {language === 'pt' ? 'Sobre mim' : 'About me'}
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            {bioParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Professional Experience section with vertical timeline */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
              {language === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
            </h2>
            <div className="relative pl-8 border-l-2 border-primary/30">
              {experiences.map((exp, idx) => (
                <div key={idx} className="mb-10 ml-2 relative">
                  {/* circular marker */}
                  <span className="absolute -left-4 top-1 flex h-3 w-3 rounded-full bg-primary"></span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.period} · {exp.role[language]}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {exp.description[language]}
                  </p>
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
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                {language === 'pt' ? 'Formação e Certificações' : 'Education and Certifications'}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {language === 'pt'
                  ? 'Percurso de aprendizagem contínua e desenvolvimento profissional, com foco em transformação digital e gestão estratégica'
                  : 'A journey of continuous learning and professional development, focused on digital transformation and strategic management'}
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
