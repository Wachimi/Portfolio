export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-emerald-950/10 bg-white px-5 py-20 sm:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.35fr_0.65fr]">
        <h2 className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-700">
          O mnie
        </h2>
        <div className="space-y-6">
          <p className="text-3xl font-bold leading-tight text-emerald-950">
            Uczę się frontend developmentu i buduję praktyczne projekty, które
            pomagają mi lepiej rozumieć kod, UI oraz proces tworzenia
            aplikacji.
          </p>
          <p className="max-w-3xl text-lg leading-8 text-emerald-950/70">
            Lubię pracować etapami: najpierw dobra struktura, potem czytelny
            wygląd, a następnie logika i detale, które sprawiają, że strona jest
            wygodna w użyciu.
          </p>
        </div>
      </div>
    </section>
  );
}
