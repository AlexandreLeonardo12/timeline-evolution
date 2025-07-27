import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.framework': 'Framework',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Alexandre Leonardo',
    'hero.subtitle': 'Gestor de Programa | Transformação Digital e Inovação Estratégica',
    'hero.description': 'Tornar as experiências digitais mais simples, ágeis e centradas nas pessoas',
    'hero.about': 'Sobre mim',
    'hero.projects': 'Ver Projetos',
    
    // Journey Section
    'journey.title': 'A Minha Jornada',
    'journey.subtitle': 'De engenheiro a líder de transformação digital',
    'journey.technical.title': 'Base Técnica Sólida',
    'journey.technical.description': 'Comecei como engenheiro, desenvolvendo uma compreensão profunda dos sistemas e processos técnicos.',
    'journey.strategic.title': 'Visão Estratégica',
    'journey.strategic.description': 'Evoluí para posições de liderança, focando na transformação digital e inovação organizacional.',
    'journey.impact.title': 'Impacto Real',
    'journey.impact.description': 'Hoje lidero programas que geram mudanças significativas nas organizações.',
    
    // Indicators
    'indicators.projects': 'Projetos Concluídos',
    'indicators.teams': 'Equipas Lideradas',
    'indicators.experience': 'Anos de Experiência',
    'indicators.certifications': 'Certificações',
    
    // About
    'about.title': 'Sobre Mim',
    'about.hero.title': 'Transformando ideias em realidade através da tecnologia',
    'about.professional.title': 'Perfil Profissional',
    'about.professional.description': 'Com mais de uma década de experiência em transformação digital, combino expertise técnica com visão estratégica para liderar iniciativas que realmente fazem a diferença.',
    
    // Projects
    'projects.title': 'Projetos',
    'projects.personal': 'Projetos Pessoais',
    'projects.professional': 'Projetos Profissionais',
    'projects.viewDetails': 'Ver Detalhes',
    
    // Contact
    'contact.title': 'Vamos transformar ideias em resultados concretos',
    'contact.description': 'Se está a enfrentar desafios de transformação digital ou a procurar acelerar a inovação na sua organização, vamos conversar.',
    'contact.cta': 'Iniciar Conversa',
    'contact.email.title': 'Email Direto',
    'contact.email.description': 'Resposta rápida para questões específicas',
    'contact.email.cta': 'Enviar Email',
    'contact.linkedin.title': 'LinkedIn',
    'contact.linkedin.description': 'Conecte-se para networking profissional',
    'contact.linkedin.cta': 'Conectar',
    'contact.consultation.title': 'Consultoria',
    'contact.consultation.description': 'Discussão estratégica para projetos complexos',
    'contact.consultation.cta': 'Agendar',
    
    // Footer
    'footer.description': 'Especialista em transformação digital e inovação estratégica, criando soluções que geram impacto real nas organizações.',
    'footer.navigation': 'Navegação',
    'footer.specialties': 'Especialidades',
    'footer.specialty.digital': 'Transformação Digital',
    'footer.specialty.programs': 'Gestão de Programas',
    'footer.specialty.innovation': 'Inovação Estratégica',
    'footer.specialty.architecture': 'Arquitetura de Processos',
    'footer.contact.title': 'Vamos conversar?',
    'footer.contact.description': 'Interessado em colaborar ou saber mais sobre o meu trabalho?',
    'footer.contact.cta': 'Contactar',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.developed': 'Desenvolvido com',
    
    // Framework
    'framework.title': 'Framework',
    'framework.description': 'Metodologia proprietária para transformação digital eficaz',
    'framework.badge': 'Metodologia Exclusiva',
    'framework.hero.title': 'DX³ Framework',
    'framework.hero.subtitle': 'Digital Experience Excellence - A metodologia que transforma organizações',
    'framework.cta.download': 'Download Framework',
    'framework.cta.learn': 'Saber Mais',
    'framework.overview.title': 'Os 3 Pilares do DX³',
    'framework.overview.description': 'Uma abordagem holística que combina estratégia, pessoas e execução para resultados sustentáveis.',
    'framework.strategy.title': 'Estratégia Digital',
    'framework.strategy.description': 'Definição clara de objetivos, roadmap e métricas de sucesso alinhadas com a visão organizacional.',
    'framework.people.title': 'Capacitação de Pessoas',
    'framework.people.description': 'Desenvolvimento de competências digitais e criação de uma cultura de inovação e adaptabilidade.',
    'framework.execution.title': 'Execução Ágil',
    'framework.execution.description': 'Implementação iterativa com foco em resultados rápidos e melhoria contínua.',
    'framework.benefits.title': 'Benefícios Comprovados',
    'framework.benefits.subtitle': 'Resultados tangíveis em organizações que implementaram o DX³ Framework',
    'framework.benefits.alignment': 'Alinhamento estratégico entre tecnologia e negócio',
    'framework.benefits.efficiency': 'Aumento de 40% na eficiência operacional',
    'framework.benefits.innovation': 'Aceleração do tempo de inovação em 60%',
    'framework.benefits.scalability': 'Escalabilidade sustentável dos processos digitais',
    'framework.benefits.measurement': 'Métricas claras de ROI e impacto organizacional',
    'framework.benefits.culture': 'Transformação cultural duradoura',
    'framework.implementation.title': 'Implementação Personalizada',
    'framework.implementation.description': 'Cada organização é única. O DX³ Framework é adaptado às suas necessidades específicas, garantindo resultados alinhados com a sua realidade.',
    'framework.implementation.cta': 'Implementar na Minha Organização',
    
    // Blog
    'blog.title': 'Blog',
    'blog.description': 'Pensamentos e insights sobre transformação digital e liderança',
    'blog.hero.title': 'Pensamentos & Insights',
    'blog.hero.subtitle': 'Reflexões sobre transformação digital, liderança e inovação organizacional',
    'blog.featured': 'Artigo em Destaque',
    'blog.readMore': 'Ler Artigo Completo',
    'blog.read': 'Ler',
    'blog.share': 'Partilhar',
    'blog.backToBlog': 'Voltar ao Blog',
    'blog.categories.all': 'Todos',
    'blog.categories.strategy': 'Estratégia',
    'blog.categories.leadership': 'Liderança',
    'blog.categories.innovation': 'Inovação',
    'blog.categories.technology': 'Tecnologia',
    'blog.newsletter.title': 'Receba Insights Exclusivos',
    'blog.newsletter.description': 'Subscreva para receber os meus pensamentos mais recentes diretamente no seu email.',
    'blog.newsletter.cta': 'Subscrever Newsletter',
    'blog.author.description': 'Especialista em transformação digital com mais de 10 anos de experiência a liderar mudanças organizacionais.',
    'blog.author.learnMore': 'Saber Mais',
    'blog.author.connect': 'Conectar',
    'blog.locale': 'pt-PT',
    'blog.posts.digital2025.title': 'Transformação Digital em 2025: O Que Mudou?',
    'blog.posts.digital2025.excerpt': 'Uma análise profunda das tendências que estão a redefinir a transformação digital e como as organizações se podem preparar.',
    'blog.posts.digital2025.content': 'A transformação digital em 2025 já não é uma questão de "se", mas de "como" e "quão rápido". As organizações que sobreviveram aos últimos anos aprenderam lições valiosas sobre adaptabilidade, resiliência e a importância da tecnologia como habilitador de negócio.\n\nObservamos três mudanças fundamentais: primeiro, a democratização da inteligência artificial está a permitir que empresas de todos os tamanhos acedam a capacidades antes reservadas aos gigantes tecnológicos. Segundo, a sustentabilidade digital tornou-se um imperativo, não apenas uma opção. Terceiro, a experiência do colaborador tornou-se tão crítica quanto a experiência do cliente.\n\nO desafio agora é integrar estas três dimensões numa estratégia coerente que gere valor real. As organizações bem-sucedidas são aquelas que conseguem equilibrar inovação com estabilidade, velocidade com qualidade, e automatização com humanização.',
    'blog.posts.agileLeadership.title': 'Liderança Ágil: Mais Que Uma Metodologia',
    'blog.posts.agileLeadership.excerpt': 'Como a liderança ágil transcende frameworks e se torna uma filosofia de gestão adaptativa.',
    'blog.posts.innovation.title': 'Inovação Organizacional: Do Conceito à Realidade',
    'blog.posts.innovation.excerpt': 'Estratégias práticas para criar uma cultura de inovação sustentável em organizações tradicionais.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.framework': 'Framework',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Alexandre Leonardo',
    'hero.subtitle': 'Program Manager | Digital Transformation & Strategic Innovation',
    'hero.description': 'Making digital experiences simpler, more agile and people-centered',
    'hero.about': 'About me',
    'hero.projects': 'View Projects',
    
    // Journey Section
    'journey.title': 'My Journey',
    'journey.subtitle': 'From engineer to digital transformation leader',
    'journey.technical.title': 'Solid Technical Foundation',
    'journey.technical.description': 'Started as an engineer, developing deep understanding of technical systems and processes.',
    'journey.strategic.title': 'Strategic Vision',
    'journey.strategic.description': 'Evolved to leadership positions, focusing on digital transformation and organizational innovation.',
    'journey.impact.title': 'Real Impact',
    'journey.impact.description': 'Today I lead programs that generate significant changes in organizations.',
    
    // Indicators
    'indicators.projects': 'Completed Projects',
    'indicators.teams': 'Teams Led',
    'indicators.experience': 'Years of Experience',
    'indicators.certifications': 'Certifications',
    
    // About
    'about.title': 'About Me',
    'about.hero.title': 'Transforming ideas into reality through technology',
    'about.professional.title': 'Professional Profile',
    'about.professional.description': 'With over a decade of experience in digital transformation, I combine technical expertise with strategic vision to lead initiatives that truly make a difference.',
    
    // Projects
    'projects.title': 'Projects',
    'projects.personal': 'Personal Projects',
    'projects.professional': 'Professional Projects',
    'projects.viewDetails': 'View Details',
    
    // Contact
    'contact.title': 'Let\'s transform ideas into concrete results',
    'contact.description': 'If you\'re facing digital transformation challenges or looking to accelerate innovation in your organization, let\'s talk.',
    'contact.cta': 'Start Conversation',
    'contact.email.title': 'Direct Email',
    'contact.email.description': 'Quick response for specific questions',
    'contact.email.cta': 'Send Email',
    'contact.linkedin.title': 'LinkedIn',
    'contact.linkedin.description': 'Connect for professional networking',
    'contact.linkedin.cta': 'Connect',
    'contact.consultation.title': 'Consultation',
    'contact.consultation.description': 'Strategic discussion for complex projects',
    'contact.consultation.cta': 'Schedule',
    
    // Footer
    'footer.description': 'Digital transformation and strategic innovation specialist, creating solutions that generate real impact in organizations.',
    'footer.navigation': 'Navigation',
    'footer.specialties': 'Specialties',
    'footer.specialty.digital': 'Digital Transformation',
    'footer.specialty.programs': 'Program Management',
    'footer.specialty.innovation': 'Strategic Innovation',
    'footer.specialty.architecture': 'Process Architecture',
    'footer.contact.title': 'Let\'s talk?',
    'footer.contact.description': 'Interested in collaborating or learning more about my work?',
    'footer.contact.cta': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.developed': 'Developed with',
    
    // Framework
    'framework.title': 'Framework',
    'framework.description': 'Proprietary methodology for effective digital transformation',
    'framework.badge': 'Exclusive Methodology',
    'framework.hero.title': 'DX³ Framework',
    'framework.hero.subtitle': 'Digital Experience Excellence - The methodology that transforms organizations',
    'framework.cta.download': 'Download Framework',
    'framework.cta.learn': 'Learn More',
    'framework.overview.title': 'The 3 Pillars of DX³',
    'framework.overview.description': 'A holistic approach that combines strategy, people and execution for sustainable results.',
    'framework.strategy.title': 'Digital Strategy',
    'framework.strategy.description': 'Clear definition of objectives, roadmap and success metrics aligned with organizational vision.',
    'framework.people.title': 'People Empowerment',
    'framework.people.description': 'Development of digital skills and creation of a culture of innovation and adaptability.',
    'framework.execution.title': 'Agile Execution',
    'framework.execution.description': 'Iterative implementation focused on quick results and continuous improvement.',
    'framework.benefits.title': 'Proven Benefits',
    'framework.benefits.subtitle': 'Tangible results in organizations that implemented the DX³ Framework',
    'framework.benefits.alignment': 'Strategic alignment between technology and business',
    'framework.benefits.efficiency': '40% increase in operational efficiency',
    'framework.benefits.innovation': '60% acceleration in innovation time',
    'framework.benefits.scalability': 'Sustainable scalability of digital processes',
    'framework.benefits.measurement': 'Clear ROI and organizational impact metrics',
    'framework.benefits.culture': 'Lasting cultural transformation',
    'framework.implementation.title': 'Customized Implementation',
    'framework.implementation.description': 'Every organization is unique. The DX³ Framework is adapted to your specific needs, ensuring results aligned with your reality.',
    'framework.implementation.cta': 'Implement in My Organization',
    
    // Blog
    'blog.title': 'Blog',
    'blog.description': 'Thoughts and insights on digital transformation and leadership',
    'blog.hero.title': 'Thoughts & Insights',
    'blog.hero.subtitle': 'Reflections on digital transformation, leadership and organizational innovation',
    'blog.featured': 'Featured Article',
    'blog.readMore': 'Read Full Article',
    'blog.read': 'Read',
    'blog.share': 'Share',
    'blog.backToBlog': 'Back to Blog',
    'blog.categories.all': 'All',
    'blog.categories.strategy': 'Strategy',
    'blog.categories.leadership': 'Leadership',
    'blog.categories.innovation': 'Innovation',
    'blog.categories.technology': 'Technology',
    'blog.newsletter.title': 'Get Exclusive Insights',
    'blog.newsletter.description': 'Subscribe to receive my latest thoughts directly in your email.',
    'blog.newsletter.cta': 'Subscribe Newsletter',
    'blog.author.description': 'Digital transformation specialist with over 10 years of experience leading organizational change.',
    'blog.author.learnMore': 'Learn More',
    'blog.author.connect': 'Connect',
    'blog.locale': 'en-US',
    'blog.posts.digital2025.title': 'Digital Transformation in 2025: What Has Changed?',
    'blog.posts.digital2025.excerpt': 'A deep analysis of trends that are redefining digital transformation and how organizations can prepare.',
    'blog.posts.digital2025.content': 'Digital transformation in 2025 is no longer a question of "if" but "how" and "how fast". Organizations that survived recent years have learned valuable lessons about adaptability, resilience, and the importance of technology as a business enabler.\n\nWe observe three fundamental changes: first, the democratization of artificial intelligence is allowing companies of all sizes to access capabilities once reserved for tech giants. Second, digital sustainability has become an imperative, not just an option. Third, employee experience has become as critical as customer experience.\n\nThe challenge now is to integrate these three dimensions into a coherent strategy that generates real value. Successful organizations are those that can balance innovation with stability, speed with quality, and automation with humanization.',
    'blog.posts.agileLeadership.title': 'Agile Leadership: More Than a Methodology',
    'blog.posts.agileLeadership.excerpt': 'How agile leadership transcends frameworks and becomes an adaptive management philosophy.',
    'blog.posts.innovation.title': 'Organizational Innovation: From Concept to Reality',
    'blog.posts.innovation.excerpt': 'Practical strategies to create a sustainable innovation culture in traditional organizations.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'pt' | 'en';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: 'pt' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};