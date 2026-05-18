"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then((module) => module.GitHubCalendar),
  {
    ssr: false,
    loading: () => <div className="h-40 animate-pulse bg-white/55" />,
  },
);

export function GitHubActivitySection() {
  return (
    <section
      id="github"
      className="border-t border-emerald-950/10 bg-[#e2f3e4] px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-4xl font-bold tracking-tight text-emerald-950">
            Aktywność GitHub
          </h2>
          <p className="max-w-lg text-base leading-7 text-emerald-950/70">
            Mapa aktywności pobierana bezpośrednio z&nbsp;profilu GitHub.
          </p>
        </div>

        <div className="overflow-x-auto border border-emerald-800/15 bg-white/80 p-6 shadow-sm shadow-emerald-950/5">
          <GitHubCalendar
            username="Wachimi"
            colorScheme="light"
            blockSize={13}
            blockMargin={4}
            fontSize={14}
            theme={{
              light: ["#ecfdf5", "#bbf7d0", "#86efac", "#22c55e", "#047857"],
              dark: ["#ecfdf5", "#bbf7d0", "#86efac", "#22c55e", "#047857"],
            }}
          />
        </div>
      </div>
    </section>
  );
}
