import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Briefcase, CheckCircle } from "lucide-react";
import translations from "@/lib/translations";
import { useLanguage } from "@/context/LanguageContext";
import SEOHead from "@/components/SEOHead";
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
  // Access current language from context and select the corresponding
  // translation namespace for project details. This allows the UI
  // labels to switch dynamically between Portuguese and English.
  const { language } = useLanguage();
  const t = translations[language].projectDetail;
  const { id } = useParams<{ id: string }>();
  const project: Project | undefined = projects.find((p) => p.id === id);

  // Map of additional images for specific projects. Previously used
  // to render a photo gallery below the hero image. The gallery has
  // been disabled based on design feedback, but keeping this map
  // allows future enhancement without breaking TypeScript types.
  const imagesMap: Record<string, string[]> = {
    "ey-irn-prr": ["/projects/irn-prr-photo.jpg"],
    "wrightia-irn-rc": ["/projects/eol2-photo.jpg"],
    "smartvision-cimac": ["/projects/cimac-photo.jpg"],
  };

  // Disable additional images rendering by returning an empty array. If
  // needed in the future, set this to imagesMap[id] when available.
  const additionalImages: string[] = [];

  if (!project) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-12 max-w-5xl">
        {/* Fallback SEO for non‑existent page */}
        <SEOHead title={t.notFound} description={t.notFound} />
        <p className="text-center text-gray-600 dark:text-gray-300">{t.notFound}</p>
        <div className="mt-6 text-center">
          <Link to="/projects">
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white">
              {t.back}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const typeBadge =
    project.type === "personal"
      ? {
          label: t.typePersonal,
          color: "blue",
        }
      : {
          label: t.typeProfessional,
          color: "green",
        };

  const statusLabel =
    project.status === "completed"
      ? t.statusCompleted
      : project.status === "in-progress"
      ? t.statusInProgress
      : t.statusPlanned;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* SEO meta tags based on project data */}
      <SEOHead
        title={`${project.title} – ${project.subtitle}`}
        description={project.overview || project.description}
        keywords={`${project.title}, ${project.technologies.join(", ")}`}
        ogImage={project.image || undefined}
      />
      <div className="container mx-auto px-4 pt-24 pb-12 max-w-5xl space-y-12">
        {/* Back to projects */}
        <div>
          <Link to="/projects" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            {t.back}
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
                {t.featured}
              </Badge>
            )}
            <Badge
              variant="outline"
              className={`text-xs border-${project.status === "completed" ? "green" : "yellow"}-300 text-${
                project.status === "completed" ? "green" : "yellow"
              }-600`}
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
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>

        {/*
         * If the current language is English (en), display a note to inform
         * visitors that the case study content is still in Portuguese. This
         * ensures transparency while translations are being prepared. The
         * translation string is defined in translations.ts.
         */}
        {language === 'en' && (
          <p className="text-sm italic text-gray-500 dark:text-gray-400 mt-2">
            {translations.en.projectDetail.translationNote}
          </p>
        )}
        </div>

        {/* Project image if provided */}
        {project.image && (
          // Increased hero image height to emphasise the photo. The
          // gallery section has been removed, so this image serves as
          // the primary visual element for the case study.
          <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`Imagem ilustrativa do projeto ${project.title}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        {/* The photo gallery has been removed based on design feedback. If
            additional images are needed in the future, render them
            here by iterating over additionalImages. */}

        {/* Overview section */}
        {project.overview && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{t.overview}</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.overview}
            </p>
          </section>
        )}

        {/* Challenge, Solution e Results cards
           As cores foram harmonizadas com a paleta definida no ficheiro index.css. São utilizadas
           tonalidades do accent e do primary para garantir coerência visual e melhor contraste. */}
        <section className="grid md:grid-cols-3 gap-6">
          {/* Carta de Desafio */}
          <div className="rounded-lg p-6 border border-accent/20 dark:border-accent/30 bg-accent/10 dark:bg-accent/20 space-y-3">
            <h3 className="text-lg font-semibold text-accent">{t.challenge}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {project.challenge}
            </p>
          </div>
          {/* Carta de Solução */}
          <div className="rounded-lg p-6 border border-primary/20 dark:border-primary/30 bg-primary/10 dark:bg-primary/20 space-y-3">
            <h3 className="text-lg font-semibold text-primary">{t.solution}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
          {/* Carta de Resultados */}
          <div className="rounded-lg p-6 border border-primary/20 dark:border-primary/30 bg-primary/5 dark:bg-primary/10 space-y-3">
            <h3 className="text-lg font-semibold text-primary">{t.results}</h3>
            <ul className="space-y-2">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technologies section */}
        {project.technologies.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{t.technologies}</h2>
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{t.implementation}</h2>
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{t.impact}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Impact metrics use the site’s colour palette. The first card uses the accent colour, the second uses the primary colour and the third repeats the accent tone. */}
              <div className="text-center p-6 rounded-lg bg-accent/10 dark:bg-accent/20 border border-accent/20 dark:border-accent/30 space-y-2">
                <h3 className="text-3xl font-bold text-accent">
                  {project.impact.functionality.split(' – ')[0]}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.impact.functionality.split(' – ').slice(1).join(' – ')}
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 space-y-2">
                <h3 className="text-3xl font-bold text-primary">
                  {project.impact.agents.split(' – ')[0]}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.impact.agents.split(' – ').slice(1).join(' – ')}
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-accent/10 dark:bg-accent/20 border border-accent/20 dark:border-accent/30 space-y-2">
                <h3 className="text-3xl font-bold text-accent">
                  {project.impact.reduction.split(' – ')[0]}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.impact.reduction.split(' – ').slice(1).join(' – ')}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Lessons section */}
        {project.lessons && project.lessons.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{t.lessons}</h2>
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{t.nextSteps}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {project.nextSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Call to action */}
        <section className="text-center space-y-4">
          <p className="text-lg text-gray-700 dark:text-gray-300">{t.ctaInterested}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white">
                {t.ctaViewOther}
              </Button>
            </Link>
            <a
              href="mailto:alexandreleonardo3746@gmail.com"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              {t.ctaContact}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
