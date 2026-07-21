export const siteOwner = "mgr inż. Andrzej Kuśnierz";

export const navItems = [
  { href: "#about", label: "O\u00A0MNIE" },
  { href: "#skills", label: "UMIEJĘTNOŚCI" },
  { href: "#projects", label: "PROJEKTY" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "KONTAKT" },
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

export type Project = {
  title: string;
  image: string;
  description: string;
  status: string;
  href?: string;
  loading?: "eager" | "lazy";
};

export const projects: Project[] = [
  {
    title: "System ERP ITC",
    image: "/projects/erp_16x9.png",
    href: "https://erp-client-omega.vercel.app/",
    description:
      "Frontend systemu wspierającego organizację procesów firmowych i\u00A0pracę z\u00A0danymi operacyjnymi.",
    status: "TypeScript / Vite",
  },
  {
    title: "Platforma/sklep LapSoft",
    image: "/projects/lapsoft_16x9.png",
    href: "https://lap-soft.vercel.app/",
    description:
      "Platforma wynajmu sprzętu z\u00A0układem produktowym, przygotowana jako nowoczesny sklep internetowy.",
    status: "TypeScript / Next.js",
    loading: "eager",
  },
  {
    title: "Aplikacja To-Do",
    image: "/projects/todo_16x9.png",
    href: "https://todo-app-ts-rust.vercel.app/",
    description:
      "Lista zadań rozwijana jako przydatne narzędzie do codziennej organizacji czasu pracy.",
    status: "TypeScript",
  },
  {
    title: "Strona firmowa",
    image: "/projects/marsoft_16x9.png",
    href: "https://marsoft.eu",
    description:
      "Responsywna strona z\u00A0aktualnościami i\u00A0dedykowanymi zakładkami",
    status: "WordPress",
  },
  {
    title: "Strona fundacji",
    image: "/projects/fzii_16x9.png",
    href: "https://fzii.com.pl",
    description:
      "Responsywna strona z\u00A0aktualnościami i\u00A0dedykowanymi zakładkami",
    status: "WordPress",
  },
  {
    title: "Platforma e-learningowa",
    image: "/projects/moodle_aktywna_edukacja_16x9.png",
    href: "https://przedsiebiorcy-aktywnaedukacja.pl/",
    description:
      "Platforma do prowadzenia szkoleń on-line",
    status: "Moodle",
  },
];

export const contactLinks = [
  {
    label: "E-mail",
    value: "andrzej.kusnierz@icloud.com",
    href: "mailto:andrzej.kusnierz@icloud.com",
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
