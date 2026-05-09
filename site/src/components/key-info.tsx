"use client";

import { Church, PartyPopper } from "lucide-react";
import { useScrollReveal, revealStyle } from "@/hooks/use-scroll-reveal";

export function KeyInfo() {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section id="info" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6" ref={ref}>
        <h2
          className="font-serif text-3xl md:text-4xl font-light text-center text-wedding-900 tracking-wide"
          style={revealStyle(visible, 0)}
        >
          Najważniejsze informacje
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Ceremony */}
          <div
            className="text-center space-y-4"
            style={revealStyle(visible, 150, { scale: true })}
          >
            <Church className="mx-auto size-8 text-silver-500 stroke-[1.2]" />
            <h3 className="font-serif text-2xl font-light text-wedding-800">
              Ceremonia
            </h3>
            <p className="text-sm text-wedding-600 leading-relaxed">
              Kościół św. Augustyna i św. Jana Chrzciciela
              <br />na Zwierzyńcu
            </p>
            <p className="text-sm text-muted-foreground">
              ul. Tadeusza Kościuszki 88, 30-114 Kraków
            </p>
            <p className="font-serif text-xl text-wedding-800">14:00</p>
            <a
              href="https://maps.app.goo.gl/58YDzKN9GNxoGxis7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-wedding-600 hover:text-wedding-800 transition-colors border-b border-wedding-300 hover:border-wedding-500 pb-0.5"
            >
              Pokaż na mapie
            </a>
          </div>

          {/* Reception */}
          <div
            className="text-center space-y-4"
            style={revealStyle(visible, 300, { scale: true })}
          >
            <PartyPopper className="mx-auto size-8 text-silver-500 stroke-[1.2]" />
            <h3 className="font-serif text-2xl font-light text-wedding-800">
              Wesele
            </h3>
            <p className="text-sm text-wedding-600 leading-relaxed">
              Sala weselna przy Kopcu Kościuszki
            </p>
            <p className="text-sm text-muted-foreground">
              al. Jerzego Waszyngtona 1, 30-204 Kraków
            </p>
            <p className="font-serif text-xl text-wedding-800">16:00</p>
            <a
              href="https://maps.app.goo.gl/5XtRXpFQew7G3wWR9?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-wedding-600 hover:text-wedding-800 transition-colors border-b border-wedding-300 hover:border-wedding-500 pb-0.5"
            >
              Pokaż na mapie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
