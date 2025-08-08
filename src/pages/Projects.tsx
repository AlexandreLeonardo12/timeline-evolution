import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import translations from "@/lib/translations";
import { useLanguage } from "@/context/LanguageContext";

// Import the centralised projects data. This ensures that extended
// information defined in src/data/projects.ts is available for both the
// listing and detail views.
// When this file resides in src/pages, the data is located one level up in src/data.
import { projects, Project } from "../data/projects";
import SEOHead from "@/components/SEOHead";

/**
 * Renders a list of projects separated into professional and personal
 * categories. Each card displays high‑level information and a CTA to
 * view the project details.
 */
const Projects = () => {
  // Access current language and translation namespace for the projects page
  const { language } = useLanguage();
  const t = translations[language].projectsPage;

  const personalProjects = projects.filter((p) => p.type === "personal");
  const professionalProjects = projects.filter((p) => p.type === "professional");

  const ProjectCard = ({ project }: { project: Project }) => (
    <div
      className="bg-card dark:bg-card rounded-lg border border-border dark:border-border overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
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
                {project.type === "personal" ? t.badgePersonal : t.badgeProfessional}
              </Badge>
              {project.featured && (
                <Badge variant="outline" className="text-xs border-orange-300 text-orange-600">
                  {translations[language].projectDetail.featured}
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
              {project.status === "completed"
                ? t.statusCompleted
                : project.status === "in-progress"
                ? t.statusInProgress
                : t.statusPlanned}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="h-3 w-3" />
              {project.year}
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {/* Secção Desafio */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <h4 className="font-medium text-gray-900 dark:text-gray-100">{t.challenge}</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{project.challenge}</p>
        </div>

        {/* Secção Solução */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <h4 className="font-medium text-gray-900 dark:text-gray-100">{t.solution}</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{project.solution}</p>
        </div>

        {/* Secção Resultados */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-primary" />
            </div>
            <h4 className="font-medium text-gray-900 dark:text-gray-100">{t.results}</h4>
          </div>
          <ul className="space-y-1">
            {project.results.slice(0, 3).map((result, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
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
            {/*
             * Ajuste das cores do CTA "Ver detalhes" para melhorar o contraste.
             * Utiliza a cor de destaque (accent) em vez de azul genérico.
             */}
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/80 text-accent-foreground"
            >
              {t.viewDetails}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* SEO meta tags for projects listing */}
      <SEOHead
        title={`${t.title} – Alexandre Leonardo`}
        description={t.subtitle}
        keywords={"projetos, transformação digital, inovação"}
        lang={language === 'en' ? 'en' : 'pt-PT'}
      />
      {/* Apply top padding to offset the fixed navbar and ensure the header
          does not overlap the page title. */}
      <div className="container mx-auto px-4 pt-24 pb-12 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">{t.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-green-600 dark:text-green-400" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{t.professionalTitle}</h2>
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{t.personalTitle}</h2>
            <div className="h-px bg-gradient-to-r from-blue-300 to-transparent dark:from-blue-700 flex-1" />
          </div>
          <div className="space-y-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <div className="text-center space-y-4">
          <p className="text-lg text-muted-foreground">{t.ctaInterested}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              {/*
               * Botão de contacto com alto contraste utilizando a cor de destaque (accent).
               */}
              <Button
                className="bg-accent hover:bg-accent/80 text-accent-foreground"
              >
                {t.ctaContact}
              </Button>
            </Link>
            <Link to="/">
              {/*
               * Botão de retorno ao início com contorno e transição suave.
               */}
              <Button
                variant="outline"
                className="group border-primary text-primary hover:bg-primary/10"
              >
                {t.ctaBackHome}
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