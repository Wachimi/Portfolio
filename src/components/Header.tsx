"use client";

import Image from "next/image";
import { useState } from "react";
import { navItems, siteOwner } from "@/data/portfolio";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-load-header fixed inset-x-0 top-0 z-50 border-b border-emerald-200/15 bg-emerald-950/95 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-8">
        <a
          href="#"
          className="flex h-full items-center transition-opacity hover:opacity-85"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/icon.svg"
            alt={siteOwner}
            width={42}
            height={42}
            priority
            className="block h-9 w-9 sm:h-[42px] sm:w-[42px]"
          />
        </a>

        <div className="hidden items-center gap-6 text-sm font-semibold text-white md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-lime-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          className="grid h-9 w-9 place-items-center self-center border border-emerald-100/20 text-emerald-50 transition-colors hover:border-lime-200/50 hover:text-lime-200 md:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-emerald-950 px-5 transition-[max-height,opacity,padding] duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-80 border-t border-emerald-200/15 py-4 opacity-100"
            : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm font-bold uppercase tracking-[0.18em] text-white">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="border border-emerald-100/10 px-4 py-3 transition-colors hover:border-lime-200/45 hover:text-lime-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
