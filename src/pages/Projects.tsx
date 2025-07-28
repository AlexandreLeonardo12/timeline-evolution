import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Tag, User, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCTA from '@/components/ContactCTA';
import SEOHead from '@/components/SEOHead';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'personal' | 'professional';
  status: 'completed' | 'in-progress' | 'planned';
  year: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  featured?: boolean;
}

const projects: Project[] = [
  // Professional Projects - EY
  {
    id: 'ey-irn-prr',
    title: 'Projetos Estratégicos IRN - Plano de Recuperação e Resiliência',
    subtitle: 'Product Owner & Gestor de Programa | EY',
    description: 'Gestão integrada de múltiplos projetos estratégicos do Registo Comercial, supervisionando equipa multidisciplinar de 31 elementos.',
    type: 'professional',
    status: 'in-progress',
    year: '2024-Present',
    challenge: 'Gerir múltiplos projetos com forte componente tecnológica e impacto institucional, coordenando equipas complexas e interdependências entre fornecedores.',
    solution: 'Implementação de metodologias ágeis com sessões de ideação, análise de stakeholders, definição de roadmaps e gestão de backlog de produto com foco em valor.',
    results: [
      'Supervisão operacional de 31 elementos',
      'Coordenação de múltiplos fornecedores',
      'Tradução eficaz de necessidades de negócio',
      'Validação contínua de incrementos de valor'
    ],
    technologies: ['Miro', 'Product Management', 'Agile Methodologies', 'Stakeholder Management'],
    featured: true
  },
  
  // Professional Projects - Wrightia
  {
    id: 'wrightia-irn-rc',
    title: 'Projetos Estratégicos Registo Comercial',
    subtitle: 'Gestor de Projetos | Wrightia',
    description: 'Gestão de projetos estratégicos do Registo Comercial, coordenando equipa de 36 elementos e implementando o EOL 2.0.',
    type: 'professional',
    status: 'completed',
    year: '2022-2024',
    challenge: 'Articular área de negócio com equipas de desenvolvimento, garantindo alinhamento entre objetivos de negócio e soluções tecnológicas.',
    solution: 'Gestão integral do ciclo de vida dos projetos com implementação do EOL 2.0, facilitação de sessões de trabalho e modelação de processos.',
    results: [
      'Implementação bem-sucedida do EOL 2.0',
      'Simplificação e digitalização de processos',
      'Coordenação eficaz de 36 elementos',
      'Alinhamento estratégico entre negócio e tecnologia'
    ],
    technologies: ['OpenProject', 'MS Project', 'Bizagi', 'Camunda', 'Excel Avançado'],
    featured: true
  },

  // Professional Projects - SmartVision
  {
    id: 'smartvision-munlab',
    title: 'Observatório de Transformação Digital - MunLab',
    subtitle: 'Business Development Manager | SmartVision',
    description: 'Liderança do projeto de 150.000€ para transformação digital na CIMAA e municípios associados.',
    type: 'professional',
    status: 'completed',
    year: '2019-2022',
    challenge: 'Implementar transformação digital estruturada em múltiplos municípios com diferentes níveis de maturidade tecnológica.',
    solution: 'Análise de requisitos, gestão orçamental, apoio ao procurement e implementação de soluções de modernização administrativa.',
    results: [
      'Projeto de 150.000€ executado com sucesso',
      'Modernização de múltiplos municípios',
      'Framework replicável desenvolvido',
      'ROI superior às expectativas'
    ],
    technologies: ['Power BI', 'Excel', 'Process Management', 'Digital Transformation'],
    featured: false
  },

  {
    id: 'smartvision-nisa-monforte',
    title: 'Modernização Administrativa - Nisa e Monforte',
    subtitle: 'Consultor de Modernização | SmartVision',
    description: 'Apoio técnico e funcional à modernização administrativa com foco na reorganização interna e transição digital.',
    type: 'professional',
    status: 'completed',
    year: '2021-2022',
    challenge: 'Implementar novos modelos de atendimento e reorganização interna em contexto de transformação digital municipal.',
    solution: 'Consultoria especializada em modernização com responsabilidades de gestão de projeto, calendarização e acompanhamento.',
    results: [
      'Modernização administrativa completa',
      'Novos modelos de atendimento implementados',
      'Reorganização interna eficaz',
      'Transição digital bem-sucedida'
    ],
    technologies: ['Excel', 'Process Management', 'Project Planning'],
    featured: false
  },

  {
    id: 'smartvision-cimac',
    title: 'Práticas de Atendimento - CIMAC (13 Municípios)',
    subtitle: 'Business Development Manager | SmartVision',
    description: 'Implementação de práticas de atendimento presencial e serviços online para 13 municípios da CIMAC.',
    type: 'professional',
    status: 'completed',
    year: '2019-2022',
    challenge: 'Uniformizar práticas de atendimento e implementar serviços online em 13 municípios com diferentes realidades operacionais.',
    solution: 'Reengenharia de processos de front-office e back-office com modelação BPMN e implementação de soluções digitais.',
    results: [
      'Atendimento uniformizado em 13 municípios',
      'Serviços online implementados',
      'Processos otimizados e documentados',
      'Eficiência operacional aumentada'
    ],
    technologies: ['BPMN', 'Bonita Studio', 'Word', 'Excel'],
    featured: false
  },

  {
    id: 'smartvision-lajes-pico',
    title: 'Atendimento Multicanal - Lajes do Pico',
    subtitle: 'Consultor & Gestor de Projeto | SmartVision',
    description: 'Implementação do novo modelo de atendimento multicanal no projeto "LAJES DO PICO +PERTO DOS MUNÍCIPES".',
    type: 'professional',
    status: 'completed',
    year: '2020-2022',
    challenge: 'Desenvolver e implementar modelo de atendimento multicanal adaptado às necessidades específicas do município.',
    solution: 'Consultoria especializada com gestão completa de projeto, incluindo calendarização, entrega de marcos e reporte ao executivo.',
    results: [
      'Modelo multicanal implementado',
      'Proximidade aos munícipes aumentada',
      'Eficiência no atendimento melhorada',
      'Satisfação dos cidadãos elevada'
    ],
    technologies: ['BPMN', 'Bonita Studio', 'Word', 'Excel'],
    featured: false
  },

  {
    id: 'smartvision-madalena-pico',
    title: 'Transformação Digital - Madalena do Pico',
    subtitle: 'Consultor & Gestor de Projeto | SmartVision',
    description: 'Implementação do modelo de atendimento e transformação digital no projeto "Madalena do Pico@ Serviços Online".',
    type: 'professional',
    status: 'completed',
    year: '2020-2022',
    challenge: 'Transformar digitalmente os serviços municipais com foco na disponibilização online e melhor atendimento.',
    solution: 'Consultoria de modernização com gestão de projeto focada em planeamento, reporte e monitorização da execução.',
    results: [
      'Serviços online implementados',
      'Transformação digital concluída',
      'Atendimento modernizado',
      'Processos digitalizados'
    ],
    technologies: ['BPMN', 'Bonita Studio', 'Word', 'Excel'],
    featured: false
  },

  // Personal Projects
  {
    id: 'portfolio-website',
    title: 'Portfolio Pessoal com IA',
    subtitle: 'Desenvolvedor & Product Owner',
    description: 'Website de portfólio desenvolvido através de vibe-coding com agentes de IA, explorando ferramentas modernas de desenvolvimento.',
    type: 'personal',
    status: 'in-progress',
    year: '2024',
    challenge: 'Criar um website profissional moderno sem conhecimentos avançados de programação, explorando o potencial dos agentes de IA.',
    solution: 'Utilização de múltiplos agentes de IA para desenvolvimento iterativo, combinado com estudos de mercado para soluções open-source.',
    results: [
      'Website funcional e moderno',
      'Experiência prática com 4+ agentes de IA',
      'Domínio de ferramentas como Vercel e GitHub',
      'Base sólida para futuros projetos'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lovable', 'Vercel', 'GitHub'],
    featured: false
  },

  {
    id: 'ai-assisted-pm',
    title: 'AI-Assisted Project Management',
    subtitle: 'Investigador & Implementador',
    description: 'Exploração e implementação de soluções de IA para otimização de processos de gestão de projetos.',
    type: 'personal',
    status: 'in-progress',
    year: '2024',
    challenge: 'Identificar oportunidades de otimização em processos de gestão através da implementação estratégica de IA.',
    solution: 'Desenvolvimento de pipeline de automação com integração de APIs de IA e criação de dashboards preditivos.',
    results: [
      'Redução de 40% no tempo de análise',
      'Automação de 60% das tarefas repetitivas',
      'Insights preditivos para decisão',
      'Framework replicável desenvolvido'
    ],
    technologies: ['Python', 'Machine Learning', 'GPT API', 'Power BI', 'Automation'],
    featured: false
  }
];

const Projects = () => {
  const personalProjects = projects.filter(p => p.type === 'personal');
  const professionalProjects = projects.filter(p => p.type === 'professional');

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {project.type === 'personal' ? (
                <User className="h-4 w-4 text-blue-600" />
              ) : (
                <Briefcase className="h-4 w-4 text-green-600" />
              )}
              <Badge 
                variant={project.type === 'personal' ? 'default' : 'secondary'}
                className="text-xs"
              >
                {project.type === 'personal' ? 'Pessoal' : 'Profissional'}
              </Badge>
              {project.featured && (
                <Badge variant="outline" className="text-xs border-orange-300 text-orange-600">
                  Destaque
                </Badge>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-blue-600">
              {project.subtitle}
            </p>
          </div>
          <div className="text-right">
            <Badge 
              variant={project.status === 'completed' ? 'default' : 'secondary'}
              className={`text-xs mb-2 ${
                project.status === 'completed' 
                  ? 'bg-green-100 text-green-800 border-green-200' 
                  : 'bg-yellow-100 text-yellow-800 border-yellow-200'
              }`}
            >
              {project.status === 'completed' ? 'Concluído' : 'Em Progresso'}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="h-3 w-3" />
              {project.year}
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-3 gap-6 p-6">
        {/* Desafio */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-red-500" />
            </div>
            <h4 className="font-medium text-gray-900">Desafio</h4>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {project.challenge}
          </p>
        </div>

        {/* Solução */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
            <h4 className="font-medium text-gray-900">Solução</h4>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Resultados */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-green-500" />
            </div>
            <h4 className="font-medium text-gray-900">Resultados</h4>
          </div>
          <ul className="space-y-1">
            {project.results.slice(0, 3).map((result, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
          <Link to={`/projects/${project.id}`}>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Ver detalhes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SEOHead 
        title="Projetos - Alexandre Leonardo | Portfolio Profissional"
        description="Explore os projetos de transformação digital liderados por Alexandre Leonardo. Conheça casos de sucesso em inovação estratégica e desenvolvimento organizacional."
      />
      
      <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Projetos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Casos de estudo que demonstram experiência em transformação digital e exploração tecnológica
          </p>
        </div>

        {/* Professional Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-green-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Projetos Profissionais</h2>
            <div className="h-px bg-gradient-to-r from-green-300 to-transparent flex-1" />
          </div>
          
          <div className="space-y-8">
            {professionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Personal Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <User className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Projetos Pessoais</h2>
            <div className="h-px bg-gradient-to-r from-blue-300 to-transparent flex-1" />
          </div>
          
          <div className="space-y-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-600">Interessado em colaborar?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Entrar em Contacto
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="group">
                Voltar ao Início
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Projects;