import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-emerald-950/10 bg-emerald-950 px-5 py-20 text-white sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-4xl font-bold tracking-tight">Projekty</h2>
          <p className="max-w-lg text-base leading-7 text-emerald-100/75">
            Na razie to struktura startowa. Kolejne wpisy możemy zastępować
            prawdziwymi projektami wraz z opisami i linkami.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-64 flex-col justify-between border border-emerald-200/20 bg-emerald-900/55 p-6"
            >
              <div>
                <span className="mb-5 inline-flex border border-lime-300/50 bg-lime-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-lime-200">
                  {project.status}
                </span>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
              <p className="mt-8 leading-7 text-emerald-100/75">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
