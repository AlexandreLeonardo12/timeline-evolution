import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Tag, User, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  type: 'personal' | 'professional';
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned';
  year: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Pessoal com IA',
    description: 'Website de portfólio desenvolvido através de vibe-coding com agentes de IA, explorando ferramentas modernas de desenvolvimento.',
    longDescription: 'Este projeto representa uma exploração profunda no mundo do desenvolvimento assistido por IA. Utilizando ferramentas como Lovable, Devin.ai, ChatGPT Agent e Manus, foi possível criar um website completo sem conhecimentos avançados de programação. O projeto incluiu estudos de mercado para soluções open-source, implementação com Vercel e GitHub, e experiência hands-on com Git. Uma jornada que demonstra como a IA pode democratizar o desenvolvimento web.',
    type: 'personal',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lovable', 'Vercel', 'GitHub'],
    status: 'in-progress',
    year: '2024',
    liveUrl: 'https://alexandreleonardo.pt',
    featured: true
  },
  {
    id: 'digital-transformation-platform',
    title: 'Plataforma de Transformação Digital',
    description: 'Liderança no desenvolvimento de uma plataforma enterprise para gestão de processos de transformação digital.',
    longDescription: 'Projeto de larga escala focado na criação de uma plataforma integrada para gestão de iniciativas de transformação digital em organizações enterprise. Incluiu arquitetura de microserviços, integração com sistemas legados e implementação de metodologias ágeis.',
    type: 'professional',
    technologies: ['Microserviços', 'API Gateway', 'React', 'Node.js', 'PostgreSQL', 'Kubernetes'],
    status: 'completed',
    year: '2023',
    featured: true
  },
  {
    id: 'innovation-lab',
    title: 'Innovation Lab Framework',
    description: 'Framework para criação e gestão de laboratórios de inovação em organizações.',
    longDescription: 'Desenvolvimento de um framework completo para estabelecer e gerir laboratórios de inovação. Inclui metodologias, ferramentas e processos para fomentar a inovação de forma estruturada e measurável.',
    type: 'professional',
    technologies: ['Design Thinking', 'Lean Startup', 'OKRs', 'Innovation Metrics'],
    status: 'completed',
    year: '2023'
  },
  {
    id: 'ai-assisted-pm',
    title: 'AI-Assisted Project Management',
    description: 'Exploração de ferramentas de IA para otimização de processos de gestão de projetos.',
    longDescription: 'Projeto de investigação e implementação de soluções de IA para automatizar e otimizar processos de gestão de projetos. Inclui análise preditiva, automação de tarefas repetitivas e insights baseados em dados.',
    type: 'personal',
    technologies: ['Python', 'Machine Learning', 'GPT API', 'Power BI', 'Automation'],
    status: 'in-progress',
    year: '2024'
  }
];

const Projects = () => {
  const personalProjects = projects.filter(p => p.type === 'personal');
  const professionalProjects = projects.filter(p => p.type === 'professional');

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:shadow-elegant border-0 bg-gradient-to-br from-card/50 to-card backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
      
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {project.type === 'personal' ? (
                <User className="h-4 w-4 text-timeline-primary" />
              ) : (
                <Briefcase className="h-4 w-4 text-timeline-completed" />
              )}
              <Badge 
                variant={project.type === 'personal' ? 'default' : 'secondary'}
                className="text-xs"
              >
                {project.type === 'personal' ? 'Pessoal' : 'Profissional'}
              </Badge>
              {project.featured && (
                <Badge variant="outline" className="text-xs border-timeline-primary text-timeline-primary">
                  Destaque
                </Badge>
              )}
            </div>
            <CardTitle className="text-xl group-hover:text-timeline-primary transition-colors duration-300">
              {project.title}
            </CardTitle>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {project.year}
          </div>
        </div>
        
        <CardDescription className="text-sm leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <Badge 
            variant={project.status === 'completed' ? 'default' : 'secondary'}
            className="text-xs"
          >
            {project.status === 'completed' ? 'Concluído' : 
             project.status === 'in-progress' ? 'Em Progresso' : 'Planeado'}
          </Badge>

          <div className="flex gap-2">
            {project.githubUrl && (
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Github className="h-4 w-4" />
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
            <Link to={`/projects/${project.id}`}>
              <Button size="sm" variant="outline" className="text-xs h-8">
                Ver Detalhes
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Projetos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma visão dos projetos que tenho desenvolvido, desde iniciativas pessoais de exploração 
            tecnológica até implementações enterprise de transformação digital.
          </p>
        </div>

        {/* Professional Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-timeline-completed" />
            <h2 className="text-2xl font-semibold">Projetos Profissionais</h2>
            <div className="h-px bg-gradient-to-r from-timeline-completed/50 to-transparent flex-1" />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {professionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Personal Projects */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <User className="h-6 w-6 text-timeline-primary" />
            <h2 className="text-2xl font-semibold">Projetos Pessoais</h2>
            <div className="h-px bg-gradient-to-r from-timeline-primary/50 to-transparent flex-1" />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link to="/">
            <Button variant="outline" size="lg" className="group">
              Voltar ao Início
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;