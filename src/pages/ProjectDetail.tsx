import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Briefcase, CheckCircle } from "lucide-react";
// When this file resides in src/pages, the data is located one level up in src/data.
import { projects, Project } from "../data/projects";

/**
 * ProjectDetail component.
 *
 * Displays a comprehensive case study for a single project. The ID is
 * extracted from the route parameters and used to look up the project
 * definition from the centralised projects data. If a matching project
 * cannot be found, a simple error message is shown.
 */
const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project: Project | undefined = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <p className="text-center text-gray-600 dark:text-gray-300">Projeto não encontrado.</p>
        <div className="mt-6 text-center">
          <Link to="/projects">
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white">
              Voltar aos Projetos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const typeBadge = project.type === "personal" ? {
    label: "Projeto Pessoal",
    color: "blue",
  } : {
    label: "Projeto Profissional",
    color: "green",
  };

  const statusLabel = project.status === "completed" ? "Concluído" : project.status === "in-progress" ? "Em Progresso" : "Planeado";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-5xl space-y-12">
        {/* Back to projects */}
        <div>
          <Link to="/projects" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            ← Voltar aos Projetos
          </Link>
        </div>

        {/* Hero section with badges and header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="outline"
              className={`text-xs border-${typeBadge.color}-300 text-${typeBadge.color}-600`}
            >
              {typeBadge.label}
            </Badge>
            {project.featured && (
              <Badge variant="outline" className="text-xs border-orange-300 text-orange-600">
                Projeto Destaque
              </Badge>
            )}
            <Badge
              variant="outline"
              className={`text-xs border-${project.status === "completed" ? "green" : "yellow"}-300 text-${project.status === "completed" ? "green" : "yellow"}-600`}
            >
              {statusLabel}
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <p className="font-medium text-blue-600 dark:text-blue-400">{project.subtitle}</p>
            <span className="text-gray-400 dark:text-gray-500">|</span>
            <p className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {project.year}
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project image if provided */}
        {project.image && (
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        {/* Overview section */}
        {project.overview && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Visão Geral</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.overview}
            </p>
          </section>
        )}

        {/* Challenge, Solution, Results cards */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg p-6 border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 space-y-3">
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">Desafio</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div className="rounded-lg p-6 border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 space-y-3">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">Solução</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
          <div className="rounded-lg p-6 border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/30 space-y-3">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">Resultados</h3>
            <ul className="space-y-2">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technologies section */}
        {project.technologies.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Tecnologias e Metodologias</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* Detailed steps section */}
        {project.steps && project.steps.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Implementação Detalhada</h2>
            <ol className="space-y-6">
              {project.steps.map((step, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-700 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{step.title}</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Impact metrics section */}
        {project.impact && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Impacto Quantificado</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 space-y-2">
                <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  {project.impact.functionality.split(" – ")[0]}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.impact.functionality.split(" – ").slice(1).join(" – ")}
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 space-y-2">
                <h3 className="text-3xl font-bold text-green-700 dark:text-green-400">
                  {project.impact.agents.split(" – ")[0]}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.impact.agents.split(" – ").slice(1).join(" – ")}
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 space-y-2">
                <h3 className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                  {project.impact.reduction.split(" – ")[0]}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.impact.reduction.split(" – ").slice(1).join(" – ")}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Lessons section */}
        {project.lessons && project.lessons.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Aprendizagens</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {project.lessons.map((lesson, index) => (
                <li key={index}>{lesson}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Next steps section */}
        {project.nextSteps && project.nextSteps.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Próximos Passos</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {project.nextSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Call to action */}
        <section className="text-center space-y-4">
          <p className="text-lg text-gray-700 dark:text-gray-300">Interessado em projetos similares?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white">
                Ver Outros Projetos
              </Button>
            </Link>
            <a
              href="mailto:alexandreleonardo3746@gmail.com"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              Entrar em Contacto
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;