import { siteOwner } from "@/data/portfolio";

const heroTechnologies = [
  "HTML",
  "CSS",
  "JS/TS",
  "React",
  "Next.js",
  "WordPress",
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(190,242,100,0.18),transparent_34%),radial-gradient(circle_at_82%_28%,rgba(52,211,153,0.14),transparent_36%),linear-gradient(135deg,#f7fbf3_0%,#edf7ef_52%,#e4f3ea_100%)]"
      />
      <div
        aria-hidden="true"
        className="hero-floating-glow absolute left-[-10rem] top-24 -z-10 h-80 w-80 rounded-full bg-lime-300/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="hero-floating-glow absolute bottom-10 right-[-8rem] -z-10 h-96 w-96 rounded-full bg-emerald-400/25 blur-3xl [animation-delay:-4s]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <span className="hero-circuit-pulse hero-circuit-pulse-horizontal left-[8%] top-[32%] w-40" />
        <span className="hero-circuit-pulse hero-circuit-pulse-horizontal left-[48%] top-[58%] w-56 [animation-delay:2.6s]" />
        <span className="hero-circuit-pulse hero-circuit-pulse-vertical left-[32%] top-[18%] h-44 [animation-delay:1.3s]" />
        <span className="hero-circuit-pulse hero-circuit-pulse-vertical left-[76%] top-[40%] h-36 [animation-delay:4.1s]" />
      </div>
      <div
        aria-hidden="true"
        className="absolute right-0 top-20 -z-10 hidden w-[48rem] max-w-[58vw] lg:block"
      >
        <div className="hero-code-float rotate-[-6deg] border border-emerald-700/20 bg-white/70 p-4 shadow-2xl shadow-emerald-950/10 backdrop-blur-md">
          <div className="mb-4 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
            <span className="h-3 w-3 rounded-full bg-lime-300" />
            <span className="h-3 w-3 rounded-full bg-teal-300" />
          </div>
          <div className="space-y-3 font-mono text-sm text-emerald-950/70">
            <div className="h-3 w-4/5 bg-emerald-700/15" />
            <div className="ml-8 h-3 w-2/3 bg-lime-600/20" />
            <div className="ml-8 h-3 w-5/6 bg-emerald-800/15" />
            <div className="ml-16 h-3 w-1/2 bg-teal-600/20" />
            <div className="h-3 w-3/5 bg-emerald-700/15" />
            <div className="ml-8 h-3 w-4/5 bg-lime-600/20" />
            <div className="ml-16 h-3 w-2/5 bg-emerald-800/15" />
          </div>
        </div>
        <div className="hero-code-float ml-24 mt-8 rotate-[4deg] border border-emerald-700/20 bg-emerald-950 p-5 text-emerald-100 shadow-2xl shadow-emerald-950/20 [animation-delay:-3s]">
          <div className="mb-5 flex items-center justify-between border-b border-emerald-300/20 pb-3">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-lime-200">
              app/page.tsx
            </span>
            <span className="h-2 w-16 bg-emerald-300/30" />
          </div>
          <div className="space-y-3">
            <div className="h-2 w-11/12 bg-emerald-100/25" />
            <div className="h-2 w-7/12 bg-lime-200/35" />
            <div className="h-2 w-10/12 bg-emerald-100/25" />
            <div className="h-2 w-6/12 bg-teal-200/35" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[70vh] max-w-6xl grid-rows-[1fr_auto] px-5 pb-8 pt-24 sm:px-8 lg:min-h-[74vh] lg:pb-10 lg:pt-24">
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.28em] text-emerald-700">
            Web Developer
          </p>
          <p className="text-4xl font-extrabold leading-none text-emerald-950 sm:text-5xl lg:text-6xl">
            {siteOwner}
          </p>
          <p className="mt-6 max-w-xl border-l-4 border-emerald-500 bg-[#eef8ee]/70 pl-6 text-lg leading-8 text-emerald-950/75 backdrop-blur-sm">
            Cześć, zapraszam do zapoznania się z moim osobistym portfolio.
            Znajdziesz tu informacje o moich umiejętnościach, doświadczeniu oraz projektach,
            nad którymi pracowałem.
          </p>
        </div>
        <h1 className="mx-auto max-w-5xl border border-emerald-700/15 bg-white/75 px-4 py-3 text-center text-2xl font-extrabold leading-tight text-emerald-950 shadow-lg shadow-emerald-950/5 backdrop-blur-md sm:text-3xl lg:text-[2.15rem] xl:text-4xl">
          <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {heroTechnologies.map((technology, index) => (
              <span key={technology} className="flex items-center gap-x-3">
                <span>{technology}</span>
                {index < heroTechnologies.length - 1 ? (
                  <span className="text-emerald-500">|</span>
                ) : null}
              </span>
            ))}
          </span>
        </h1>
      </div>
    </section>
  );
}
