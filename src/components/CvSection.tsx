import { cvFile } from "@/data/portfolio";

export function CvSection() {
  return (
    <section
      id="cv"
      className="scroll-mt-24 border-t border-brand-line bg-brand-panel px-5 py-20 sm:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.64fr_0.36fr] md:items-center">
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-green">
            Więcej informacji
          </p>
          <h2 className="text-3xl font-black tracking-[-0.03em] text-brand-ink sm:text-4xl">
            Poznaj moje doświadczenie
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-brand-ink/65">
            Przygotowałem wersję PDF z&nbsp;najważniejszymi informacjami
            o&nbsp;doświadczeniu zawodowym, technologiach i&nbsp;umiejętnościach.
          </p>
        </div>

        <div className="border border-brand-line bg-white p-6">
          <div className="mb-8 border-l-4 border-brand-lime pl-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
              Plik PDF
            </p>
          </div>

          <a
            href={cvFile.href}
            download={cvFile.filename}
            className="inline-flex w-full items-center justify-center bg-brand-ink px-6 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition-colors hover:bg-brand-green sm:w-auto"
          >
            Pobierz CV
          </a>
        </div>
      </div>
    </section>
  );
}
