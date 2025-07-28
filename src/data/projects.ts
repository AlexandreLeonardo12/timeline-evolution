/*
 * Project data definitions for the portfolio website.
 *
 * This file centralises all project metadata used by both the projects
 * listing page and individual project detail pages. Adding new fields
 * here makes it easy to extend the information displayed without
 * modifying multiple components. Each project includes core details
 * such as title, subtitle, description and technologies, as well as
 * optional fields for rich detail pages (overview, steps, impact,
 * lessons, nextSteps and image).
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: "personal" | "professional";
  status: "completed" | "in-progress" | "planned";
  year: string;
  challenge: string;
  solution: string;
  /**
   * A list of brief results for the project. These are used on the
   * project listing page and can be extended for the detail page.
   */
  results: string[];
  /**
   * Technologies and methodologies used in the project. Displayed as tags.
   */
  technologies: string[];
  /** Flag to highlight the project as a featured case study. */
  featured?: boolean;
  /** Detailed overview describing the context and goals of the project. */
  overview?: string;
  /**
   * Step‑by‑step explanation of how the project was executed. Each entry
   * contains a title and a description. The numbering is derived from
   * the order in the array when rendered.
   */
  steps?: { title: string; description: string }[];
  /**
   * Quantified impact metrics. Each property holds a string with a
   * percentage or count and a short description. These metrics are
   * rendered prominently on the detail page.
   */
  impact?: {
    functionality: string;
    agents: string;
    reduction: string;
  };
  /** Key takeaways or lessons learned during the project. */
  lessons?: string[];
  /** Suggested next steps or future improvements for the project. */
  nextSteps?: string[];
  /** Optional image path used on the detail page. The path should be
   * relative to the public directory (e.g. "/projects/project-id.png").
   */
  image?: string;
}

/**
 * Collection of all projects. If a project does not require detailed
 * information, it can omit the optional fields. Additional projects
 * should be added here following the same structure.
 */
export const projects: Project[] = [
  {
    id: "ey-irn-prr",
    title: "Projetos Estratégicos IRN - Plano de Recuperação e Resiliência",
    subtitle: "Product Owner & Gestor de Programa | EY",
    description:
      "Gestão integrada de múltiplos projetos estratégicos do Registo Comercial, supervisionando equipa multidisciplinar.",
    type: "professional",
    status: "in-progress",
    year: "2024-Present",
    challenge:
      "Gerir múltiplos projetos tecnológicos com impacto institucional e equipas complexas.",
    solution:
      "Implementação de metodologias ágeis, sessões de ideação e gestão de backlog de produto focado em valor.",
    results: [
      "Supervisão operacional de 31 elementos",
      "Coordenação de fornecedores e alinhamento estratégico",
    ],
    technologies: [
      "Miro",
      "Product Management",
      "Agile Methodologies",
      "Stakeholder Management",
    ],
    featured: true,
  },
  {
    id: "wrightia-irn-rc",
    title: "Projetos Estratégicos Registo Comercial",
    subtitle: "Gestor de Projetos | Wrightia",
    description:
      "Gestão de projetos estratégicos do Registo Comercial com equipas de 36 elementos e implementação do EOL 2.0.",
    type: "professional",
    status: "completed",
    year: "2022-2024",
    challenge:
      "Articular área de negócio com equipas de desenvolvimento e alinhar soluções tecnológicas.",
    solution:
      "Gestão integral do ciclo de vida dos projetos com implementação do EOL 2.0 e facilitação de sessões de trabalho.",
    results: ["Implementação do EOL 2.0", "Digitalização e simplificação de processos"],
    technologies: [
      "OpenProject",
      "MS Project",
      "Bizagi",
      "Camunda",
      "Excel Avançado",
    ],
    featured: true,
  },
  {
    id: "smartvision-munlab",
    title: "Observatório de Transformação Digital - MunLab",
    subtitle: "Business Development Manager | SmartVision",
    description:
      "Liderança de projeto de transformação digital de 150.000€ para a CIMAA e municípios associados.",
    type: "professional",
    status: "completed",
    year: "2019-2022",
    challenge:
      "Implementar transformação digital estruturada em múltiplos municípios.",
    solution:
      "Análise de requisitos, gestão orçamental e implementação de soluções de modernização administrativa.",
    results: ["Modernização de vários municípios", "ROI superior às expectativas"],
    technologies: ["Power BI", "Excel", "Process Management", "Digital Transformation"],
  },
  {
    id: "smartvision-nisa-monforte",
    title: "Modernização Administrativa - Nisa e Monforte",
    subtitle: "Consultor de Modernização | SmartVision",
    description:
      "Apoio técnico e funcional à modernização administrativa com foco na reorganização interna e transição digital.",
    type: "professional",
    status: "completed",
    year: "2021-2022",
    challenge:
      "Implementar novos modelos de atendimento e reorganização interna.",
    solution:
      "Consultoria especializada em modernização com gestão de projeto e acompanhamento.",
    results: [
      "Modernização administrativa completa",
      "Novos modelos de atendimento implementados",
    ],
    technologies: ["Excel", "Process Management", "Project Planning"],
  },
  {
    id: "smartvision-cimac",
    title: "Práticas de Atendimento - CIMAC (13 Municípios)",
    subtitle: "Business Development Manager | SmartVision",
    description:
      "Implementação de práticas de atendimento presencial e serviços online para 13 municípios da CIMAC.",
    type: "professional",
    status: "completed",
    year: "2019-2022",
    challenge:
      "Uniformizar práticas de atendimento e implementar serviços online em 13 municípios.",
    solution:
      "Reengenharia de processos de front‑office e back‑office com modelação BPMN e implementação de soluções digitais.",
    results: [
      "Atendimento uniformizado e serviços online",
      "Processos otimizados e documentados",
    ],
    technologies: ["BPMN", "Bonita Studio", "Word", "Excel"],
  },
  {
    id: "smartvision-lajes-pico",
    title: "Atendimento Multicanal - Lajes do Pico",
    subtitle: "Consultor & Gestor de Projeto | SmartVision",
    description:
      "Implementação de modelo de atendimento multicanal no projeto 'Lajes do Pico +Perto dos Munícipes'.",
    type: "professional",
    status: "completed",
    year: "2020-2022",
    challenge:
      "Desenvolver modelo de atendimento multicanal adaptado às necessidades locais.",
    solution:
      "Gestão completa de projeto, incluindo calendarização e entrega de marcos.",
    results: ["Modelo multicanal implementado", "Satisfação dos cidadãos elevada"],
    technologies: ["BPMN", "Bonita Studio", "Word", "Excel"],
  },
  {
    id: "smartvision-madalena-pico",
    title: "Transformação Digital - Madalena do Pico",
    subtitle: "Consultor & Gestor de Projeto | SmartVision",
    description:
      "Transformação digital dos serviços municipais de Madalena do Pico com foco na disponibilização online.",
    type: "professional",
    status: "completed",
    year: "2020-2022",
    challenge:
      "Transformar digitalmente os serviços municipais e melhorar o atendimento.",
    solution:
      "Gestão de projeto focada em planeamento, reporte e monitorização da execução.",
    results: ["Serviços online implementados", "Atendimento modernizado"],
    technologies: ["BPMN", "Bonita Studio", "Word", "Excel"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Pessoal com IA",
    subtitle: "Desenvolvedor & Product Owner",
    description:
      "Website de portfólio criado com ferramentas modernas de vibe‑coding e agentes de IA.",
    type: "personal",
    status: "in-progress",
    year: "2024",
    challenge:
      "Criar um website profissional sem conhecimentos avançados de programação.",
    solution:
      "Utilização de agentes de IA para desenvolvimento iterativo e pesquisa de soluções open‑source.",
    results: ["Website funcional e moderno", "Experiência prática com agentes de IA"],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lovable",
      "Devin.ai",
      "ChatGPT Agent",
      "Manus",
      "Vercel",
      "GitHub",
    ],
    overview:
      "Este projecto representa uma exploração profunda no mundo do desenvolvimento assistido por IA. Como gestor de projetos e PO com background técnico avançado, utilizei múltiplos agentes de IA para criar um website completo e profissional. A jornada incluiu experimentação com Lovable, Devin.ai, ChatGPT Agent e Manus, cada um com as suas forças específicas. O projecto também envolveu estudos de mercado para identificar as melhores soluções open‑source, configuração de CI/CD com Vercel e GitHub, e experiência hands‑on com Git. Esta experiência demonstra como a IA pode democratizar o desenvolvimento web e permitir que profissionais de outras áreas criem soluções tecnológicas robustas.",
    steps: [
      {
        title: "Investigação & Planeamento",
        description:
          "Estudos de mercado para identificar as melhores ferramentas de IA para desenvolvimento web e análise de soluções open‑source.",
      },
      {
        title: "Prototipagem com IA",
        description:
          "Utilização de Lovable para criação rápida de protótipos e iteração de design, estabelecendo a base visual e funcional.",
      },
      {
        title: "Desenvolvimento Assistido",
        description:
          "Implementação de funcionalidades complexas com Devin.ai e optimização de código com múltiplos agentes.",
      },
      {
        title: "Deployment & Optimização",
        description:
          "Configuração de CI/CD com Vercel, implementação de best practices e optimização de performance.",
      },
    ],
    impact: {
      functionality: "100% Funcionalidade Alcançada – Website completamente funcional sem conhecimento prévio de programação",
      agents: "4+ Agentes de IA Utilizados – Experiência hands‑on com múltiplas ferramentas de IA",
      reduction: "80% Redução de Tempo – Comparado com desenvolvimento tradicional",
    },
    lessons: [
      "A importância da iteração rápida no desenvolvimento moderno",
      "Como diferentes agentes de IA têm pontos fortes específicos",
      "O valor de um design system consistente e bem estruturado",
      "A relevância de ferramentas open‑source na criação de soluções",
      "Como a IA pode acelerar o acesso ao desenvolvimento tecnológico",
      "A importância de entender os fundamentos mesmo quando se usa IA",
    ],
    nextSteps: [
      "Implementação de analytics avançados",
      "Integração com CMS para gestão de conteúdo",
      "Desenvolvimento de funcionalidades interactivas",
      "Criação de tutoriais sobre vibe‑coding",
    ],
    image: "/projects/portfolio-website-image.png",
  },
  {
    id: "ai-assisted-pm",
    title: "AI‑Assisted Project Management",
    subtitle: "Investigador & Implementador",
    description:
      "Exploração de IA para optimização de processos de gestão de projetos.",
    type: "personal",
    status: "in-progress",
    year: "2024",
    challenge: "Identificar oportunidades de optimização através de IA.",
    solution:
      "Desenvolvimento de pipeline de automação com integração de APIs de IA e dashboards preditivos.",
    results: [
      "Redução de 40% no tempo de análise",
      "Automação de 60% das tarefas repetitivas",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "GPT API",
      "Power BI",
      "Automation",
    ],
  },
];