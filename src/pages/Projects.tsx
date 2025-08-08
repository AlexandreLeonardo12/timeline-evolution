import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, Project } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

/**
 * Projects page
 *
 * Renders professional and personal projects with translated titles,
 * subtitles and labels. Uses a small internal dictionary for English
 * translations rather than modifying the source data. Provides top
 * padding to prevent the navbar from overlapping the page heading.
 */
const Projects = () => {
  const { language } = useLanguage();

  // Page‑level translation strings
  const labels = {
    title: language === "pt" ? "Projetos" : "Projects",
    subtitle:
      language === "pt"
        ? "Casos de estudo que demonstram experiência em transformação digital e exploração tecnológica"
        : "Case studies demonstrating experience in digital transformation and technological exploration",
    professional: language === "pt" ? "Projetos Profissionais" : "Professional Projects",
    personal: language === "pt" ? "Projetos Pessoais" : "Personal Projects",
    typePersonal: language === "pt" ? "Pessoal" : "Personal",
    typeProfessional: language === "pt" ? "Profissional" : "Professional",
    badgeFeatured: language === "pt" ? "Destaque" : "Featured",
    statusCompleted: language === "pt" ? "Concluído" : "Completed",
    statusInProgress: language === "pt" ? "Em Progresso" : "In Progress",
    challenge: language === "pt" ? "Desafio" : "Challenge",
    solution: language === "pt" ? "Solução" : "Solution",
    results: language === "pt" ? "Resultados" : "Results",
    seeDetails: language === "pt" ? "Ver detalhes" : "See details",
    contactInterest: language === "pt" ? "Interessado em colaborar?" : "Interested in collaborating?",
    contactBtn: language === "pt" ? "Entrar em Contacto" : "Get in touch",
    returnBtn: language === "pt" ? "Voltar ao Início" : "Return to Home",
  };

  // Translations per project. Only English values are specified. When
  // language is Portuguese, original fields from the data are used.
  const projectTranslations: Record<string, Partial<Project>> = {
    "ey-irn-prr": {
      title: "IRN Strategic Projects – PRR",
      subtitle: "Coordinating the digital transformation of public registration systems",
      description:
        "Leading a portfolio of modernisation initiatives across the Portuguese registrations domain, ensuring strategic alignment, architecture design and governance.",
      challenge:
        "Manage a complex multi‑project environment with diverse stakeholders and legal requirements.",
      solution:
        "Implemented agile programme management, a unified digital platform and rigorous governance to deliver outcomes on time and on budget.",
      results: [
        "Expanded digital services and improved efficiency across the registry ecosystem",
        "Reduced processing times and enhanced user satisfaction",
        "Strengthened collaboration among public sector stakeholders",
      ],
    },
    "wrightia-irn-rc": {
      title: "Company Online 2.0",
      subtitle: "Creating companies in minutes",
      description:
        "Launched a digital platform enabling entrepreneurs to create companies fully online with integration across public services.",
      challenge:
        "Modernise legacy processes and design an intuitive user experience for legal incorporation.",
      solution:
        "Developed a new front‑end and back‑office platform with strong integration and security.",
      results: [
        "Companies can now be incorporated in roughly 10 minutes",
        "Streamlined user journey through once‑only data collection",
        "Increased adoption of online company formation",
      ],
    },
    "munlab-cimaa": {
      title: "MunLab – Alto Alentejo Innovation Lab",
      subtitle: "Digital innovation for municipalities",
      description:
        "Delivered a municipal innovation lab platform for the Intermunicipal Community of Alto Alentejo (CIMAA) to unify data and services.",
      challenge:
        "Unify diverse municipal processes and engage multiple councils in a digital initiative.",
      solution:
        "Implemented a shared digital platform, provided training and support to harmonise procedures.",
      results: [
        "Improved service visibility and collaboration across municipalities",
        "Increased digital literacy among staff",
        "Created a foundation for further digital projects",
      ],
    },
    "nisa-monforte": {
      title: "Administrative Modernisation – Nisa & Monforte",
      subtitle: "Transforming local government services",
      description:
        "Redesigned processes and digital services for the municipalities of Nisa and Monforte to improve efficiency and user experience.",
      challenge:
        "Outdated workflows and low digital adoption.",
      solution:
        "Conducted process analysis and reengineering, introduced digital channels and trained teams.",
      results: [
        "Reduced processing times",
        "Increased citizen satisfaction",
        "Enabled remote service capabilities",
      ],
    },
    "cimac-atendimento": {
      title: "Service Practices – CIMAC",
      subtitle: "Standardising public service delivery",
      description:
        "Developed a unified service model across 13 municipalities for consistent and efficient citizen services.",
      challenge:
        "Inconsistent practices and fragmented service experiences across municipalities.",
      solution:
        "Harmonised service processes, provided training and implemented unified digital channels.",
      results: [
        "Reduced need for citizens to travel between offices",
        "Improved consistency of service delivery",
        "Enhanced transparency and accountability",
      ],
    },
    "lajes-do-pico": {
      title: "Multi‑Channel Service – Lajes do Pico",
      subtitle: "Accessible services across channels",
      description:
        "Implemented a multi‑channel contact centre for Lajes do Pico to provide accessible citizen services on an island.",
      challenge:
        "Limited service channels and infrastructure in a geographically isolated area.",
      solution:
        "Developed a multi‑channel system encompassing telephone, email and digital interfaces.",
      results: [
        "Increased citizen satisfaction and reach",
        "Improved response times",
        "Expanded availability of services",
      ],
    },
    "madalena-do-pico": {
      title: "Digital Transformation – Madalena do Pico",
      subtitle: "Digitising municipal services",
      description:
        "Led the digital transformation for Madalena do Pico municipality by introducing digital services and processes.",
      challenge:
        "Paper‑based processes and a significant digital gap.",
      solution:
        "Introduced digital services, trained staff and integrated systems for end‑to‑end workflows.",
      results: [
        "Reduced paper usage and manual workloads",
        "Improved service efficiency",
        "Established a digital‑ready organisation",
      ],
    },
    "portfolio-website": {
      title: "Personal Portfolio Website",
      subtitle: "Digital showcase of projects and skills",
      description:
        "Design and development of a responsive portfolio site to highlight professional projects and capabilities.",
      challenge:
        "Create a polished, SEO‑friendly site under time and resource constraints.",
      solution:
        "Developed using React, Tailwind and Vite with attention to design and accessibility.",
      results: [
        "Improved online presence",
        "Demonstrated technical and design skills",
        "Provides a platform for continuous updates",
      ],
    },
    "ai-assisted-project-management": {
      title: "AI‑Assisted Project Management",
      subtitle: "Harnessing AI for project delivery",
      description:
        "Applied generative AI tools to accelerate project management tasks and decision‑making.",
      challenge:
        "Integrate emerging AI technologies into existing workflows.",
      solution:
        "Used AI to auto‑generate documentation and provide recommendations.",
      results: [
        "Reduced manual workload",
        "Improved decision speed",
        "Enhanced project insights",
      ],
    },
  };

  // Separate projects into personal and professional categories
  const personalProjects = projects.filter((p) => p.type === "personal");
  const professionalProjects = projects.filter((p) => p.type === "professional");

  const ProjectCard = ({ project }: { project: Project }) => {
    // Get translations for this project if available
    const t = projectTranslations[project.id] || {};
    const title = language === "pt" ? project.title : t.title || project.title;
    const subtitle = language === "pt" ? project.subtitle : t.subtitle || project.subtitle;
    const description = language === "pt" ? project.description : t.description || project.description;
    const challenge = language === "pt" ? project.challenge : t.challenge || project.challenge;
    const solution = language === "pt" ? project.solution : t.solution || project.solution;
    const results = language === "pt" ? project.results : (t.results as string[]) || project.results;

    return (
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
                  {project.type === "personal" ? labels.typePersonal : labels.typeProfessional}
                </Badge>
                {project.featured && (
                  <Badge variant="outline" className="text-xs border-orange-300 text-orange-600">
                    {labels.badgeFeatured}
                  </Badge>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{subtitle}</p>
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
                {project.status === "completed" ? labels.statusCompleted : labels.statusInProgress}
              </Badge>
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <Calendar className="h-3 w-3" />
                {project.year}
              </div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-500 dark:bg-red-400" />
              </div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100">{labels.challenge}</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{challenge}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
              </div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100">{labels.solution}</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{solution}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
              </div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100">{labels.results}</h4>
            </div>
            <ul className="space-y-1">
              {results.slice(0, 3).map((result, index) => (
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
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
                >
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
              <Button size="sm" className="bg-accent hover:bg-accent/80 text-accent-foreground">
                {labels.seeDetails}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
            {labels.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {labels.subtitle}
          </p>
        </div>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-green-600 dark:text-green-400" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {labels.professional}
            </h2>
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {labels.personal}
            </h2>
            <div className="h-px bg-gradient-to-r from-blue-300 to-transparent dark:from-blue-700 flex-1" />
          </div>
          <div className="space-y-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <div className="text-center space-y-4">
          <p className="text-lg text-muted-foreground">{labels.contactInterest}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button className="bg-accent hover:bg-accent/80 text-accent-foreground">
                {labels.contactBtn}
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="group border-primary text-primary hover:bg-primary/10">
                {labels.returnBtn}
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
