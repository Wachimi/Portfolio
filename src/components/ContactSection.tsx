import { contactLinks } from "@/data/portfolio";
import { ContactIcon } from "./ContactIcon";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-emerald-950/10 bg-white px-5 py-20 sm:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.45fr_0.55fr] md:items-center">
        <div>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-emerald-950">
            Kontakt
          </h2>
          <p className="max-w-md text-lg leading-8 text-emerald-950/70">
            Masz pomysł na ciekawy projekt? Chcesz porozmawiać
            o&nbsp;współpracy? Napisz do mnie!
          </p>
        </div>
        <div className="space-y-5 border border-emerald-800/15 bg-[#e2f3e4] p-6">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-700">
            Dane kontaktowe
          </p>
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-4 text-emerald-950 transition-colors hover:text-emerald-700"
              >
                <ContactIcon icon={link.icon} />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700/75">
                    {link.label}
                  </p>
                  <span className="mt-1 block break-words text-lg font-bold sm:text-xl">
                    {link.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
