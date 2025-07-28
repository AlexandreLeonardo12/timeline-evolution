import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  type: "personal" | "professional";
  status: "completed" | "in-progress" | "planned";
  year: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "ey-irn-prr",
    title: "Projetos Estratégicos IRN - Plano de Recuperação e Resiliência",
    subtitle: "Product Owner & Gestor de Programa | EY",
    description: "Gestão integrada de múltiplos projetos estratégicos do Registo Comercial, supervisionando equipa multidisciplinar.",
    type: "professional",
    status: "in-progress",
    year: "2024-Present",
    challenge: "Gerir múltiplos projetos tecnológicos com impacto institucional e equipas complexas.",
    solution: "Implementação de metodologias ágeis, sessões de ideação e gestão de backlog de produto focado em valor.",
    results: [
      "Supervisão operacional de 31 elementos",
      "Coordenação de fornecedores e alinhamento estratégico",
    ],
    technologies: ["Miro", "Product Management", "Agile Methodologies", "Stakeholder Management"],
    featured: true,
  },
  {
    id: "wrightia-irn-rc",
    title: "Projetos Estratégicos Registo Comercial",
    subtitle: "Gestor de Projetos | Wrightia",
    description: "Gestão de projetos estratégicos do Registo Comercial com equipas de 36 elementos e implementação do EOL 2.0.",
    type: "professional",
    status: "completed",
    year: "2022-2024",
    challenge: "Articular área de negócio com equipas de desenvolvimento e alinhar soluções tecnológicas.",
    solution: "Gestão integral do ciclo de vida dos projetos com implementação do EOL 2.0 e facilitação de sessões de trabalho.",
    results: [
      "Implementação do EOL 2.0",
      "Digitalização e simplificação de processos",
    ],
    technologies: ["OpenProject", "MS Project", "Bizagi", "Camunda", "Excel Avançado"],
    featured: true,
  },
  {
    id: "smartvision-munlab",
    title: "Observatório de Transformação Digital - MunLab",
    subtitle: "Business Development Manager | SmartVision",
    description: "Liderança de projeto de transformação digital de 150.000€ para a CIMAA e municípios associados.",
    type: "professional",
    status: "completed",
    year: "2019-2022",
    challenge: "Implementar transformação digital estruturada em múltiplos municípios.",
    solution: "Análise de requisitos, gestão orçamental e implementação de soluções de modernização administrativa.",
    results: [
      "Modernização de vários municípios",
      "ROI superior às expectativas",
    ],
    technologies: ["Power BI", "Excel", "Process Management", "Digital Transformation"],
    featured: false,
  },
  {
    id: "smartvision-nisa-monforte",
    title: "Modernização Administrativa - Nisa e Monforte",
    subtitle: "Consultor de Modernização | SmartVision",
    description: "Apoio técnico e funcional à modernização administrativa com foco na reorganização interna e transição digital.",
    type: "professional",
    status: "completed",
    year: "2021-2022",
    challenge: "Implementar novos modelos de atendimento e reorganização interna.",
    solution: "Consultoria especializada em modernização com gestão de projeto e acompanhamento.",
    results: [
      "Modernização administrativa completa",
      "Novos modelos de atendimento implementados",
    ],
    technologies: ["Excel", "Process Management", "Project Planning"],
    featured: false,
  },
  {
    id: "smartvision-cimac",
    title: "Práticas de Atendimento - CIMAC (13 Municípios)",
    subtitle: "Business Development Manager | SmartVision",
    description: "Implementação de práticas de atendimento presencial e serviços online para 13 municípios da CIMAC.",
    type: "professional",
    status: "completed",
    year: "2019-2022",
    challenge: "Uniformizar práticas de atendimento e implementar serviços online em 13 municípios.",
    solution: "Reengenharia de processos de front-office e back-office com modelação BPMN e implementação de soluções digitais.",
    results: [
      "Atendimento uniformizado e serviços online",
      "Processos otimizados e documentados",
    ],
    technologies: ["BPMN", "Bonita Studio", "Word", "Excel"],
    featured: false,
  },
  {
    id: "smartvision-lajes-pico",
    title: "Atendimento Multicanal - Lajes do Pico",
    subtitle: "Consultor & Gestor de Projeto | SmartVision",
    description: "Implementação de modelo de atendimento multicanal no projeto 'Lajes do Pico +Perto dos Munícipes'.",
    type: "professional",
    status: "completed",
    year: "2020-2022",
    challenge: "Desenvolver modelo de atendimento multicanal adaptado às necessidades locais.",
    solution: "Gestão completa de projeto, incluindo calendarização e entrega de marcos.",
    results: [
      "Modelo multicanal implementado",
      "Satisfação dos cidadãos elevada",
    ],
    technologies: ["BPMN", "Bonita Studio", "Word", "Excel"],
    featured: false,
  },
  {
    id: "smartvision-madalena-pico",
    title: "Transformação Digital - Madalena do Pico",
    subtitle: "Consultor & Gestor de Projeto | SmartVision",
    description: "Transformação digital dos serviços municipais de Madalena do Pico com foco na disponibilização online.",
    type: "professional",
    status: "completed",
    year: "2020-2022",
    challenge: "Transformar digitalmente os serviços municipais e melhorar o atendimento.",
    solution: "Gestão de projeto focada em planeamento, reporte e monitorização da execução.",
    results: [
      "Serviços online implementados",
      "Atendimento modernizado",
    ],
    technologies: ["BPMN", "Bonita Studio", "Word", "Excel"],
    featured: false,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Pessoal com IA",
    subtitle: "Desenvolvedor & Product Owner",
    description: "Website de portfólio criado com ferramentas modernas de vibe-coding e agentes de IA.",
    type: "personal",
    status: "in-progress",
    year: "2024",
    challenge: "Criar um website profissional sem conhecimentos avançados de programação.",
    solution: "Utilização de agentes de IA para desenvolvimento iterativo e pesquisa de soluções open-source.",
    results: [
      "Website funcional e moderno",
      "Experiência prática com agentes de IA",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel", "GitHub"],
    featured: false,
  },
  {
    id: "ai-assisted-pm",
    title: "AI-Assisted Project Management",
    subtitle: "Investigador & Implementador",
    description: "Exploração de IA para otimização de processos de gestão de projetos.",
    type: "personal",
    status: "in-progress",
    year: "2024",
    challenge: "Identificar oportunidades de otimização através de IA.",
    solution: "Desenvolvimento de pipeline de automação com integração de APIs de IA e dashboards preditivos.",
    results: [
      "Redução de 40% no tempo de análise",
      "Automação de 60% das tarefas repetitivas",
    ],
    technologies: ["Python", "Machine Learning", "GPT API", "Power BI", "Automation"],
    featured: false,
  },
];

const Projects = () => {
  const personalProjects = projects.filter((p) => p.type === "personal");
  const professionalProjects = projects.filter((p) => p.type === "professional");

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {project.type === "personal" ? (
                <User className="h-4 w-4 text-blue-600" />
              ) : (
                <Briefcase className="h-4 w-4 text-green-600" />
              )}
              <Badge variant={project.type === "personal" ? "default" : "secondary"} className="text-xs">
                {project.type === "personal" ? "Pessoal" : "Profissional"}
              </Badge>
              {project.featured && (
                <Badge variant="outline" className="text-xs border-orange-300 text-orange-600">
                  Destaque
                </Badge>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{project.subtitle}</p>
          </div>
          <div className="text-right">
            <Badge
              variant={project.status === "completed" ? "default" : "secondary"}
              className={`text-xs mb-2 ${
                project.status === "completed"
                  ? "bg-green-100 text-green-800 border-green-200 dark:bg-green-200 dark:text-green-900"
                  : "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-200 dark:text-yellow-900"
              }`}
            >
              {project.status === "completed" ? "Concluído" : "Em Progresso"}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="h-3 w-3" />
              {project.year}
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-red-500 dark:bg-red-400" />
            </div>
            <h4 className="font-medium text-gray-900 dark:text-gray-100">Desafio</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{project.challenge}</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
            </div>
            <h4 className="font-medium text-gray-900 dark:text-gray-100">Solução</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{project.solution}</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
            </div>
            <h4 className="font-medium text-gray-900 dark:text-gray-100">Resultados</h4>
          </div>
          <ul className="space-y-1">
            {project.results.slice(0, 3).map((result, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                <CheckCircle className="w-3 h-3 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700">
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
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white">
              Ver detalhes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">Projetos</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Casos de estudo que demonstram experiência em transformação digital e exploração tecnológica
          </p>
        </div>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-green-600 dark:text-green-400" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Projetos Profissionais</h2>
            <div className="h-px bg-gradient-to-r from-green-300 to-transparent dark:from-green-700 flex-1" />
          </div>
          <div className="space-y-8">
            {professionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Projetos Pessoais</h2>
            <div className="h-px bg-gradient-to-r from-blue-300 to-transparent dark:from-blue-700 flex-1" />
          </div>
          <div className="space-y-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <div className="text-center space-y-4">
          <p className="text-lg text-gray-600 dark:text-gray-300">Interessado em colaborar?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white">Entrar em Contacto</Button>
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
