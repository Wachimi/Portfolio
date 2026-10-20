import { additionalServices, offerServices } from "@/data/portfolio";

export function OfferSection() {
  return (
    <section
      id="offer"
      className="scroll-mt-24 border-t border-brand-line bg-brand-paper px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.6fr_0.4fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-green">
              01 / Oferta
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-brand-ink sm:text-5xl">
              Od prostej strony po rozbudowany system.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-brand-ink/65 md:justify-self-end">
            Tworzę rozwiązania internetowe dopasowane do celu, budżetu
            i&nbsp;etapu rozwoju firmy. Pomagam dobrać zakres, technologię
            i&nbsp;wygodny sposób zarządzania treścią.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-brand-line bg-brand-line md:grid-cols-2">
          {offerServices.map((service, index) => (
            <article
              key={service.title}
              className="group relative min-h-72 overflow-hidden bg-white p-7 transition-colors duration-300 hover:bg-brand-green-soft sm:p-8"
            >
              <span className="absolute right-0 top-0 h-2 w-20 origin-right -skew-x-12 bg-brand-green transition-[width] duration-300 group-hover:w-36" />
              <span className="mb-14 block text-xs font-extrabold tracking-[0.18em] text-brand-green">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="max-w-md text-2xl font-black leading-tight tracking-[-0.02em] text-brand-ink">
                {service.title}
              </h3>
              <p className="mt-5 max-w-xl leading-7 text-brand-ink/65">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid overflow-hidden bg-brand-ink text-white lg:grid-cols-[0.38fr_0.62fr]">
          <div className="relative overflow-hidden border-b border-white/15 p-7 sm:p-9 lg:border-b-0 lg:border-r">
            <span className="absolute -bottom-20 -right-12 h-48 w-16 rotate-12 bg-brand-purple-light/15" />
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-green-light">
              Dodatkowe usługi
            </p>
            <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.03em]">
              Wsparcie także po uruchomieniu strony.
            </h3>
            <p className="mt-5 leading-7 text-white/65">
              Mogę przejąć techniczną część dalszego rozwoju, wdrożenia lub
              bezpiecznego przeniesienia istniejącego serwisu.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center bg-brand-green-light px-5 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-brand-ink transition-colors hover:bg-white"
            >
              Zapytaj o projekt&nbsp;→
            </a>
          </div>

          <ul className="grid gap-px bg-white/15 sm:grid-cols-2">
            {additionalServices.map((service) => (
              <li
                key={service}
                className="flex min-h-24 items-center gap-4 bg-brand-ink px-7 py-5 font-bold leading-snug transition-colors hover:bg-brand-deep sm:px-8"
              >
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rotate-45 bg-brand-purple-light"
                />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
