"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type MouseEvent } from "react";
import { navItems, siteOwner } from "@/data/portfolio";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    setIsMenuOpen(false);

    if (window.location.pathname !== "/") {
      return;
    }

    event.preventDefault();

    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }

    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  return (
    <header className="site-load-header fixed inset-x-0 top-0 z-50 border-b border-brand-ink/10 bg-brand-paper/95 text-brand-ink backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8 lg:h-24">
        <Link
          href="/"
          replace
          aria-label="Przejdź na początek strony"
          className="flex h-18 w-52 items-center transition-opacity hover:opacity-80 sm:w-56 lg:h-22 lg:w-64"
          onClick={handleLogoClick}
        >
          <Image
            src="/logo/01_logo_poziome_przezroczyste.svg"
            alt={siteOwner}
            width={2200}
            height={720}
            preload
            sizes="(min-width: 1024px) 256px, (min-width: 640px) 224px, 208px"
            className="h-auto w-full"
          />
        </Link>

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
            className="bg-brand-green px-5 py-3 text-white transition-colors hover:bg-brand-purple"
          >
            Kontakt
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
                  ? "border-brand-green bg-brand-green text-white hover:bg-brand-purple"
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
