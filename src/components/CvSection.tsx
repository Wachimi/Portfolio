import { cvFile } from "@/data/portfolio";

export function CvSection() {
  return (
    <section
      id="cv"
      className="scroll-mt-24 border-t border-emerald-950/10 bg-[#e2f3e4] px-5 py-20 sm:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.52fr_0.48fr] md:items-center">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-emerald-700">
            Curriculum vitae
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-emerald-950">
            Pobierz moje CV
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-emerald-950/70">
            Przygotowałem wersję PDF z&nbsp;najważniejszymi informacjami
            o&nbsp;doświadczeniu, technologiach i&nbsp;projektach.
          </p>
        </div>

        <div className="border border-emerald-800/15 bg-white p-6 shadow-xl shadow-emerald-950/8">
          <div className="mb-8 border-l-4 border-lime-400 pl-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700/75">
              Plik PDF
            </p>
          </div>

          <a
            href={cvFile.href}
            download={cvFile.filename}
            className="inline-flex w-full items-center justify-center border border-emerald-950 bg-emerald-950 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-lime-300 hover:text-emerald-950 sm:w-auto"
          >
            Pobierz CV
          </a>
        </div>
      </div>
    </section>
  );
}
