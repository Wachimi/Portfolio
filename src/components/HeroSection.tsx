import { siteOwner } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#eef8ee]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-65 [background-image:linear-gradient(rgba(6,95,70,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(6,95,70,0.08)_1px,transparent_1px)] [background-size:36px_36px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-20 -z-10 hidden w-[48rem] max-w-[58vw] lg:block"
      >
        <div className="rotate-[-6deg] border border-emerald-700/20 bg-white/70 p-4 shadow-2xl shadow-emerald-950/10 backdrop-blur-md">
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
        <div className="ml-24 mt-8 rotate-[4deg] border border-emerald-700/20 bg-emerald-950 p-5 text-emerald-100 shadow-2xl shadow-emerald-950/20">
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

      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:pb-24">
        <div className="mb-6">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.28em] text-emerald-700">
            Frontend Developer
          </p>
          <p className="text-4xl font-extrabold leading-none text-emerald-950 sm:text-5xl lg:text-6xl">
            {siteOwner}
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] text-emerald-950 sm:text-7xl">
              Tworzę przejrzyste, nowoczesne strony i aplikacje webowe.
            </h1>
          </div>
          <p className="max-w-xl border-l-4 border-emerald-500 bg-[#eef8ee]/70 pl-6 text-lg leading-8 text-emerald-950/75 backdrop-blur-sm">
            To portfolio będzie rozwijane etapami: od solidnej struktury, przez
            dopracowany interfejs, aż po realne projekty i interakcje.
          </p>
        </div>
      </div>
    </section>
  );
}
