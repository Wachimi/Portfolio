import Image from "next/image";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-emerald-950/10 bg-emerald-800 px-5 py-20 text-white sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-4xl font-bold tracking-tight">Projekty</h2>
          <p className="max-w-lg text-base leading-7 text-emerald-100/75">
            Na razie to projekty, które realizowałem zanim rozpocząłem przygodę prawdziwego "web developera".
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-96 flex-col overflow-hidden border border-white/70 bg-white text-emerald-950 shadow-xl shadow-emerald-950/12 transition-all duration-300 hover:-translate-y-1 hover:border-lime-200 hover:shadow-2xl hover:shadow-emerald-950/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-emerald-950/10">
                <Image
                  src={project.image}
                  alt={`Podgląd projektu: ${project.title}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <article className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span className="mb-5 inline-flex border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                    {project.status}
                  </span>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <p className="mt-8 leading-7 text-emerald-950/70">
                  {project.description}
                </p>
                <span className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.18em] text-emerald-700 transition-colors group-hover:text-emerald-950">
                  Zobacz projekt
                </span>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
