import Image from "next/image";
import { siteOwner } from "@/data/portfolio";

const heroTechnologies = [
  "HTML",
  "CSS",
  "JavaScript / TypeScript",
  "React",
  "Next.js / Vite",
  "WordPress",
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-paper pt-18 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-[72%]"
      >
        <span className="hero-data-track hero-data-track-1" />
        <span className="hero-data-track hero-data-track-2" />
        <span className="hero-data-track hero-data-track-3" />
        <span className="hero-data-track hero-data-track-4" />
        <span className="hero-brand-slash hero-brand-slash-1" />
        <span className="hero-brand-slash hero-brand-slash-2" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-10 hidden w-[34%] bg-brand-lime lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute right-[25%] top-0 -z-10 hidden h-full w-32 origin-top -skew-x-12 bg-brand-green lg:block"
      />
      <Image
        src="/06_symbol_AK_kod_przezroczysty.png"
        alt=""
        width={3072}
        height={3072}
        priority
        sizes="(min-width: 1024px) 620px, 320px"
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 -z-10 hidden h-auto w-[min(54vw,720px)] -translate-y-1/2 opacity-30 mix-blend-multiply lg:block"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-6xl flex-col justify-center px-5 py-16 sm:min-h-[calc(100svh-5rem)] sm:px-8 lg:py-24">
        <div className="site-load-up max-w-[640px]">
          <p className="mb-6 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-green">
            <span className="h-0.5 w-10 bg-brand-lime" />
            {siteOwner} · Web Developer
          </p>
          <h1 className="text-4xl font-black leading-[0.98] tracking-[-0.04em] text-brand-ink sm:text-6xl lg:text-7xl">
            Strony i&nbsp;aplikacje, które pomagają firmom działać lepiej.
          </h1>
          <p className="mt-7 text-lg leading-8 text-brand-ink/70 sm:text-xl">
            Projektuję i&nbsp;wdrażam nowoczesne rozwiązania internetowe — od
            czytelnych stron firmowych po dedykowane aplikacje webowe.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center bg-brand-ink px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-green"
            >
              Zobacz realizacje
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-brand-ink px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-brand-ink transition-colors hover:bg-brand-lime"
            >
              Porozmawiajmy
            </a>
          </div>
        </div>

        <div className="site-load-up site-load-delay-1 mt-14 border-t border-brand-ink/15 pt-6 lg:max-w-[640px]">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-ink/45">
            Technologie
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-brand-ink/75">
            {heroTechnologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
