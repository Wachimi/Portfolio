import { siteOwner } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-ink px-5 py-8 text-white/55 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-3 border-b border-white/10 pb-6 text-left md:grid-cols-[minmax(0,0.22fr)_minmax(0,0.78fr)] md:gap-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-lime">
            Informacja prawna
          </p>
          <p className="max-w-4xl text-xs leading-6 text-white/60">
            Treści zamieszczone na stronie mają charakter informacyjny i stanowią
            zaproszenie do kontaktu oraz indywidualnych ustaleń, nie zaś ofertę
            w rozumieniu art. 66 § 1 Kodeksu cywilnego. Zakres projektu, termin
            realizacji i wynagrodzenie są każdorazowo uzgadniane indywidualnie
            w bezpośrednim kontakcie. Usługi świadczę w ramach działalności
            nierejestrowanej.
          </p>
        </div>
        <p className="pt-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
          © 2026 {siteOwner}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
