import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-emerald-950/10 bg-[#e2f3e4] px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-4xl font-bold tracking-tight text-emerald-950">
            Umiejętności
          </h2>
          <p className="max-w-lg text-base leading-7 text-emerald-950/70">
            Technologie i&nbsp;obszary, które będą rozwijane podczas pracy nad
            portfolio.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="group relative min-h-36 overflow-hidden border border-emerald-800/15 bg-gradient-to-br from-white via-white to-emerald-50 px-5 py-5 text-lg font-extrabold text-emerald-950 shadow-sm shadow-emerald-950/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/45 hover:shadow-2xl hover:shadow-emerald-950/12"
            >
              <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 via-lime-300 to-teal-400 opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-lime-200/35 transition-transform duration-300 group-hover:scale-125" />
              <span className="mb-8 inline-flex border border-emerald-700/15 bg-emerald-950 px-2.5 py-1 text-xs font-extrabold text-lime-100 transition-colors duration-300 group-hover:bg-emerald-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="relative z-10 block leading-tight">{skill}</span>
              <span className="absolute bottom-4 left-5 h-px w-10 bg-emerald-500/45 transition-all duration-300 group-hover:w-20 group-hover:bg-lime-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
