"use client";

import Image from "next/image";
import { useState } from "react";
import { navItems, siteOwner } from "@/data/portfolio";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-load-header fixed inset-x-0 top-0 z-50 border-b border-brand-ink/10 bg-brand-paper/95 text-brand-ink backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a
          href="#"
          aria-label="Przejdź na początek strony"
          className="relative h-14 w-48 overflow-hidden transition-opacity hover:opacity-80"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/01_logo_poziome_przezroczyste.png"
            alt={siteOwner}
            width={3200}
            height={920}
            priority
            sizes="280px"
            className="absolute left-0 top-1/2 h-auto w-[280px] max-w-none -translate-y-1/2"
          />
        </a>

        <div className="hidden items-center gap-5 text-xs font-bold uppercase tracking-[0.12em] md:flex lg:gap-7">
          {navItems.filter((item) => item.href !== "#contact").map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-brand-green"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-ink px-5 py-3 text-white transition-colors hover:bg-brand-green"
          >
            Porozmawiajmy
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          className="grid h-10 w-10 place-items-center self-center border border-brand-ink/20 text-brand-ink transition-colors hover:border-brand-green hover:text-brand-green md:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
                isMenuOpen ? "translate-y-1.75 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.75 h-0.5 w-5 bg-current transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-brand-paper px-5 transition-[max-height,opacity,padding] duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-80 border-t border-brand-ink/10 py-4 opacity-100"
            : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm font-bold text-brand-ink">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`border px-4 py-3 transition-colors ${
                item.href === "#contact"
                  ? "border-brand-ink bg-brand-ink text-white hover:bg-brand-green"
                  : "border-brand-ink/10 hover:border-brand-green hover:text-brand-green"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
