import { useParams, Link, Navigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, User, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

// This would normally come from an API or data file
const projectData: { [key: string]: any } = {
  'portfolio-website': {
    id: 'portfolio-website',
    title: 'Portfolio Pessoal com IA',
    subtitle: 'Desenvolvedor & Product Owner',
    description: 'Website de portfólio desenvolvido através de vibe-coding com agentes de IA, explorando ferramentas modernas de desenvolvimento e democratização da programação.',
    type: 'personal',
    status: 'in-progress',
    year: '2024',
    featured: true,
    overview: 'Este projeto representa uma exploração profunda no mundo do desenvolvimento assistido por IA. Como gestor de projetos e PO sem background técnico avançado, utilizei múltiplos agentes de IA para criar um website completo e profissional. A jornada incluiu experimentação com Lovable, Devin.ai, ChatGPT Agent e Manus, cada um com as suas forças específicas. O projeto também envolveu estudos de mercado para identificar as melhores soluções open-source, configuração de CI/CD com Vercel e GitHub, e experiência hands-on com Git. Esta experiência demonstra como a IA pode democratizar o desenvolvimento web e permitir que profissionais de outras áreas criem soluções tecnológicas robustas.',
    challenge: 'Criar um website profissional moderno sem conhecimentos avançados de programação, explorando o potencial dos agentes de IA no desenvolvimento web.',
    solution: 'Utilização estratégica de múltiplos agentes de IA para diferentes tarefas: Lovable para prototipagem rápida e iteração de design, Devin.ai para resolução de problemas complexos, ChatGPT Agent para consultoria arquitetural, e Manus para optimizações específicas.',
    results: [
      'Website completamente funcional e responsivo',
      'Experiência prática com 4+ agentes de IA diferentes',
      'Domínio de ferramentas modernas (Vercel, GitHub, Git)',
      'Framework replicável para futuros projetos',
      'Base sólida de conhecimento em desenvolvimento web'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lovable', 'Devin.ai', 'ChatGPT Agent', 'Manus', 'Vercel', 'GitHub', 'Git'],
    methodology: [
      {
        phase: 'Investigação e Planeamento',
        description: 'Estudos de mercado para identificar as melhores ferramentas de IA para desenvolvimento web e análise de soluções open-source.'
      },
      {
        phase: 'Prototipagem com IA',
        description: 'Utilização de Lovable para criação rápida de protótipos e iteração de design, estabelecendo a base visual e funcional.'
      },
      {
        phase: 'Desenvolvimento Assistido',
        description: 'Implementação de funcionalidades complexas com Devin.ai e optimização de código com múltiplos agentes.'
      },
      {
        phase: 'Deployment e Optimização',
        description: 'Configuração de CI/CD com Vercel, implementação de best practices e optimização de performance.'
      }
    ],
    impact: [
      {
        metric: '100%',
        label: 'Funcionalidade Alcançada',
        description: 'Website completamente funcional sem conhecimento prévio de programação'
      },
      {
        metric: '4+',
        label: 'Agentes de IA Utilizados',
        description: 'Experiência hands-on com múltiplas ferramentas de IA'
      },
      {
        metric: '80%',
        label: 'Redução de Tempo',
        description: 'Comparado com desenvolvimento tradicional'
      }
    ],
    learnings: [
      'A importância da iteração rápida no desenvolvimento moderno',
      'Como diferentes agentes de IA têm pontos fortes específicos',
      'O valor de um design system consistente e bem estruturado',
      'A relevância de ferramentas open-source na criação de soluções',
      'Como a IA pode democratizar o acesso ao desenvolvimento tecnológico',
      'A importância de entender os fundamentos mesmo quando se usa IA'
    ],
    nextSteps: [
      'Implementação de analytics avançados',
      'Integração com CMS para gestão de conteúdo',
      'Desenvolvimento de funcionalidades interativas',
      'Criação de tutoriais sobre vibe-coding'
    ]
  },
  'digital-transformation-platform': {
    id: 'digital-transformation-platform',
    title: 'Plataforma de Transformação Digital',
    subtitle: 'Product Owner & Líder de Programa',
    description: 'Liderança no desenvolvimento de uma plataforma enterprise para gestão de processos de transformação digital em organizações de grande escala.',
    type: 'professional',
    status: 'completed',
    year: '2023',
    featured: true,
    overview: 'Projeto de larga escala focado na criação de uma plataforma integrada para gestão de iniciativas de transformação digital em organizações enterprise. O projeto envolveu a coordenação de equipas multidisciplinares, arquitetura de microserviços complexa, integração com múltiplos sistemas legados e implementação de metodologias ágeis adaptadas ao contexto enterprise.',
    challenge: 'Desenvolver uma plataforma integrada capaz de gerir iniciativas complexas de transformação digital, garantindo escalabilidade, performance e integração com sistemas legados críticos.',
    solution: 'Implementação de arquitetura de microserviços com API Gateway centralizado, metodologias ágeis SAFe adaptadas ao contexto enterprise, e estratégia de integração faseada com stakeholders internos e externos.',
    results: [
      'Redução de 35% no tempo de implementação de projetos',
      'Integração bem-sucedida com 15+ sistemas legados',
      'Base tecnológica para uniformização nacional',
      'ROI de 250% no primeiro ano de operação',
      'Framework replicável para outras organizações'
    ],
    technologies: ['Microserviços', 'API Gateway', 'React', 'Node.js', 'PostgreSQL', 'Kubernetes', 'Docker', 'Azure', 'TOGAF', 'SAFe'],
    methodology: [
      {
        phase: 'Análise e Arquitetura',
        description: 'Levantamento completo de requisitos e design da arquitetura de microserviços com foco em escalabilidade.'
      },
      {
        phase: 'Desenvolvimento Ágil',
        description: 'Implementação using metodologia SAFe com sprints de 2 semanas e entregas incrementais.'
      },
      {
        phase: 'Integração Faseada',
        description: 'Integração gradual com sistemas legados minimizando riscos operacionais.'
      },
      {
        phase: 'Deployment e Monitoring',
        description: 'Deployment em ambiente cloud com monitoring contínuo e métricas de performance.'
      }
    ],
    impact: [
      {
        metric: '35%',
        label: 'Redução de Tempo',
        description: 'Diminuição no tempo de implementação de projetos'
      },
      {
        metric: '15+',
        label: 'Sistemas Integrados',
        description: 'Sistemas legados integrados com sucesso'
      },
      {
        metric: '250%',
        label: 'ROI',
        description: 'Return on Investment no primeiro ano'
      }
    ],
    learnings: [
      'A importância da arquitetura modular em projetos enterprise',
      'O valor da comunicação clara entre equipas distribuídas',
      'Como equilibrar inovação tecnológica com estabilidade operacional',
      'A relevância de métricas orientadas a resultados de negócio'
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/projects">
            <Button variant="ghost" className="group text-blue-600 hover:text-blue-700">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Voltar aos Projetos
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {project.type === 'personal' ? (
                  <User className="h-5 w-5 text-blue-600" />
                ) : (
                  <Briefcase className="h-5 w-5 text-green-600" />
                )}
                <Badge 
                  variant={project.type === 'personal' ? 'default' : 'secondary'}
                  className="text-sm bg-blue-100 text-blue-800 border-blue-200"
                >
                  {project.type === 'personal' ? 'Projeto Pessoal' : 'Projeto Profissional'}
                </Badge>
                {project.featured && (
                  <Badge variant="outline" className="text-sm border-orange-300 text-orange-600">
                    Projeto Destaque
                  </Badge>
                )}
                <Badge 
                  variant={project.status === 'completed' ? 'default' : 'secondary'}
                  className={`text-sm ${
                    project.status === 'completed' 
                      ? 'bg-green-100 text-green-800 border-green-200' 
                      : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                  }`}
                >
                  {project.status === 'completed' ? 'Concluído' : 'Em Progresso'}
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {project.title}
              </h1>
              
              <p className="text-lg font-medium text-blue-600">
                {project.subtitle}
              </p>

              <p className="text-gray-600 text-base">
                {project.year}
              </p>
              
              <p className="text-gray-700 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.githubUrl && (
              <Button variant="outline" className="group">
                <Github className="mr-2 h-4 w-4" />
                Ver no GitHub
                <ExternalLink className="ml-2 h-3 w-3 opacity-50 group-hover:opacity-100" />
              </Button>
            )}
            {project.liveUrl && (
              <Button className="group bg-blue-600 hover:bg-blue-700">
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Projeto Live
              </Button>
            )}
          </div>
        </div>

        {/* Overview */}
        {project.overview && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Visão Geral</h2>
            <p className="text-gray-700 leading-relaxed">
              {project.overview}
            </p>
          </div>
        )}

        {/* Challenge, Solution, Results Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Challenge */}
          <div className="bg-red-50 rounded-lg border border-red-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Desafio</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-blue-50 rounded-lg border border-blue-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Solução</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Results */}
          <div className="bg-green-50 rounded-lg border border-green-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Resultados</h3>
            </div>
            <ul className="space-y-2">
              {project.results?.slice(0, 4).map((result: string, index: number) => (
                <li key={index} className="text-gray-700 flex items-start gap-2 text-sm">
                  <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tecnologias e Metodologias</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech: string) => (
              <Badge key={tech} variant="outline" className="text-sm bg-blue-50 text-blue-700 border-blue-200">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Methodology (if exists) */}
        {project.methodology && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Implementação Detalhada</h2>
            <div className="space-y-6">
              {project.methodology.map((phase: any, index: number) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Impact Metrics (if exists) */}
        {project.impact && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Impacto Quantificado</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.impact.map((metric: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{metric.metric}</div>
                  <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Learnings */}
        {project.learnings && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Aprendizagens</h2>
            <ul className="space-y-3">
              {project.learnings.map((learning: string, index: number) => (
                <li key={index} className="text-gray-700 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Next Steps (if exists) */}
        {project.nextSteps && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Próximos Passos</h2>
            <ul className="space-y-2">
              {project.nextSteps.map((step: string, index: number) => (
                <li key={index} className="text-gray-700 flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-600">Interessado em projetos similares?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button variant="outline" className="group">
                Ver Outros Projetos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Entrar em Contacto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;