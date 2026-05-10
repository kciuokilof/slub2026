"use client";

import { useScrollReveal, revealStyle } from "@/hooks/use-scroll-reveal";

export function Rsvp() {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section id="rsvp" className="py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center" ref={ref}>
        <h2
          className="font-serif text-3xl md:text-4xl font-light text-wedding-900 tracking-wide"
          style={revealStyle(visible, 0)}
        >
          Potwierdź przybycie
        </h2>
        <p
          className="mt-3 text-m text-muted-foreground leading-relaxed"
          style={revealStyle(visible, 150)}
        >
          Prosimy o potwierdzenie obecności do{" "}
          <strong className="text-wedding-800">24 sierpnia 2026.</strong>{" "}
        </p>
        <p
          className="mt-3 text-xs text-muted-foreground leading-relaxed"
          style={revealStyle(visible, 170)}
        >
          (2 miesiące przed wydarzeniem)
        </p>

        <div
          className="mt-10 text-left max-w-sm mx-auto"
          style={revealStyle(visible, 200)}
        >
          <p className="text-sm text-wedding-700 font-medium mb-3">
            W formularzu zapytamy o:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-silver-400">—</span>
              Ilość osób, których przybycie chcesz potwierdzić
            </li>
            <li className="flex gap-2">
              <span className="text-silver-400">—</span>
              Imiona i nazwiska
            </li>
            <li className="flex gap-2">
              <span className="text-silver-400">—</span>
              Preferencje żywieniowe / alergie
            </li>
            <li className="flex gap-2">
              <span className="text-silver-400">—</span>
              Czy potrzebujesz noclegu? (od piątku / od soboty)
            </li>
            <li className="flex gap-2">
              <span className="text-silver-400">—</span>
              Czy potrzebujesz transportu? (Dąbrowa Tarnowska → Tarnów → Kraków / bus powrotny)
            </li>
          </ul>
        </div>

        <div className="mt-10" style={revealStyle(visible, 350)}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScmCaaKXRrgzD1_QU7SJTUOnNQd4LPDifbA8YBzAl0ptKvlsw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-wedding-700 px-12 py-5 text-lg font-semibold text-white tracking-wider uppercase hover:bg-wedding-800 hover:scale-105 transition-all duration-300"
          >
            Wypełnij formularz RSVP
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Znasz kogoś, kto nie korzysta z internetu? Przekaż mu te informacje lub pomóż wypełnić formularz.
          </p>
        </div>
      </div>
    </section>
  );
}
