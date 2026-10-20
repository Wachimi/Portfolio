import Image from "next/image";
import { type Project, projects } from "@/data/portfolio";

const projectCardClassName =
  "group relative flex h-full min-h-96 flex-col overflow-hidden border border-white/15 bg-brand-paper text-brand-ink transition-transform duration-300 hover:-translate-y-1";

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <>
      <div className="relative aspect-video overflow-hidden bg-brand-panel">
        <Image
          src={project.image}
          alt={`Podgląd projektu: ${project.title}`}
          fill
          loading={project.loading ?? "lazy"}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <span className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-brand-green transition-transform duration-300 group-hover:scale-x-100" />
        <div>
          <span className="mb-5 inline-flex border border-brand-purple/20 bg-brand-purple-soft px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-brand-purple">
            {project.status}
          </span>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          {project.teamProject ? (
            <p className="mt-4 inline-flex items-center gap-2 border-l-2 border-brand-green pl-3 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-green">
              Jako członek zespołu
            </p>
          ) : null}
        </div>
        <p className="mt-8 leading-7 text-brand-ink/65">
          {project.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.14em] text-brand-green transition-colors group-hover:text-brand-ink">
          {project.href ? "Zobacz projekt ↗" : "W przygotowaniu"}
        </span>
      </div>
    </>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-white/10 bg-brand-ink px-5 py-24 text-white sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div
          data-reveal="up"
          className="mb-12 grid gap-6 md:grid-cols-[0.6fr_0.4fr] md:items-end"
        >
          <div>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-green-light">
              02 / Realizacje
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">
              Projekty, które pokazują możliwości.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-white/65 md:justify-self-end">
            Wybrane realizacje: od stron firmowych i&nbsp;platform e-learningowych
            po aplikacje webowe budowane w&nbsp;nowoczesnym stacku.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-reveal="up"
              data-reveal-delay={String((index % 3) + 1)}
              className="h-full"
            >
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={projectCardClassName}
                >
                  <ProjectCardContent project={project} />
                </a>
              ) : (
                <article className={projectCardClassName}>
                  <ProjectCardContent project={project} />
                </article>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
