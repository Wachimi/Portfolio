export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-emerald-950/10 bg-white px-5 py-20 sm:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.35fr_0.65fr]">
        <h2 className="text-4xl font-bold tracking-tight text-emerald-950">
          O&nbsp;mnie
        </h2>
        <div className="space-y-6">
          <p className="text-3xl font-bold leading-tight text-emerald-950">
            Od początku swojej zawodowej pracy tworzę strony internetowe.
            Zaczynałem od pracy z&nbsp;frameworkiem WordPress, teraz skupiam
            się na pisaniu własnych stron i&nbsp;aplikacji od podstaw
            z&nbsp;wykorzystaniem Reacta i&nbsp;Next.js.
          </p>
          <p className="max-w-3xl text-lg leading-8 text-emerald-950/70">
            Lubię pracować etapami: najpierw dobra struktura, potem czytelny
            wygląd, a&nbsp;następnie logika i&nbsp;detale, które sprawiają, że
            strona jest wygodna w&nbsp;użyciu.
          </p>
        </div>
      </div>
    </section>
  );
}
