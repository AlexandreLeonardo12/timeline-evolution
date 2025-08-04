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
    // Este projeto representa a implementação da plataforma Empresa Online 2.0
    // para o Registo Comercial, substituindo os antigos projetos estratégicos.
    title: "Empresa Online 2.0",
    subtitle: "Gestor de Projetos | Wrightia",
    description:
      "Gestão integral do ciclo de vida do projeto que concebeu e lançou a nova plataforma de constituição de empresas 100 % digital. Coordenação de uma equipa multidisciplinar de 36 elementos, garantindo a entrega da Empresa Online 2.0 dentro do prazo e do orçamento.",
    type: "professional",
    status: "completed",
    year: "2022-2024",
    challenge:
      "Modernizar em tempo recorde o processo de criação de empresas num contexto público, substituindo a plataforma de 2006 por uma solução intuitiva que reduz drasticamente a burocracia e integra diversos organismos e serviços.",
    solution:
      "Conceção e gestão de produto com foco no utilizador, adopção de metodologias ágeis e coordenação de equipas internas e externas. Implementação de uma arquitectura escalável, integração de autenticação electrónica, assinatura digital e pagamentos online, e criação de APIs para interoperabilidade com Finanças, Segurança Social e outras entidades.",
    results: [
      "Lançamento da Plataforma Empresa Online 2.0 com constituição de sociedades em menos de 10 minutos",
      "Integração com 6+ serviços públicos e privados (AT, SS, RCBE, Autenticação, Pagamentos)",
      "Aumento substancial da percentagem de empresas constituídas online e reconhecimento internacional como caso de sucesso",
    ],
    technologies: [
      "Gestão de Produto",
      "Agile & Scrum",
      "UX/UI Design",
      "Integração de APIs",
      "Assinatura Digital",
      "Gateway de Pagamentos",
    ],
    featured: true,
    overview:
      "A Empresa Online 2.0 é uma plataforma inovadora que substituiu a versão original de 2006, permitindo a constituição de sociedades totalmente online em poucos minutos. O projeto, financiado pelo PRR e liderado pelo Instituto do Registo Comercial, visou tornar Portugal um dos países mais rápidos para abrir negócios, eliminando burocracia e deslocações e integrando de forma transparente diversos serviços públicos.",
    steps: [
      {
        title: "Análise & Planeamento",
        description:
          "Imersão nos processos legais existentes e definição de uma nova arquitectura funcional. Identificação de requisitos com stakeholders, revisão de legislação e desenho de fluxos orientados para o utilizador.",
      },
      {
        title: "Desenvolvimento da Plataforma",
        description:
          "Construção do front‑end intuitivo e de um back‑end escalável. Integração de módulos de autenticação, assinatura digital e pagamento. Desenvolvimento de APIs para comunicação com serviços fiscais, de segurança social e de beneficiário efectivo.",
      },
      {
        title: "Integração & Testes",
        description:
          "Integração com o novo sistema de registo comercial e com serviços externos. Realização de testes unitários, integrados e pilotos com utilizadores e conservadores para assegurar robustez, segurança e usabilidade.",
      },
      {
        title: "Lançamento & Evolução",
        description:
          "Lançamento oficial em 2023 e desenvolvimento de evolutivos em 2024, incluindo registo de sucursais e recolha do beneficiário efectivo no mesmo fluxo. Melhoria contínua da experiência de utilizador e expansão da área reservada.",
      },
    ],
    impact: {
      functionality:
        "10 min – Tempo médio de constituição de empresas após lançamento, comparado com dias no processo presencial",
      agents:
        "6+ Integrações Governamentais – Comunicação automática com Finanças, Segurança Social, RCBE, Autenticação.gov e SIBS",
      reduction:
        ">80 % Redução de Burocracia – Eliminação de deslocações e papéis, aumento da eficiência interna",
    },
    lessons: [
      "A experiência centrada no utilizador é crítica para a adopção de serviços públicos digitais",
      "A interoperabilidade entre organismos reduz drasticamente a burocracia e melhora a eficiência",
      "Metodologias ágeis e colaboração multidisciplinar permitem entregas rápidas e iterativas",
      "Modernizar sistemas legados requer coordenação entre inovação tecnológica e revisão legislativa",
    ],
    nextSteps: [
      "Expandir a plataforma para outros actos societários, como aumentos de capital e dissoluções",
      "Disponibilizar a interface em mais idiomas para atrair investidores internacionais",
      "Integrar assistentes inteligentes para apoio em tempo real ao utilizador",
      "Implementar dashboards analíticos para monitorizar métricas de desempenho e recolher feedback contínuo",
    ],
    image: "/projects/hero.jpg",
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
    id: "irn-registo-comercial",
    // Projeto de modernização do Registo Comercial Português no âmbito do PRR
    title: "Modernização do Registo Comercial",
    subtitle: "Gestor de Programa | EY",
    description:
      "Coordenação do programa de renovação dos sistemas de informação do Registo Comercial, com foco na migração de sistemas legados e na implementação de funcionalidades escaláveis e interoperáveis.",
    type: "professional",
    status: "in-progress",
    year: "2021-2025",
    challenge:
      "Substituir uma plataforma tecnológica obsoleta e assegurar conformidade com diretivas europeias, garantindo ao mesmo tempo continuidade do serviço durante a migração.",
    solution:
      "Gestão multidisciplinar envolvendo equipas de TI e jurídicas para definir requisitos, seleccionar fornecedores e desenvolver uma nova arquitectura. Implementação de módulos de workflow, base de dados central, APIs para BRIS e RCBE e mecanismos de assinatura e autenticação digitais.",
    results: [
      "Nova plataforma de registo comercial em produção, interoperável com o sistema europeu BRIS",
      "Integração do registo de sucursais e actos societários complexos via portal online",
      "Redução dos tempos de processamento e eliminação de papel em mais de 80 % dos atos",
    ],
    technologies: [
      "Gestão de Programa",
      "Análise de Requisitos",
      "Arquitectura de Sistemas",
      "Integração de APIs",
      "Workflow/BPM",
      "Gestão de Stakeholders",
    ],
    overview:
      "A Modernização do Registo Comercial é um projeto estratégico financiado pelo PRR que visa reconstruir os sistemas centrais que suportam os registos de empresas em Portugal. O objectivo é migrar de um software legado para uma plataforma moderna, digital, segura e preparada para interconexão europeia, melhorando a eficiência interna das conservatórias e disponibilizando novos serviços online aos cidadãos e empresas.",
    steps: [
      {
        title: "Análise & Levantamento",
        description:
          "Inventariação dos sistemas legados, recolha de requisitos técnicos e legais e consulta a stakeholders internos (conservadores) e externos (ordens profissionais, reguladores europeus).",
      },
      {
        title: "Desenvolvimento & Arquitectura",
        description:
          "Concepção da nova arquitectura de software, escolha de tecnologias e desenvolvimento dos módulos de workflow, bases de dados e interfaces de utilizador, seguindo metodologias ágeis.",
      },
      {
        title: "Integração & Migração",
        description:
          "Migração de dados do sistema antigo para a nova plataforma, integração com BRIS, RCBE e outros serviços públicos e realização de testes de performance e segurança.",
      },
      {
        title: "Lançamento & Rollout",
        description:
          "Implementação faseada da solução nas conservatórias, activação de novas funcionalidades como registo de sucursais e automação de actos de insolvência, formação de utilizadores e optimização contínua.",
      },
    ],
    impact: {
      functionality: "5,5 M€ Investimento PRR – Modernização completa da infraestrutura registral",
      agents: "100 % Digitalização – Processos totalmente desmaterializados e integrados",
      reduction: ">80 % Adesão Online – Meta de actos registados eletronicamente até 2026",
    },
    lessons: [
      "Modernizar sistemas core requer planeamento estruturado combinado com entregas ágeis",
      "Alinhar requisitos legais e tecnológicos desde o início evita retrabalho",
      "Envolver utilizadores finais (conservadores) melhora a adopção e a usabilidade",
      "Formação e gestão de mudança são tão importantes quanto a tecnologia em si",
    ],
    nextSteps: [
      "Completar o rollout nacional e estabilizar o sistema até 2025",
      "Desenvolver dashboards de BI para monitorizar KPIs de registo comercial",
      "Expor APIs para consulta pública de dados regitais com autorização",
      "Partilhar lições aprendidas em conferências e publicações para inspirar outros programas de modernização",
    ],
    image: "/projects/hero.jpg",
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