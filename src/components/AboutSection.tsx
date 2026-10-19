export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-brand-line bg-white px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.38fr_0.62fr] lg:gap-20">
        <div>
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-green">
            04 / Podejście
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-brand-ink sm:text-5xl">
            Technologia, która wspiera konkretny cel.
          </h2>
        </div>
        <div className="border-l-4 border-brand-lime pl-6 sm:pl-9">
          <p className="text-2xl font-bold leading-tight text-brand-ink">
            Od początku swojej zawodowej pracy tworzę strony internetowe.
            Zaczynałem od pracy z&nbsp;frameworkiem WordPress, teraz skupiam
            się na pisaniu własnych stron i&nbsp;aplikacji od podstaw w&nbsp;JS/TS
            z&nbsp;wykorzystaniem React i&nbsp;Next.js / Vite.
          </p>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-brand-ink/65">
            Lubię pracować etapami: najpierw dobra struktura, potem czytelny
            wygląd, a&nbsp;następnie logika i&nbsp;detale, które sprawiają, że
            strona jest wygodna w&nbsp;użyciu.
          </p>
        </div>
      </div>
    </section>
  );
}
