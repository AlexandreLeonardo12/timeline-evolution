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

  /**
   * Optional news coverage related to the project. Each entry contains
   * a title, the source/publication name and a URL to the original
   * article. These items are displayed on the project detail page
   * when available to provide additional context and credibility. The
   * summary field may be used for a brief description of the article.
   */
  news?: {
    title: string;
    source: string;
    url: string;
    summary?: string;
  }[];
}

/**
 * Collection of all projects. If a project does not require detailed
 * information, it can omit the optional fields. Additional projects
 * should be added here following the same structure.
 */
export const projects: Project[] = [
  {
    id: "ey-irn-prr",
    title: "Projetos Estratégicos IRN – Modernização do Registo Comercial",
    subtitle: "Product Owner & Gestor de Programa | EY",
    /*
     * Este projecto combina os antigos casos "Projetos Estratégicos IRN - Plano de Recuperação e Resiliência" e
     * "Modernização do Registo Comercial". A fusão assegura consistência na informação e evita duplicação de
     * conteúdos. As descrições, desafios, soluções, resultados e detalhes foram integrados a partir dos dois
     * registos originais. A cronologia é actualizada para reflectir o arranque em 2022 e a continuação até ao
     * presente.
     */
    description:
      "Gestão integrada de múltiplos projectos estratégicos do Registo Comercial, coordenando o programa de " +
      "modernização dos sistemas de informação. A iniciativa foca‑se na migração de sistemas legados e na " +
      "implementação de funcionalidades escaláveis e interoperáveis, supervisionando uma equipa multidisciplinar.",
    type: "professional",
    status: "in-progress",
    // O projecto iniciou em 2022 e permanece em curso
    year: "2022-Present",
    challenge:
      "Gerir múltiplos projectos tecnológicos com impacto institucional e equipas complexas, substituindo uma " +
      "plataforma tecnológica obsoleta e assegurando conformidade com directivas europeias, mantendo a continuidade " +
      "do serviço durante a migração.",
    solution:
      "Gestão multidisciplinar com equipas de TI e jurídicas, definindo requisitos, seleccionando fornecedores e " +
      "desenvolvendo uma nova arquitectura com módulos de workflow, base de dados central, APIs para BRIS e RCBE e " +
      "mecanismos de assinatura e autenticação digitais. Implementação de metodologias ágeis, sessões de ideação e " +
      "gestão de backlog de produto focado em valor.",
    results: [
      "Supervisão operacional de 31 elementos",
      "Coordenação de fornecedores e alinhamento estratégico",
      "Nova plataforma de registo comercial em produção, interoperável com o sistema europeu BRIS",
      "Integração do registo de sucursais e actos societários complexos via portal online",
      "Redução dos tempos de processamento e eliminação de papel em mais de 80 % dos actos",
    ],
    technologies: [
      // Lista unificada de competências e ferramentas utilizadas nas várias vertentes do projecto
      "Gestão de Programa",
      "Análise de Requisitos",
      "Arquitectura de Sistemas",
      "Integração de APIs",
      "Workflow/BPM",
      "Gestão de Stakeholders",
      "Miro",
      "Product Management",
      "Agile Methodologies",
      "Stakeholder Management",
    ],
    featured: true,
    // Detalhes aprofundados (overview, passos, impacto, lições e próximos passos) provenientes do
    // registo de "Modernização do Registo Comercial".
    overview:
      "A Modernização do Registo Comercial é um projecto estratégico financiado pelo PRR que visa reconstruir os " +
      "sistemas centrais que suportam os registos de empresas em Portugal. O objectivo é migrar de um software " +
      "legado para uma plataforma moderna, digital, segura e preparada para interconexão europeia, melhorando a " +
      "eficiência interna das conservatórias e disponibilizando novos serviços online aos cidadãos e empresas.",
    steps: [
      {
        title: "Análise & Levantamento",
        description:
          "Inventariação dos sistemas legados, recolha de requisitos técnicos e legais e consulta a stakeholders " +
          "internos (conservadores) e externos (ordens profissionais, reguladores europeus).",
      },
      {
        title: "Desenvolvimento & Arquitectura",
        description:
          "Concepção da nova arquitectura de software, escolha de tecnologias e desenvolvimento dos módulos de " +
          "workflow, bases de dados e interfaces de utilizador, seguindo metodologias ágeis.",
      },
      {
        title: "Integração & Migração",
        description:
          "Migração de dados do sistema antigo para a nova plataforma, integração com BRIS, RCBE e outros " +
          "serviços públicos e realização de testes de performance e segurança.",
      },
      {
        title: "Lançamento & Rollout",
        description:
          "Implementação faseada da solução nas conservatórias, activação de novas funcionalidades como registo de " +
          "sucursais e automação de actos de insolvência, formação de utilizadores e optimização contínua.",
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
    // Utiliza imagem real presente na pasta public/projects para ilustrar o projecto
    image: "/projects/irn-prr-photo.jpg",
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
    // A imagem original foi removida e substituída por uma fotografia real do projecto.
    image: "/projects/eol2-photo2.png",

    // Notícias de referência sobre a plataforma Empresa Online 2.0. Estes
    // artigos comprovam a relevância do projecto e fornecem
    // contexto adicional para visitantes interessados. As
    // informações resumidas foram extraídas do artigo citado.
    news: [
      {
        title:
          "Portugal lança plataforma Empresa Online 2.0 que permite abrir empresa em minutos", // Portuguese headline summarising the news
        source: "Euro Dicas",
        url: "https://www.eurodicas.com.br/empresa-online-portugal/",
        summary:
          "Artigo relata que a Empresa Online 2.0, lançada pelo governo português, reduz a burocracia e simplifica o processo de criação de empresas, permitindo que cidadãos portugueses e estrangeiros abram uma empresa em poucos minutos【836847190340545†L14-L18】. A versão 2.0 oferece novas funcionalidades, como a possibilidade de constituir sociedades anónimas e unipessoais, e está disponível em português e inglês【836847190340545†L25-L29】【836847190340545†L49-L51】."
      },
      {
        title: "Pagamento facilitado e custos na Empresa Online 2.0",
        source: "Euro Dicas",
        url: "https://www.eurodicas.com.br/empresa-online-portugal/",
        summary:
          "O mesmo artigo destaca que o custo para abrir uma empresa pela plataforma é de 220 € com contrato social padrão e 360 € para contrato personalizado. A plataforma permite pagamentos via MB Way, o que facilita o processo de constituição【836847190340545†L87-L92】."
      }
    ],
  },
  {
    id: "smartvision-munlab",
    title: "Observatório de Transformação Digital - MunLab",
    subtitle: "Business Development Manager | SmartVision",
    description:
      "Liderança de um projecto de 150 000 € para criação de um observatório de transformação digital na CIMAA, envolvendo 13 municípios e equipas multidisciplinares.",
    type: "professional",
    status: "completed",
    year: "2019-2022",
    challenge:
      "Diagnosticar o nível de maturidade digital dos municípios da CIMAA e criar uma plataforma unificada de monitorização e análise de indicadores.",
    solution:
      "Coordenação de levantamento de requisitos, desenho de indicadores e implementação de dashboards interactivos. Gestão do orçamento e formação das equipas municipais para garantir adopção sustentável.",
    results: [
      "Observatório digital implementado com sucesso",
      "Indicadores de maturidade digital harmonizados em 13 municípios",
    ],
    technologies: [
      "Power BI",
      "Process Management",
      "Stakeholder Engagement",
      "Digital Transformation",
    ],
    overview:
      "Este projecto criou um observatório de transformação digital para a CIMAA, permitindo monitorizar e comparar a maturidade digital dos municípios. A iniciativa visou capacitar as autarquias com ferramentas de business intelligence e fomentar a adopção de melhores práticas.",
    steps: [
      {
        title: "Diagnóstico & Levantamento",
        description:
          "Análise das práticas digitais existentes e definição de indicadores críticos para medir a maturidade digital dos 13 municípios da CIMAA.",
      },
      {
        title: "Arquitectura & Plataforma",
        description:
          "Desenho e desenvolvimento de uma plataforma unificada com dashboards de BI e relatórios interactivos para consolidação de dados municipais.",
      },
      {
        title: "Formação & Rollout",
        description:
          "Capacitação dos técnicos municipais e implementação dos dashboards, com sessões de formação e acompanhamento na utilização.",
      },
      {
        title: "Avaliação & Evolução",
        description:
          "Monitorização dos resultados, recolha de feedback e planeamento de evoluções da plataforma, incluindo benchmarking entre municípios.",
      },
    ],
    impact: {
      functionality:
        "150 K€ Investimento – Financiamento gerido para entrega de plataforma e formação",
      agents:
        "13 Municípios Envolvidos – Alinhamento de indicadores e práticas digitais",
      reduction:
        "70 % Aumento na visibilidade de indicadores – Melhoria na tomada de decisão",
    },
    lessons: [
      "A interoperabilidade de dados entre municípios é essencial para comparabilidade",
      "A formação contínua garante a adopção de ferramentas analíticas",
      "Indicadores partilhados motivam benchmarking e melhoria contínua",
      "A definição clara de objectivos orienta a transformação digital",
    ],
    nextSteps: [
      "Adicionar módulos preditivos para identificar tendências de maturidade",
      "Expandir a plataforma a outras regiões e partilhar boas práticas",
      "Integrar dados ambientais e sociais para análises holísticas",
      "Publicar relatórios anuais de maturidade digital",
    ],
    // image property removed for placeholder hero image
  },
  {
    id: "smartvision-nisa-monforte",
    title: "Modernização Administrativa - Nisa e Monforte",
    subtitle: "Consultor de Modernização | SmartVision",
    description:
      "Apoio técnico e funcional à modernização administrativa de duas autarquias, com foco na reorganização interna, digitalização de processos e melhoria do atendimento ao cidadão.",
    type: "professional",
    status: "completed",
    year: "2021-2022",
    challenge:
      "Reestruturar modelos de atendimento e processos administrativos em duas câmaras municipais, garantindo transição suave para a era digital.",
    solution:
      "Realização de diagnóstico, co-criação de novos fluxos de trabalho, introdução de ferramentas digitais e formação intensiva das equipas para adopção dos novos modelos.",
    results: [
      "Reorganização administrativa completa em Nisa e Monforte",
      "Novos modelos de atendimento digital e presencial implementados",
    ],
    technologies: [
      "Process Management",
      "Change Management",
      "Digital Transformation",
      "Excel",
    ],
    overview:
      "O projecto de Modernização Administrativa para Nisa e Monforte transformou os processos internos e modelos de atendimento destas câmaras municipais. A iniciativa digitalizou fluxos, reorganizou equipas e capacitou funcionários, resultando em serviços mais eficientes e satisfatórios para os munícipes.",
    steps: [
      {
        title: "Diagnóstico & Mapeamento",
        description:
          "Análise dos processos administrativos existentes, identificação de pontos críticos e oportunidades de melhoria.",
      },
      {
        title: "Redesenho de Processos",
        description:
          "Definição de novos modelos de atendimento e fluxos internos alinhados às melhores práticas de modernização e às necessidades dos cidadãos.",
      },
      {
        title: "Implementação Tecnológica",
        description:
          "Introdução de sistemas digitais para gestão de atendimento, documentos e relatórios, integrando-os com as ferramentas existentes.",
      },
      {
        title: "Formação & Transição",
        description:
          "Capacitação das equipas municipais para utilização dos novos sistemas e acompanhamento intensivo durante a transição de modelos.",
      },
    ],
    impact: {
      functionality: "2 Municípios Modernizados – Nisa e Monforte com processos digitais", 
      agents: "50+ Funcionários Capacitados – Equipa formada em novas ferramentas",
      reduction: "60 % Redução do tempo de atendimento – Melhor serviço ao cidadão",
    },
    lessons: [
      "Envolver os funcionários desde o início garante maior adesão às mudanças",
      "Documentar processos facilita a manutenção e melhoria contínua",
      "Tecnologia deve adaptar-se às pessoas, não o contrário",
      "Comunicação transparente com a comunidade aumenta a aceitação",
    ],
    nextSteps: [
      "Estender a modernização a outras áreas como fiscalização e urbanismo",
      "Implementar indicadores de satisfação e monitorizar a performance",
      "Investir em plataformas de participação cidadã online",
      "Continuar a formação periódica para atualização tecnológica",
    ],
    // image property removed for placeholder hero image
  },
  {
    id: "smartvision-cimac",
    title: "Práticas de Atendimento - CIMAC (13 Municípios)",
    subtitle: "Business Development Manager | SmartVision",
    description:
      "Coordenação regional de um programa para uniformizar práticas de atendimento e implementar serviços online em 13 municípios da CIMAC, envolvendo processos complexos de mudança e integração.",
    type: "professional",
    status: "completed",
    year: "2019-2022",
    challenge:
      "Padronizar o atendimento ao público em 13 municípios com realidades distintas e introduzir serviços online acessíveis a todos.",
    solution:
      "Condução de sessões de harmonização de processos, modelação BPMN para front‑office e back‑office, desenvolvimento de serviços online e formação das equipas municipais.",
    results: [
      "Práticas uniformizadas e serviços online implementados em 13 municípios",
      "Processos documentados e otimizados para maior eficiência",
    ],
    technologies: [
      "BPMN",
      "Process Re-engineering",
      "Digital Service Design",
      "Word",
      "Excel",
    ],
    overview:
      "O programa de Práticas de Atendimento da CIMAC visou uniformizar a experiência do cidadão nos 13 municípios associados e promover a transição digital dos serviços. Ao alinhar processos e disponibilizar serviços online, a iniciativa elevou o padrão de atendimento e reduziu deslocações desnecessárias.",
    steps: [
      {
        title: "Levantamento & Harmonização",
        description:
          "Diagnóstico das práticas existentes em cada município e definição de standards comuns de atendimento e procedimentos.",
      },
      {
        title: "Modelação & Desenho",
        description:
          "Criação de modelos BPMN para os fluxos de front‑office e back‑office e desenho de serviços online integrados.",
      },
      {
        title: "Implementação e Formação",
        description:
          "Introdução de procedimentos uniformes e serviços digitais, e formação de equipas nos 13 municípios para adopção plena.",
      },
      {
        title: "Lançamento de Serviços",
        description:
          "Activação dos serviços online e monitorização da sua utilização, com recolha de feedback dos cidadãos e melhoria contínua.",
      },
    ],
    impact: {
      functionality: "13 Municípios – Práticas uniformizadas e serviços online implementados",
      agents: "80+ Processos Reengenhados – Documentação e optimização de procedimentos",
      reduction: "50 % Redução de deslocações – Cidadãos utilizam serviços online",
    },
    lessons: [
      "Padronizar processos entre municípios requer flexibilidade e negociação",
      "Modelagem BPMN é eficaz para comunicação e alinhamento",
      "Monitorização pós‑implementação é vital para medir sucesso",
      "Iniciativas regionais proporcionam ganhos de escala e aprendizagem entre pares",
    ],
    nextSteps: [
      "Adicionar funcionalidades de feedback do cidadão nos serviços online",
      "Integrar os serviços com plataformas nacionais para interoperabilidade",
      "Incluir serviços de pagamento online para taxas municipais",
      "Actualizar constantemente os standards conforme legislação evolui",
    ],
    // Atribuída fotografia real ao projeto CIMAC para servir de hero
    image: "/projects/cimac-photo2.jpeg",
  },
  {
    id: "smartvision-lajes-pico",
    title: "Atendimento Multicanal - Lajes do Pico",
    subtitle: "Consultor & Gestor de Projeto | SmartVision",
    description:
      "Definição e implementação de um modelo de atendimento multicanal adaptado às especificidades do município de Lajes do Pico, combinando balcão, telefone e canais digitais.",
    type: "professional",
    status: "completed",
    year: "2020-2022",
    challenge:
      "Criar um modelo multicanal que responda às necessidades dos munícipes e maximize a eficiência dos recursos internos.",
    solution:
      "Gestão completa do projecto, desde a análise das necessidades até à implementação de ferramentas de CRM e canais digitais, com formação das equipas para garantir atendimento consistente.",
    results: [
      "Modelo multicanal implementado com sucesso",
      "Satisfação dos cidadãos aumentou significativamente",
    ],
    technologies: [
      "Gestão de Projecto",
      "CRM",
      "BPMN",
      "Atendimento Digital",
    ],
    overview:
      "O projecto de Atendimento Multicanal em Lajes do Pico implementou um sistema que permite aos cidadãos interagir com a autarquia através de vários canais integrados. A iniciativa melhorou a acessibilidade e a qualidade do serviço, aumentando a satisfação dos munícipes.",
    steps: [
      {
        title: "Análise de Necessidades",
        description:
          "Identificação das preferências e necessidades dos munícipes, bem como das capacidades internas para suportar múltiplos canais de atendimento.",
      },
      {
        title: "Design do Modelo Multicanal",
        description:
          "Desenvolvimento de fluxos integrados que articulam os canais presencial, telefónico e digital, estabelecendo regras de encaminhamento e priorização.",
      },
      {
        title: "Implementação Tecnológica",
        description:
          "Adopção de ferramentas de CRM e criação de canais digitais (portal e email) para suporte ao atendimento. Integração com sistemas de back‑office.",
      },
      {
        title: "Testes & Ajustamentos",
        description:
          "Realização de pilotos, recolha de feedback dos munícipes e funcionários, e ajuste dos fluxos até atingir o modelo óptimo.",
      },
    ],
    impact: {
      functionality: "3 Canais Integrados – Balcão, telefone e digital em funcionamento conjunto",
      agents: "100 % Cobertura – Todos os munícipes podem escolher o canal preferido",
      reduction: "70 % Aumento da satisfação – Avaliação positiva pós‑implementação",
    },
    lessons: [
      "Um modelo multicanal requer integração tecnológica e alinhamento de processos",
      "Comunicar os novos canais aos munícipes é vital para adesão",
      "Monitorização de KPIs como tempo de resposta e satisfação é fundamental",
      "Formação dos operadores garante consistência entre canais",
    ],
    nextSteps: [
      "Introduzir atendimento via chat e aplicações móveis",
      "Automatizar respostas a pedidos frequentes com IA",
      "Criar programas de fidelização para munícipes que utilizem canais digitais",
      "Expandir o modelo a outros serviços municipais (eventos, turismo)",
    ],
    // image property removed for placeholder hero image
  },
  {
    id: "smartvision-madalena-pico",
    title: "Transformação Digital - Madalena do Pico",
    subtitle: "Consultor & Gestor de Projeto | SmartVision",
    description:
      "Transformação digital abrangente dos serviços municipais de Madalena do Pico, criando uma plataforma online que permite aos cidadãos realizar pedidos e consultar informações sem deslocações.",
    type: "professional",
    status: "completed",
    year: "2020-2022",
    challenge:
      "Digitalizar processos municipais e garantir adesão dos munícipes a novos canais online enquanto se mantêm serviços de proximidade.",
    solution:
      "Gestão de projecto orientada a resultados, incluindo planeamento detalhado, desenvolvimento de serviços online, integração com sistemas internos e comunicação activa com a população.",
    results: [
      "Mais de 20 serviços municipalizados digitalizados",
      "Melhoria significativa da eficiência interna e da satisfação dos munícipes",
    ],
    technologies: [
      "BPMN",
      "Service Design",
      "Integração de Sistemas",
      "Excel",
    ],
    overview:
      "O projecto de Transformação Digital de Madalena do Pico digitalizou os principais serviços municipais, permitindo que os cidadãos efectuem pedidos e acompanhem processos online. A iniciativa revolucionou a interação com o município, reduzindo deslocações e melhorando a eficiência interna.",
    steps: [
      {
        title: "Diagnóstico & Planeamento",
        description:
          "Identificação de serviços passíveis de digitalização e definição de um roadmap para a sua implementação.",
      },
      {
        title: "Desenvolvimento de Serviços Online",
        description:
          "Criação de um portal web e formulários digitais para os vários serviços municipais, com foco na usabilidade e acessibilidade.",
      },
      {
        title: "Integração de Sistemas",
        description:
          "Ligação do portal aos sistemas internos (financeiros, documentais) para automatizar fluxos e reduzir erros.",
      },
      {
        title: "Lançamento & Formação",
        description:
          "Capacitação das equipas e promoção activa do portal junto aos munícipes para garantir a sua utilização.",
      },
    ],
    impact: {
      functionality: "20+ Serviços Digitalizados – Ampla cobertura de serviços online",
      agents: "90 % Acesso Remoto – Grande parte dos pedidos pode ser feita sem deslocações",
      reduction: "60 % Redução de atendimento presencial – Ganhos de eficiência e tempo",
    },
    lessons: [
      "Planeamento detalhado garante alinhamento entre áreas técnicas e políticas",
      "Conectar sistemas internos evita duplicação de esforços e erros",
      "Campanhas de comunicação são necessárias para divulgar os novos serviços",
      "Sustentabilidade das plataformas requer manutenção e apoio contínuos",
    ],
    nextSteps: [
      "Desenvolver uma aplicação móvel para maior acessibilidade",
      "Implementar dashboards de performance dos serviços online",
      "Expandir a digitalização a áreas como ambiente e urbanismo",
      "Estabelecer parcerias com startups locais para inovação contínua",
    ],
    // image property removed for placeholder hero image
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
    image: "/projects/portfolio-website-image.jpg",
  },
  {
    id: "ai-assisted-pm",
    title: "AI‑Assisted Project Management",
    subtitle: "Investigador & Implementador",
    description:
      "Exploração contínua de ferramentas de inteligência artificial para optimizar o planeamento, a execução e a monitorização de projectos, reduzindo tarefas repetitivas e potenciando decisões baseadas em dados.",
    type: "personal",
    status: "in-progress",
    year: "2024",
    challenge:
      "Identificar tarefas de gestão de projectos passíveis de automatização com IA e integrar diferentes APIs de forma coesa.",
    solution:
      "Desenvolvimento de um pipeline de automação combinando modelos de machine learning, GPT API e dashboards de BI para análise preditiva e geração de relatórios automatizados.",
    results: [
      "Redução de 40 % no tempo gasto em análise de dados",
      "Automação de 60 % das tarefas repetitivas de gestão",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "GPT API",
      "Power BI",
      "Automação",
    ],
    overview:
      "Este projecto pessoal investiga o uso de IA para potenciar a gestão de projectos. O objectivo é criar soluções que automatizam tarefas rotineiras e fornecem insights preditivos, permitindo que os gestores se concentrem em decisões estratégicas.",
    steps: [
      {
        title: "Identificação de Oportunidades",
        description:
          "Mapeamento das tarefas de gestão de projectos susceptíveis de automatização e definição dos indicadores de sucesso.",
      },
      {
        title: "Selecção de Ferramentas",
        description:
          "Avaliação e escolha de APIs de IA (GPT, ML) e frameworks de automação adequadas às necessidades identificadas.",
      },
      {
        title: "Desenvolvimento de Pipeline",
        description:
          "Criação de scripts e dashboards que integram algoritmos de machine learning e relatórios preditivos, e implementação de automações em Power BI.",
      },
      {
        title: "Testes & Iteração",
        description:
          "Experimentação com os modelos, recolha de feedback e ajuste dos algoritmos para melhorar a precisão e utilidade dos insights.",
      },
    ],
    impact: {
      functionality: "40 % Automação – Tarefas repetitivas tratadas por scripts e IA",
      agents: "3+ Ferramentas de IA – Uso combinado de GPT API, ML e BI",
      reduction: "60 % Redução no tempo de análise – Mais foco em decisões estratégicas",
    },
    lessons: [
      "A IA é complementar e requer supervisão humana para melhores resultados",
      "Integrar dados de várias fontes melhora a qualidade dos insights",
      "Iteração contínua é necessária para ajustar modelos de ML",
      "É fundamental assegurar a privacidade e a ética no uso de IA",
    ],
    nextSteps: [
      "Implementar análises preditivas de riscos de projecto",
      "Desenvolver chatbot para suporte às equipas de projecto",
      "Explorar novas APIs de IA generativa para relatórios automáticos",
      "Partilhar frameworks abertos com a comunidade de gestão de projectos",
    ],
    // image property removed for placeholder hero image
  },
];