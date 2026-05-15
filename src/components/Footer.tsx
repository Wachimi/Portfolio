import { siteOwner } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-emerald-200/15 bg-emerald-950 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-emerald-50/70 sm:px-8">
      © 2026 {siteOwner}. All rights reserved.
    </footer>
  );
}
