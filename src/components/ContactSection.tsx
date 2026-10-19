import { contactLinks } from "@/data/portfolio";
import { ContactIcon } from "./ContactIcon";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/10 bg-brand-ink px-5 py-24 text-white sm:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.48fr_0.52fr] md:items-center">
        <div>
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-lime">
            06 / Kontakt
          </p>
          <h2 className="mb-6 text-4xl font-black leading-tight tracking-[-0.03em] sm:text-5xl">
            Porozmawiajmy o&nbsp;Twoim projekcie.
          </h2>
          <p className="max-w-md text-lg leading-8 text-white/65">
            Masz pomysł na ciekawy projekt? Chcesz porozmawiać
            o&nbsp;współpracy? Napisz do mnie!
          </p>
        </div>
        <div className="space-y-5 border border-white/15 bg-white p-6 text-brand-ink sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green">
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
                className="flex items-center gap-4 border-b border-brand-line pb-4 text-brand-ink transition-colors last:border-b-0 last:pb-0 hover:text-brand-green"
              >
                <ContactIcon icon={link.icon} />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
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
