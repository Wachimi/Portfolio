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
            Technologie i obszary, które będą rozwijane podczas pracy nad
            portfolio.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="border border-emerald-800/15 bg-white/85 px-5 py-4 text-base font-bold text-emerald-950 shadow-sm shadow-emerald-950/5"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
