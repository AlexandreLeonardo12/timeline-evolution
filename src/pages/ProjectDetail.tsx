import { useParams, Link, Navigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, User, Briefcase } from 'lucide-react';

// This would normally come from an API or data file
const projectData: { [key: string]: any } = {
  'portfolio-website': {
    id: 'portfolio-website',
    title: 'Portfolio Pessoal com IA',
    description: 'Website de portfólio desenvolvido através de vibe-coding com agentes de IA, explorando ferramentas modernas de desenvolvimento.',
    longDescription: 'Este projeto representa uma exploração profunda no mundo do desenvolvimento assistido por IA. Utilizando ferramentas como Lovable, Devin.ai, ChatGPT Agent e Manus, foi possível criar um website completo sem conhecimentos avançados de programação. O projeto incluiu estudos de mercado para soluções open-source, implementação com Vercel e GitHub, e experiência hands-on com Git. Uma jornada que demonstra como a IA pode democratizar o desenvolvimento web.',
    type: 'personal',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lovable', 'Vercel', 'GitHub'],
    status: 'in-progress',
    year: '2024',
    liveUrl: 'https://alexandreleonardo.pt',
    featured: true,
    challenges: [
      'Aprender desenvolvimento web sem background técnico',
      'Integrar múltiplas ferramentas de IA de forma eficiente',
      'Criar um design profissional e moderno',
      'Implementar um sistema de deployment automatizado'
    ],
    solutions: [
      'Utilização de ferramentas de vibe-coding para acelerar o desenvolvimento',
      'Experimentação com diferentes agentes de IA para tarefas específicas',
      'Implementação de um design system consistente',
      'Configuração de CI/CD com Vercel e GitHub'
    ],
    learnings: [
      'A importância da iteração rápida no desenvolvimento',
      'Como a IA pode democratizar o acesso ao desenvolvimento',
      'A relevância de um bom design system',
      'O valor de ferramentas open-source na criação de soluções'
    ]
  },
  'digital-transformation-platform': {
    id: 'digital-transformation-platform',
    title: 'Plataforma de Transformação Digital',
    description: 'Liderança no desenvolvimento de uma plataforma enterprise para gestão de processos de transformação digital.',
    longDescription: 'Projeto de larga escala focado na criação de uma plataforma integrada para gestão de iniciativas de transformação digital em organizações enterprise. Incluiu arquitetura de microserviços, integração com sistemas legados e implementação de metodologias ágeis.',
    type: 'professional',
    technologies: ['Microserviços', 'API Gateway', 'React', 'Node.js', 'PostgreSQL', 'Kubernetes'],
    status: 'completed',
    year: '2023',
    featured: true,
    challenges: [
      'Integração com sistemas legados complexos',
      'Arquitetura escalável para múltiplas organizações',
      'Gestão de equipas distribuídas',
      'Implementação de métricas de sucesso'
    ],
    solutions: [
      'Arquitetura de microserviços com API Gateway',
      'Implementação de padrões de integração robustos',
      'Metodologias ágeis adaptadas ao contexto enterprise',
      'Dashboard de métricas em tempo real'
    ],
    learnings: [
      'A importância da arquitetura na escalabilidade',
      'O valor da comunicação clara em projetos complexos',
      'Como equilibrar inovação com estabilidade',
      'A relevância de métricas orientadas a resultados'
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/projects">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Voltar aos Projetos
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12 space-y-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {project.type === 'personal' ? (
                  <User className="h-5 w-5 text-timeline-primary" />
                ) : (
                  <Briefcase className="h-5 w-5 text-timeline-completed" />
                )}
                <Badge 
                  variant={project.type === 'personal' ? 'default' : 'secondary'}
                  className="text-sm"
                >
                  {project.type === 'personal' ? 'Projeto Pessoal' : 'Projeto Profissional'}
                </Badge>
                {project.featured && (
                  <Badge variant="outline" className="text-sm border-timeline-primary text-timeline-primary">
                    Projeto Destaque
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {project.title}
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl">
                {project.description}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {project.year}
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
              <Button className="group">
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Projeto Live
              </Button>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="border-0 bg-gradient-to-br from-card/50 to-card backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-timeline-primary" />
                  Visão Geral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Challenges & Solutions */}
            {project.challenges && project.solutions && (
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-0 bg-gradient-to-br from-card/50 to-card backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Desafios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge: string, index: number) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-timeline-primary mt-2 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-card/50 to-card backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Soluções</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.solutions.map((solution: string, index: number) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-timeline-completed mt-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Learnings */}
            {project.learnings && (
              <Card className="border-0 bg-gradient-to-br from-card/50 to-card backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Aprendizagens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.learnings.map((learning: string, index: number) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-primary mt-1.5 flex-shrink-0" />
                        {learning}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status */}
            <Card className="border-0 bg-gradient-to-br from-card/50 to-card backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Estado</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge 
                  variant={project.status === 'completed' ? 'default' : 'secondary'}
                  className="text-sm"
                >
                  {project.status === 'completed' ? 'Concluído' : 
                   project.status === 'in-progress' ? 'Em Progresso' : 'Planeado'}
                </Badge>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card className="border-0 bg-gradient-to-br from-card/50 to-card backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Tecnologias</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;