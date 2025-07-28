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
          value: "10+",
          label: "Anos de experiência",
          description: "Anos moldando o futuro digital",
        },
        {
          value: "760k€+",
          label: "Projetos desenvolvidos",
          description: "Valor em projetos executados",
        },
        {
          value: "50+",
          label: "Equipas lideradas",
          description: "Profissionais liderados",
        },
        {
          value: "18+",
          label: "Clientes impactados",
          description: "Organizações transformadas",
        },
      ],
      valuesTitle: "Valores‑Chave",
      valuesSubtitle:
        "Princípios que orientam a minha abordagem à transformação digital",
      values: [
        {
          title: "Simplicidade Estratégica",
          description:
            "Simplifico processos complexos, desenhando soluções intuitivas e centradas nas pessoas.",
        },
        {
          title: "Arquitetura Flexível",
          description:
            "Concebo soluções com visão de longo prazo, com impacto real e mensurável.",
        },
        {
          title: "Rigor e Agilidade",
          description:
            "Integro frameworks sólidas com metodologias ágeis, ajustando à realidade de cada contexto.",
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
          value: "10+",
          label: "Years of experience",
          description: "Years shaping the digital future",
        },
        {
          value: "€760k+",
          label: "Projects delivered",
          description: "Value in executed projects",
        },
        {
          value: "50+",
          label: "Teams led",
          description: "Professionals led",
        },
        {
          value: "18+",
          label: "Clients impacted",
          description: "Organisations transformed",
        },
      ],
      valuesTitle: "Core Values",
      valuesSubtitle:
        "Principles guiding my approach to digital transformation",
      values: [
        {
          title: "Strategic Simplicity",
          description:
            "I simplify complex processes, designing intuitive, people‑centred solutions.",
        },
        {
          title: "Flexible Architecture",
          description:
            "I conceive solutions with a long‑term vision, creating real and measurable impact.",
        },
        {
          title: "Rigour and Agility",
          description:
            "I integrate robust frameworks with agile methodologies, adapting to each context.",
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
  },
} as const;

export default translations;