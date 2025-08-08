import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Briefcase, CheckCircle } from 'lucide-react';
import { projects, Project } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

/**
 * ProjectDetail component with multilingual support.
 *
 * This component looks up a project by its ID from the central data
 * file, applies translations where available, and renders a detailed
 * case study view. If the project cannot be found, a simple message
 * with a back link is shown.
 */
const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const project: Project | undefined = projects.find((p) => p.id === id);

  // Translation labels for UI elements and sections
  const labels = {
    notFound: language === 'pt' ? 'Projeto não encontrado.' : 'Project not found.',
    backToProjects: language === 'pt' ? 'Voltar aos Projetos' : 'Back to Projects',
    personalProject: language === 'pt' ? 'Projeto Pessoal' : 'Personal Project',
    professionalProject: language === 'pt' ? 'Projeto Profissional' : 'Professional Project',
    featuredProject: language === 'pt' ? 'Projeto Destaque' : 'Featured Project',
    statusCompleted: language === 'pt' ? 'Concluído' : 'Completed',
    statusInProgress: language === 'pt' ? 'Em Progresso' : 'In Progress',
    statusPlanned: language === 'pt' ? 'Planeado' : 'Planned',
    overview: language === 'pt' ? 'Visão Geral' : 'Overview',
    challenge: language === 'pt' ? 'Desafio' : 'Challenge',
    solution: language === 'pt' ? 'Solução' : 'Solution',
    results: language === 'pt' ? 'Resultados' : 'Results',
    technologies: language === 'pt' ? 'Tecnologias e Metodologias' : 'Technologies and Methodologies',
    implementation: language === 'pt' ? 'Implementação Detalhada' : 'Implementation',
    impact: language === 'pt' ? 'Impacto Quantificado' : 'Quantified Impact',
    lessons: language === 'pt' ? 'Lições Aprendidas' : 'Lessons Learned',
    nextSteps: language === 'pt' ? 'Próximos Passos' : 'Next Steps',
    ctaInterested: language === 'pt' ? 'Interessado em projetos similares?' : 'Interested in similar projects?',
    ctaViewOther: language === 'pt' ? 'Ver Outros Projetos' : 'View Other Projects',
    ctaContact: language === 'pt' ? 'Entrar em Contacto' : 'Get in touch',
  };

  // English translations for individual projects. These keys mirror the
  // project IDs defined in data/projects.ts. Only English values are
  // provided; Portuguese values fall back to the original project fields.
  const projectTranslations: Record<string, Partial<Project & { overview?: string; impact?: any; lessons?: string[]; nextSteps?: string[] }>> = {
    'ey-irn-prr': {
      title: 'IRN Strategic Projects – PRR',
      subtitle: 'Coordinating the digital transformation of public registration systems',
      description:
        'Leading a portfolio of modernisation initiatives across the Portuguese registrations domain, ensuring strategic alignment, architecture design and governance.',
      overview:
        'This programme encompasses multiple projects under the Recovery and Resilience Plan, driving digital transformation in the registry sector while aligning strategy and stakeholder expectations.',
      challenge:
        'Manage a complex multi‑project environment with diverse stakeholders and legal requirements.',
      solution:
        'Implemented agile programme management, a unified digital platform and rigorous governance to deliver outcomes on time and on budget.',
      results: [
        'Expanded digital services and improved efficiency across the registry ecosystem',
        'Reduced processing times and enhanced user satisfaction',
        'Strengthened collaboration among public sector stakeholders',
      ],
      lessons: [
        'Importance of strong governance and stakeholder alignment',
        'Value of user‑centred design in public digital services',
      ],
      nextSteps: [
        'Extend the programme to additional registration domains',
        'Incorporate advanced analytics to drive decision making',
      ],
    },
    'wrightia-irn-rc': {
      title: 'Company Online 2.0',
      subtitle: 'Creating companies in minutes',
      description:
        'Launched a digital platform enabling entrepreneurs to create companies fully online with integration across public services.',
      overview:
        'The Company Online 2.0 project replaces a legacy platform to enable streamlined, 100% online company formation.',
      challenge:
        'Modernise legacy processes and design an intuitive user experience for legal incorporation.',
      solution:
        'Developed a new front‑end and back‑office platform with strong integration and security.',
      results: [
        'Companies can now be incorporated in roughly 10 minutes',
        'Streamlined user journey through once‑only data collection',
        'Increased adoption of online company formation',
      ],
      lessons: [
        'Prioritise user experience in legal services',
        'Ensure interoperability between government systems for seamless data exchange',
      ],
      nextSteps: [
        'Expand to other corporate events such as mergers and dissolutions',
        'Add more languages and enhance accessibility',
      ],
    },
    'munlab-cimaa': {
      title: 'MunLab – Alto Alentejo Innovation Lab',
      subtitle: 'Digital innovation for municipalities',
      description:
        'Delivered a municipal innovation lab platform for the Intermunicipal Community of Alto Alentejo (CIMAA) to unify data and services.',
      overview:
        'MunLab provides a shared innovation space for municipalities to collaborate on digital initiatives, share data and implement new services.',
      challenge:
        'Unify diverse municipal processes and engage multiple councils in a digital initiative.',
      solution:
        'Implemented a shared digital platform, provided training and support to harmonise procedures.',
      results: [
        'Improved service visibility and collaboration across municipalities',
        'Increased digital literacy among staff',
        'Created a foundation for further digital projects',
      ],
      lessons: [
        'Cross‑municipal collaboration accelerates innovation',
        'Investing in training ensures adoption of new tools',
      ],
      nextSteps: [
        'Scale the platform to additional regions',
        'Incorporate citizen feedback to prioritise new services',
      ],
    },
    'nisa-monforte': {
      title: 'Administrative Modernisation – Nisa & Monforte',
      subtitle: 'Transforming local government services',
      description:
        'Redesigned processes and digital services for the municipalities of Nisa and Monforte to improve efficiency and user experience.',
      overview:
        'This project reengineered administrative workflows and introduced digital channels for citizens, reducing bureaucracy.',
      challenge:
        'Outdated workflows and low digital adoption.',
      solution:
        'Conducted process analysis and reengineering, introduced digital channels and trained teams.',
      results: [
        'Reduced processing times',
        'Increased citizen satisfaction',
        'Enabled remote service capabilities',
      ],
      lessons: [
        'Continuous stakeholder engagement drives change',
        'Digital adoption requires ongoing support and training',
      ],
      nextSteps: [
        'Integrate additional municipal services into the digital platform',
        'Measure and publish key performance indicators',
      ],
    },
    'cimac-atendimento': {
      title: 'Service Practices – CIMAC',
      subtitle: 'Standardising public service delivery',
      description:
        'Developed a unified service model across 13 municipalities for consistent and efficient citizen services.',
      overview:
        'The project harmonised service procedures and created a uniform digital framework for citizen interactions.',
      challenge:
        'Inconsistent practices and fragmented service experiences across municipalities.',
      solution:
        'Harmonised service processes, provided training and implemented unified digital channels.',
      results: [
        'Reduced need for citizens to travel between offices',
        'Improved consistency of service delivery',
        'Enhanced transparency and accountability',
      ],
      lessons: [
        'Unified guidelines improve citizen experiences',
        'Local flexibility within a unified framework maximises adoption',
      ],
      nextSteps: [
        'Expand standardised practices to more municipalities',
        'Integrate feedback loops for continuous improvement',
      ],
    },
    'lajes-do-pico': {
      title: 'Multi‑Channel Service – Lajes do Pico',
      subtitle: 'Accessible services across channels',
      description:
        'Implemented a multi‑channel contact centre for Lajes do Pico to provide accessible citizen services on an island.',
      overview:
        'The initiative established a contact centre offering services via telephone, email and digital channels, adapted to island needs.',
      challenge:
        'Limited service channels and infrastructure in a geographically isolated area.',
      solution:
        'Developed a multi‑channel system encompassing telephone, email and digital interfaces.',
      results: [
        'Increased citizen satisfaction and reach',
        'Improved response times',
        'Expanded availability of services',
      ],
      lessons: [
        'Diverse channels ensure inclusivity',
        'Service design must consider local context',
      ],
      nextSteps: [
        'Introduce mobile app support',
        'Develop self‑service portals for common requests',
      ],
    },
    'madalena-do-pico': {
      title: 'Digital Transformation – Madalena do Pico',
      subtitle: 'Digitising municipal services',
      description:
        'Led the digital transformation for Madalena do Pico municipality by introducing digital services and processes.',
      overview:
        'The project replaced paper‑based processes with digital workflows, enabling residents to access services online.',
      challenge:
        'Paper‑based processes and a significant digital gap.',
      solution:
        'Introduced digital services, trained staff and integrated systems for end‑to‑end workflows.',
      results: [
        'Reduced paper usage and manual workloads',
        'Improved service efficiency',
        'Established a digital‑ready organisation',
      ],
      lessons: [
        'Digital transformation requires change management',
        'Continuous training supports adoption',
      ],
      nextSteps: [
        'Automate data exchanges with national registries',
        'Enhance mobile accessibility',
      ],
    },
    'portfolio-website': {
      title: 'Personal Portfolio Website',
      subtitle: 'Digital showcase of projects and skills',
      description:
        'Design and development of a responsive portfolio site to highlight professional projects and capabilities.',
      overview:
        'The portfolio website serves as a central hub to present work and engage visitors interested in digital transformation.',
      challenge:
        'Create a polished, SEO‑friendly site under time and resource constraints.',
      solution:
        'Developed using React, Tailwind and Vite with attention to design and accessibility.',
      results: [
        'Improved online presence',
        'Demonstrated technical and design skills',
        'Provides a platform for continuous updates',
      ],
      lessons: [
        'Clean architecture simplifies maintenance',
        'Responsive design is essential for all users',
      ],
      nextSteps: [
        'Add blog posts and case study updates',
        'Implement analytics to understand visitor behaviour',
      ],
    },
    'ai-assisted-project-management': {
      title: 'AI‑Assisted Project Management',
      subtitle: 'Harnessing AI for project delivery',
      description:
        'Applied generative AI tools to accelerate project management tasks and decision‑making.',
      overview:
        'The project explored how AI can support project managers by automating documentation and providing insights.',
      challenge:
        'Integrate emerging AI technologies into existing workflows.',
      solution:
        'Used AI to auto‑generate documentation and provide recommendations.',
      results: [
        'Reduced manual workload',
        'Improved decision speed',
        'Enhanced project insights',
      ],
      lessons: [
        'Human oversight remains critical when using AI',
        'Pilot tests are valuable before full rollout',
      ],
      nextSteps: [
        'Expand AI capabilities to other domains',
        'Develop best practice guidelines for AI adoption',
      ],
    },
  };

  // If project is not found, return a fallback view
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <p className="text-center text-gray-600 dark:text-gray-300">{labels.notFound}</p>
        <div className="mt-6 text-center">
          <Link to="/projects">
            <Button className="bg-accent hover:bg-accent/80 text-accent-foreground">
              {labels.backToProjects}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Choose translations for the project fields if available
  const t = projectTranslations[project.id] || {};
  const title = language === 'pt' ? project.title : (t.title || project.title);
  const subtitle = language === 'pt' ? project.subtitle : (t.subtitle || project.subtitle);
  const description = language === 'pt' ? project.description : (t.description || project.description);
  const overview = language === 'pt' ? project.overview : (t.overview || project.overview);
  const challenge = language === 'pt' ? project.challenge : (t.challenge || project.challenge);
  const solution = language === 'pt' ? project.solution : (t.solution || project.solution);
  const results = language === 'pt' ? project.results : (t.results as string[]) || project.results;
  const lessons = language === 'pt' ? project.lessons : (t.lessons as string[]) || project.lessons;
  const nextSteps = language === 'pt' ? project.nextSteps : (t.nextSteps as string[]) || project.nextSteps;
  // Impact is a string describing numbers separated by " – "; we keep same since translation may not be needed
  const impact = project.impact;

  const typeBadge = project.type === 'personal'
    ? { label: labels.personalProject, color: 'blue' }
    : { label: labels.professionalProject, color: 'green' };

  const statusLabel =
    project.status === 'completed'
      ? labels.statusCompleted
      : project.status === 'in-progress'
      ? labels.statusInProgress
      : labels.statusPlanned;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-5xl space-y-12">
        {/* Back to projects */}
        <div>
          <Link
            to="/projects"
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            ← {labels.backToProjects}
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
                {labels.featuredProject}
              </Badge>
            )}
            <Badge
              variant="outline"
              className={`text-xs border-${
                project.status === 'completed' ? 'green' : project.status === 'in-progress' ? 'yellow' : 'yellow'
              }-300 text-${
                project.status === 'completed' ? 'green' : project.status === 'in-progress' ? 'yellow' : 'yellow'
              }-600`}
            >
              {statusLabel}
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <p className="font-medium text-blue-600 dark:text-blue-400">{subtitle}</p>
            <span className="text-gray-400 dark:text-gray-500">|</span>
            <p className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {project.year}
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Project image if provided */}
        {project.image && (
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={language === 'pt' ? `Imagem ilustrativa do projeto ${project.title}` : `Illustrative image of the ${title} project`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        {/* Overview section */}
        {overview && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {labels.overview}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{overview}</p>
          </section>
        )}

        {/* Challenge, Solution, Results cards */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg p-6 border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 space-y-3">
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">
              {labels.challenge}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{challenge}</p>
          </div>
          <div className="rounded-lg p-6 border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 space-y-3">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">
              {labels.solution}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{solution}</p>
          </div>
          <div className="rounded-lg p-6 border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/30 space-y-3">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">
              {labels.results}
            </h3>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {labels.technologies}
            </h2>
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

        {/* Implementation steps section */}
        {project.steps && project.steps.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {labels.implementation}
            </h2>
            <ol className="space-y-6">
              {project.steps.map((step, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-700 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{step.title}</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Impact metrics section */}
        {impact && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {labels.impact}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 space-y-2">
                <h3 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  {impact.functionality.split(' – ')[0]}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {impact.functionality.split(' – ').slice(1).join(' – ')}
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 space-y-2">
                <h3 className="text-3xl font-bold text-green-700 dark:text-green-400">
                  {impact.agents.split(' – ')[0]}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {impact.agents.split(' – ').slice(1).join(' – ')}
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 space-y-2">
                <h3 className="text-3xl font-bold text-orange-700 dark:text-orange-400">
                  {impact.bureaucracy.split(' – ')[0]}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {impact.bureaucracy.split(' – ').slice(1).join(' – ')}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Lessons Learned section */}
        {lessons && lessons.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {labels.lessons}
            </h2>
            <ul className="space-y-2">
              {lessons.map((lesson, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  {lesson}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Next Steps section */}
        {nextSteps && nextSteps.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {labels.nextSteps}
            </h2>
            <ul className="space-y-2">
              {nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Call to action section */}
        <div className="space-y-4 text-center">
          <p className="text-lg text-muted-foreground">{labels.ctaInterested}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button variant="outline" className="group border-primary text-primary hover:bg-primary/10">
                {labels.ctaViewOther}
              </Button>
            </Link>
            <Link to="/about">
              <Button className="bg-accent hover:bg-accent/80 text-accent-foreground">
                {labels.ctaContact}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
