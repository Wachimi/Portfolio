import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-brand-line bg-brand-panel px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.6fr_0.4fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-green">
              03 / Narzędzia
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-brand-ink sm:text-5xl">
              Technologie dopasowane do projektu.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-brand-ink/65 md:justify-self-end">
            Nowoczesny frontend, sprawdzone systemy zarządzania treścią
            i&nbsp;rozwiązania, które można dalej rozwijać.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden border border-brand-line bg-brand-line sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="group relative min-h-40 overflow-hidden bg-white px-6 py-6 text-lg font-extrabold text-brand-ink transition-colors duration-300 hover:bg-brand-green-soft"
            >
              <span className="absolute right-0 top-0 h-2 w-16 origin-right -skew-x-12 bg-brand-green transition-[width] duration-300 group-hover:w-28" />
              <span className="mb-10 block text-xs font-extrabold text-brand-green">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="relative z-10 block leading-tight">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
