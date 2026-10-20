import { spawn } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const projects = [
  {
    slug: "galeria-witryna",
    url: "https://www.galeriawitryna.pl/",
    output: "public/projects/galeria-witryna_16x9.png",
  },
  {
    slug: "erp",
    url: "https://erp-client-omega.vercel.app/",
    output: "public/projects/erp_16x9.png",
  },
  {
    slug: "workhub",
    url: "https://work-hub-client.vercel.app/",
    output: "public/projects/workhub_16x9.png",
  },
  {
    slug: "lapsoft",
    url: "https://www.lapsoft.pl/",
    output: "public/projects/lapsoft_16x9.png",
  },
  {
    slug: "szept-polesia",
    url: "https://www.szeptpolesia.pl/",
    output: "public/projects/szept-polesia_16x9.png",
  },
  {
    slug: "marsoft",
    url: "https://marsoft.eu/",
    output: "public/projects/marsoft_16x9.png",
  },
  {
    slug: "fzii",
    url: "https://fzii.com.pl/",
    output: "public/projects/fzii_16x9.png",
  },
  {
    slug: "moodle",
    url: "https://przedsiebiorcy-aktywnaedukacja.pl/",
    output: "public/projects/moodle_aktywna_edukacja_16x9.png",
  },
  {
    slug: "moodle-bcu-lublin",
    url: "https://moodle-bcu-lublin.pl/",
    output: "public/projects/moodle_bcu_lublin_16x9.png",
  },
];

const requestedSlugs = new Set(process.argv.slice(2));
const selectedProjects = requestedSlugs.size
  ? projects.filter(({ slug }) => requestedSlugs.has(slug))
  : projects;

if (selectedProjects.length === 0) {
  throw new Error(
    `Nie znaleziono realizacji: ${[...requestedSlugs].join(", ")}`,
  );
}

const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const chromePath = chromeCandidates.find((candidate) => existsSync(candidate));

if (!chromePath) {
  throw new Error(
    "Nie znaleziono Chrome/Chromium. Ustaw zmienną CHROME_PATH na ścieżkę do przeglądarki.",
  );
}

function capturePreview({ slug, url, output }) {
  const outputPath = resolve(output);
  mkdirSync(dirname(outputPath), { recursive: true });

  const args = [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-sandbox",
    "--window-size=1440,810",
    "--virtual-time-budget=5000",
    `--screenshot=${outputPath}`,
    url,
  ];

  return new Promise((resolveCapture, rejectCapture) => {
    const process = spawn(chromePath, args, { stdio: "inherit" });

    process.on("error", rejectCapture);
    process.on("close", (code) => {
      if (code === 0 && existsSync(outputPath)) {
        console.log(`Zaktualizowano podgląd: ${slug}`);
        resolveCapture();
        return;
      }

      rejectCapture(new Error(`Nie udało się wykonać podglądu: ${slug}`));
    });
  });
}

for (const project of selectedProjects) {
  await capturePreview(project);
}
