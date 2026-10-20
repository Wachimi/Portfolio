export const siteOwner = "mgr inż. Andrzej Kuśnierz";

export const navItems = [
  { href: "#offer", label: "Oferta" },
  { href: "#projects", label: "Realizacje" },
  { href: "#skills", label: "Technologie" },
  { href: "#about", label: "O\u00A0mnie" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Kontakt" },
];

export const cvFile = {
  href: "/cv/andrzej-kusnierz-cv.pdf",
  filename: "andrzej-kusnierz-cv.pdf",
};

export const skills = [
  "HTML",
  "CSS / Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js / Vite",
  "Responsive UI",
  "WordPress",
];

export const offerServices = [
  {
    title: "Landing page i\u00A0strony firmowe",
    description:
      "Profesjonalna, responsywna strona, która jasno przedstawia ofertę, buduje wiarygodność marki i\u00A0prowadzi odbiorcę do kontaktu.",
  },
  {
    title: "Zaawansowane strony i\u00A0aplikacje z\u00A0CMS",
    description:
      "Rozbudowane rozwiązania z\u00A0indywidualnymi funkcjami oraz panelem do wygodnego zarządzania treścią, aktualnościami lub blogiem.",
  },
  {
    title: "WordPress — administracja i\u00A0rozwój",
    description:
      "Opieka nad istniejącą stroną, aktualizacje, rozbudowa funkcji i\u00A0bieżące usprawnienia bez konieczności tworzenia serwisu od nowa.",
  },
  {
    title: "Indywidualne projekty IT",
    description:
      "Niestandardowe narzędzia i\u00A0rozwiązania webowe dopasowane do konkretnego procesu, pomysłu lub potrzeb organizacji.",
  },
];

export const additionalServices = [
  "Opieka techniczna",
  "Rozwój istniejącej strony",
  "Podstawowa optymalizacja SEO",
  "Integracje z zewnętrznymi usługami",
  "Migracje i wdrożenia",
  "Przenoszenie treści i danych",
];

export type Project = {
  title: string;
  image: string;
  description: string;
  status: string;
  teamProject?: boolean;
  href?: string;
  loading?: "eager" | "lazy";
};

export const projects: Project[] = [
  {
    title: "Galeria Sztuki Witryna",
    image: "/projects/galeria-witryna_16x9.png",
    href: "https://www.galeriawitryna.pl/",
    description:
      "Nowoczesna strona galerii sztuki z\u00A0katalogiem artystów i\u00A0dzieł oraz dedykowanym panelem zarządzania treścią.",
    status: "Next.js / Supabase",
    loading: "eager",
  },
  {
    title: "System ERP ITC",
    image: "/projects/erp_16x9.png",
    href: "https://erp-client-omega.vercel.app/",
    description:
      "System ERP ITC obejmujący ponad 15 modułów wspierających procesy firmowe i\u00A0pracę z\u00A0danymi operacyjnymi.",
    status: "React / TypeScript / Vite",
    teamProject: true,
  },
  {
    title: "System ERP WorkHub",
    image: "/projects/workhub_16x9.png",
    href: "https://work-hub-client.vercel.app/",
    description:
      "WorkHub to narzędzie łączące w\u00A0jednym panelu ewidencję czasu pracy, komunikację, obsługę nieobecności i\u00A0raportowanie.",
    status: "React / TypeScript / Vite",
    teamProject: true,
  },
  {
    title: "Platforma/sklep LapSoft",
    image: "/projects/lapsoft_16x9.png",
    href: "https://www.lapsoft.pl/",
    description:
      "Platforma wynajmu sprzętu komputerowego z\u00A0obsługą logowania oraz dedykowanymi panelami klienta i\u00A0administratora.",
    status: "Next.js / TypeScript",
    teamProject: true,
  },
  {
    title: "Szept Polesia — domki wypoczynkowe",
    image: "/projects/szept-polesia_16x9.png",
    href: "https://www.szeptpolesia.pl/",
    description:
      "Serwis wspierający wynajem domków wypoczynkowych, z\u00A0prezentacją oferty, galerią, kalendarzem dostępności i\u00A0formularzem zapytania o\u00A0rezerwację.",
    status: "HTML / CSS / JavaScript",
    teamProject: true,
  },
  {
    title: "Strona firmowa",
    image: "/projects/marsoft_16x9.png",
    href: "https://marsoft.eu",
    description:
      "Serwis firmy doradczo-szkoleniowej prezentujący ofertę konsultingu biznesowego, realizowane projekty i\u00A0aktualności.",
    status: "WordPress",
  },
  {
    title: "Strona fundacji",
    image: "/projects/fzii_16x9.png",
    href: "https://fzii.com.pl",
    description:
      "Serwis Fundacji Zarządzania i\u00A0Innowacji prezentujący jej działalność, aktualne projekty oraz inicjatywy społeczne.",
    status: "WordPress",
  },
  {
    title: "Platforma e-learningowa",
    image: "/projects/moodle_aktywna_edukacja_16x9.png",
    href: "https://przedsiebiorcy-aktywnaedukacja.pl/",
    description:
      "Platforma szkoleniowa poświęcona edukacji ekologicznej przedsiębiorców, udostępniająca kursy i\u00A0ogłoszenia związane z\u00A0projektem.",
    status: "Moodle",
  },
  {
    title: "Platforma e-learningowa BCU Lublin",
    image: "/projects/moodle_bcu_lublin_16x9.png",
    href: "https://moodle-bcu-lublin.pl/",
    description:
      "Platforma Moodle Branżowego Centrum Umiejętności wspierająca kształcenie i\u00A0egzaminowanie w\u00A0branży budowlanej.",
    status: "Moodle",
  },
];

export const contactLinks = [
  {
    label: "E-mail",
    value: "a.kusnierz.work@icloud.com",
    href: "mailto:a.kusnierz.work@icloud.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/andrzejkusnierz",
    href: "https://www.linkedin.com/in/andrzejkusnierz/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/Wachimi",
    href: "https://github.com/Wachimi",
    icon: "github",
  },
];
