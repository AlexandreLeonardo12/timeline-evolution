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
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
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