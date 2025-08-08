/**
 * Translations for the website. Each top‑level key corresponds to a language
 * code ("pt" for Portuguese and "en" for English). Nested objects contain
 * sections of the site such as navigation labels, home page strings, blog
 * strings and framework strings. When adding new text to the site, include
 * corresponding translations here to keep the multilingual experience
 * consistent.
 */
const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      framework: "Framework",
      blog: "Blog",
      contact: "Contacto",
    },
    home: {
      badge: "A moldar o futuro digital no projeto ReInovar da EY",
      title: "Alexandre Leonardo",
      subtitle: "Gestor de Programa | Transformação Digital e Inovação Estratégica",
      description:
        "Tornar as experiências digitais mais simples, ágeis e centradas nas pessoas.",
      ctaProjects: "Ver Projetos",
      ctaContact: "Entrar em contacto",
      metricsTitle: "Transformação Digital com Impacto",
      metricsSubtitle:
        "Resultados mensuráveis em múltiplos sectores e organizações",
      metrics: [
        {
          // Ajustado para refletir a experiência mais recente
          value: "6+",
          label: "Anos de experiência",
          description: "",
        },
        {
          value: "760k€+",
          label: "Projetos desenvolvidos",
          description: "Valor em projetos executados",
        },
        {
          value: "37+",
          label: "Membros de equipa liderados",
          description: "",
        },
        {
          value: "10+",
          label: "Entidades Públicas apoiadas",
          description: "dos quais impactaram 18+ clientes",
        },
      ],
      valuesTitle: "Valores‑Chave",
      valuesSubtitle:
        "Princípios que orientam a minha abordagem à transformação digital",
      values: [
        {
          title: "Simplicidade Estratégica",
          description:
            "Simplifico processos complexos, desenhando soluções intuitivas focadas no valor e na experiência do utilizador.",
        },
        {
          title: "Arquitetura Flexível",
          description:
            "Desenho arquiteturas de negócio modulares e escaláveis, com visão de longo prazo e impacto real.",
        },
        {
          title: "Rigor e Agilidade",
          description:
            "Integro rigor de gestão e governação com metodologias ágeis e lean, ajustando a abordagem à maturidade e realidade de cada contexto.",
        },
      ],
      contactTitle: "Prontos para o próximo desafio?",
      contactSubtitle:
        "Se está a enfrentar desafios de transformação digital ou a procurar acelerar a inovação na sua organização, vamos conversar.",
      contactEmailDesc: "Resposta rápida para questões específicas",
      contactLinkedInDesc:
        "Conecte‑se para networking e atualizações profissionais",
      contactConsultingDesc:
        "Discussão estratégica para projetos complexos",
      // The main contact CTA button has been removed from the landing page.
      contactCTA: "",
      contactEmailCTA: "Enviar Email",
      contactLinkedInCTA: "Conectar",
      contactConsultingCTA: "Agendar",
    },
    blog: {
      title: "Blog",
      subtitle: "Artigos e novidades",
      readMore: "Ler mais",
    },
    framework: {
      title: "Framework",
      subtitle: "Modelos e metodologias",
    },
    footer: {
      contact: "Contacto",
      linkedin: "LinkedIn",
      github: "GitHub",
    },

    /**
     * Traduções para a página de detalhes de cada projecto. Cada chave
     * representa um rótulo ou texto reutilizado no componente
     * ProjectDetail. Estas strings são utilizadas para tornar a
     * experiência bilingue, permitindo alternar entre português e
     * inglês sem perder o significado. Para manter a clareza, as
     * traduções foram explicitadas em português e as chaves em
     * inglês, facilitando a compreensão do código.
     */
    projectDetail: {
      back: "← Voltar aos Projetos",
      notFound: "Projeto não encontrado.",
      typePersonal: "Projeto Pessoal",
      typeProfessional: "Projeto Profissional",
      featured: "Projeto Destaque",
      statusCompleted: "Concluído",
      statusInProgress: "Em Progresso",
      statusPlanned: "Planeado",
      overview: "Visão Geral",
      challenge: "Desafio",
      solution: "Solução",
      results: "Resultados",
      technologies: "Tecnologias e Metodologias",
      implementation: "Implementação Detalhada",
      impact: "Impacto Quantificado",
      lessons: "Aprendizagens",
      nextSteps: "Próximos Passos",
      ctaInterested: "Interessado em projetos similares?",
      ctaViewOther: "Ver Outros Projetos",
      ctaContact: "Entrar em Contacto",

      /**
       * Nota sobre a disponibilidade de traduções completas para cada projecto.
       * Quando as versões em inglês dos textos do projecto não estão
       * disponíveis, esta nota informa o utilizador que o conteúdo está em
       * português e que uma tradução será fornecida no futuro.
       */
      translationNote:
        "Nota: Este caso de estudo está disponível apenas em português. Em breve haverá uma versão em inglês.",
    },

    /**
     * Traduções para a página de listagem de projetos. Contém rótulos
     * utilizados no componente Projects, como títulos de secções,
     * subtítulos, rótulos de estado e textos de CTA. Tal como noutras
     * secções, as chaves são em inglês para consistência, mas os
     * valores reflectem o idioma português.
     */
    projectsPage: {
      title: "Projetos",
      subtitle:
        "Casos de estudo que demonstram experiência em transformação digital e exploração tecnológica",
      professionalTitle: "Projetos Profissionais",
      personalTitle: "Projetos Pessoais",
      challenge: "Desafio",
      solution: "Solução",
      results: "Resultados",
      statusCompleted: "Concluído",
      statusInProgress: "Em Progresso",
      statusPlanned: "Planeado",
      viewDetails: "Ver detalhes",
      ctaInterested: "Interessado em colaborar?",
      ctaContact: "Entrar em Contacto",
      ctaBackHome: "Voltar ao Início",

      // Rótulos para os badges que identificam se um projecto é pessoal ou profissional
      badgePersonal: "Pessoal",
      badgeProfessional: "Profissional",
    },

    /**
     * Traduções para a página Sobre. Neste momento apenas estão
     * presentes os títulos principais; o conteúdo biográfico é
     * directamente definido no componente About. Se no futuro for
     * necessária tradução do texto completo, adicionar as strings
     * correspondentes aqui.
     */
    aboutPage: {
      title: "Sobre",
      header: "Sobre mim",
      description: "Conheça o percurso profissional de Alexandre Leonardo",
      experienceTitle: "Experiência Profissional",
      educationTitle: "Formação e Certificações",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      framework: "Framework",
      blog: "Blog",
      contact: "Contact",
    },
    home: {
      badge: "Shaping the digital future in the EY ReInovar project",
      title: "Alexandre Leonardo",
      subtitle:
        "Program Manager | Digital Transformation and Strategic Innovation",
      description:
        "Making digital experiences simpler, more agile, and people‑centered.",
      ctaProjects: "View Projects",
      ctaContact: "Get in touch",
      metricsTitle: "Digital Transformation with Impact",
      metricsSubtitle:
        "Measurable results across multiple sectors and organisations",
      metrics: [
        {
          value: "6+",
          label: "Years of experience",
          description: "",
        },
        {
          value: "€760k+",
          label: "Projects delivered",
          description: "Value in executed projects",
        },
        {
          value: "37+",
          label: "Team members led",
          description: "",
        },
        {
          value: "10+",
          label: "Public entities supported",
          description: "through which 18+ clients were impacted",
        },
      ],
      valuesTitle: "Core Values",
      valuesSubtitle:
        "Principles guiding my approach to digital transformation",
      values: [
        {
          title: "Strategic Simplicity",
          description:
            "I simplify complex processes, designing intuitive solutions focused on value and user experience.",
        },
        {
          title: "Flexible Architecture",
          description:
            "I design modular and scalable business architectures with a long‑term vision and real impact.",
        },
        {
          title: "Rigour and Agility",
          description:
            "I integrate management rigour and governance with agile and lean methodologies, adapting the approach to the maturity and reality of each context.",
        },
      ],
      contactTitle: "Ready for the next challenge?",
      contactSubtitle:
        "If you are facing digital transformation challenges or looking to accelerate innovation in your organisation, let's talk.",
      contactEmailDesc: "Quick response for specific questions",
      contactLinkedInDesc: "Connect for networking and professional updates",
      contactConsultingDesc: "Strategic discussion for complex projects",
      // The main contact CTA button has been removed from the landing page.
      contactCTA: "",
      contactEmailCTA: "Send Email",
      contactLinkedInCTA: "Connect",
      contactConsultingCTA: "Schedule",
    },
    blog: {
      title: "Blog",
      subtitle: "Insights and news",
      readMore: "Read more",
    },
    framework: {
      title: "Framework",
      subtitle: "Models and methodologies",
    },
    footer: {
      contact: "Contact",
      linkedin: "LinkedIn",
      // Removed GitHub from the footer; no translation needed
      // github: "GitHub",
    },

    /**
     * Translations for the project detail page. Each key corresponds to a
     * label reused in the ProjectDetail component. These strings
     * provide an English equivalent for the Portuguese texts, enabling
     * seamless switching between languages.
     */
    projectDetail: {
      back: "← Back to Projects",
      notFound: "Project not found.",
      typePersonal: "Personal Project",
      typeProfessional: "Professional Project",
      featured: "Featured Project",
      statusCompleted: "Completed",
      statusInProgress: "In Progress",
      statusPlanned: "Planned",
      overview: "Overview",
      challenge: "Challenge",
      solution: "Solution",
      results: "Results",
      technologies: "Technologies and Methods",
      implementation: "Detailed Implementation",
      impact: "Impact Quantified",
      lessons: "Lessons Learned",
      nextSteps: "Next Steps",
      ctaInterested: "Interested in similar projects?",
      ctaViewOther: "See Other Projects",
      ctaContact: "Get in Touch",

      /**
       * Note about the availability of full translations for each project.
       * When English versions of the project content are not yet provided,
       * this informs the reader that the case study is currently in
       * Portuguese only and that a translation is planned.
       */
      translationNote:
        "Note: This case study is currently available in Portuguese only. An English version is coming soon.",
    },

    /**
     * Translations for the projects listing page. Contains section
     * headings, status labels and CTA texts used in the Projects
     * component. Keys mirror those of the Portuguese version for
     * consistency.
     */
    projectsPage: {
      title: "Projects",
      subtitle:
        "Case studies showcasing experience in digital transformation and technological exploration",
      professionalTitle: "Professional Projects",
      personalTitle: "Personal Projects",
      challenge: "Challenge",
      solution: "Solution",
      results: "Results",
      statusCompleted: "Completed",
      statusInProgress: "In Progress",
      statusPlanned: "Planned",
      viewDetails: "View details",
      ctaInterested: "Interested in collaborating?",
      ctaContact: "Get in Touch",
      ctaBackHome: "Back to Home",

      // Labels for badges that denote whether a project is personal or professional
      badgePersonal: "Personal",
      badgeProfessional: "Professional",
    },

    /**
     * Translations for the About page. Currently includes only the
     * headings; the main biographical content remains in Portuguese
     * until an English version is provided.
     */
    aboutPage: {
      title: "About",
      header: "About me",
      description: "Learn about Alexandre Leonardo's professional journey",
      experienceTitle: "Professional Experience",
      educationTitle: "Education and Certifications",
    },
  },
} as const;

export default translations;