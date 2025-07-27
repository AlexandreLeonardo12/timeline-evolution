import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Tag, User, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  {
    id: 'portfolio-website',
    title: 'Portfolio Pessoal com IA',
    subtitle: 'Desenvolvedor & Product Owner',
    description: 'Website de portfólio desenvolvido através de vibe-coding com agentes de IA, explorando ferramentas modernas de desenvolvimento e democratização da programação.',
    type: 'personal',
    status: 'in-progress',
    year: '2024',
    challenge: 'Criar um website profissional moderno sem conhecimentos avançados de programação, explorando o potencial dos agentes de IA no desenvolvimento web.',
    solution: 'Utilização de múltiplos agentes de IA (Lovable, Devin.ai, ChatGPT Agent, Manus) para desenvolvimento iterativo, combinado com estudos de mercado para soluções open-source e implementação moderna.',
    results: [
      'Website completamente funcional e moderno',
      'Experiência prática com 4+ agentes de IA',
      'Domínio de ferramentas como Vercel e GitHub',
      'Base sólida para futuros projetos de desenvolvimento'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lovable', 'Vercel', 'GitHub'],
    featured: true
  },
  {
    id: 'ai-assisted-pm',
    title: 'AI-Assisted Project Management',
    subtitle: 'Investigador & Implementador',
    description: 'Exploração e implementação de soluções de IA para otimização de processos de gestão de projetos, automação e análise preditiva.',
    type: 'personal',
    status: 'in-progress',
    year: '2024',
    challenge: 'Identificar oportunidades de otimização em processos de gestão de projetos através da implementação estratégica de ferramentas de IA.',
    solution: 'Desenvolvimento de pipeline de automação com integração de APIs de IA, criação de dashboards preditivos e implementação de workflows inteligentes.',
    results: [
      'Redução de 40% no tempo de análise de projetos',
      'Automação de 60% das tarefas repetitivas',
      'Insights preditivos para tomada de decisão',
      'Framework replicável para outras organizações'
    ],
    technologies: ['Python', 'Machine Learning', 'GPT API', 'Power BI', 'Automation'],
    featured: false
  },
  {
    id: 'digital-transformation-platform',
    title: 'Plataforma de Transformação Digital',
    subtitle: 'Product Owner & Líder de Programa',
    description: 'Liderança no desenvolvimento de uma plataforma enterprise para gestão de processos de transformação digital em organizações de grande escala.',
    type: 'professional',
    status: 'completed',
    year: '2023',
    challenge: 'Desenvolver uma plataforma integrada capaz de gerir iniciativas complexas de transformação digital, garantindo escalabilidade e integração com sistemas legados.',
    solution: 'Implementação de arquitetura de microserviços com API Gateway, metodologias ágeis adaptadas ao contexto enterprise e integração estratégica com stakeholders.',
    results: [
      'Redução de 35% no tempo de implementação',
      'Integração com 15+ sistemas legados',
      'Base para uniformização nacional',
      'ROI de 250% no primeiro ano'
    ],
    technologies: ['Microserviços', 'API Gateway', 'React', 'Node.js', 'PostgreSQL', 'Kubernetes'],
    featured: true
  },
  {
    id: 'innovation-lab',
    title: 'Innovation Lab Framework',
    subtitle: 'Arquiteto de Inovação',
    description: 'Framework completo para criação e gestão de laboratórios de inovação, incluindo metodologias, ferramentas e processos measuráveis.',
    type: 'professional',
    status: 'completed',
    year: '2023',
    challenge: 'Estabelecer um framework estruturado para fomentar inovação de forma consistente e mensurável em organizações enterprise.',
    solution: 'Desenvolvimento de metodologia híbrida combinando Design Thinking, Lean Startup e OKRs, com métricas específicas de inovação e processos de governança.',
    results: [
      '12 ideias implementadas com sucesso',
      'Framework adotado por 3+ organizações',
      'ROI médio de 180% por projeto',
      'Redução de 50% no time-to-market'
    ],
    technologies: ['Design Thinking', 'Lean Startup', 'OKRs', 'Innovation Metrics'],
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
          <p className="text-lg text-gray-600">Interessado em saber mais?</p>
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
  );
};

export default Projects;