import Image from "next/image";
import { navItems, siteOwner } from "@/data/portfolio";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-200/15 bg-emerald-950/95 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#"
          className="flex items-center transition-opacity hover:opacity-85"
        >
          <Image src="/icon.svg" alt={siteOwner} width={42} height={42} priority />
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
      </nav>
    </header>
  );
}
