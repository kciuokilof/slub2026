"use client";

import { Hotel, Bus } from "lucide-react";
import { useScrollReveal, revealStyle } from "@/hooks/use-scroll-reveal";

export function Accommodation() {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section id="accommodation" className="py-20 md:py-28 bg-wedding-50">
      <div className="mx-auto max-w-4xl px-6" ref={ref}>
        <h2
          className="font-serif text-3xl md:text-4xl font-light text-center text-wedding-900 tracking-wide"
          style={revealStyle(visible, 0)}
        >
          Nocleg
        </h2>

        <div className="mt-14 max-w-2xl mx-auto">
          {/* Accommodation + hotel autokar */}
          <div
            className="text-center space-y-4 p-8 rounded-xl bg-white border border-wedding-200"
            style={revealStyle(visible, 150, { scale: true })}
          >
            <Hotel className="mx-auto size-8 text-silver-500 stroke-[1.2]" />
            <p className="text-2xl">Hotel Zakliki</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Zygmunta Starego 130, 30-198 Kraków
              <br />
              <a
                href="https://maps.app.goo.gl/3miZZEETouV8Tjjt9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wedding-700 underline hover:text-wedding-900"
              >
                Zobacz na mapie Google
              </a>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hotel znajduje się ok. <strong>20–25 minut jazdy</strong> od miejsca
              wesela. Nie organizujemy transportu do hotelu. Na miejscu dostępny
              jest <strong>parking</strong>.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              W niedzielę na dole czekać będzie na Was <strong>śniadanie</strong>, a
              wykwaterowanie obowiązuje najpóźniej do <strong>godziny 12:00</strong>.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Z parkingu hotelu na ceremonię odjedzie <strong>transport o godzinie 13:00</strong>.
              Po drodze zatrzyma się przy sali weselnej, aby zabrać pozostałych gości.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Z sali weselnej z powrotem do hotelu zabiorą Was taksówki.
              Ewentualnie będzie też transport kursujący w kierunku Tarnowa,
              który na życzenie podrzuci Was do hotelu (na wszelki wypadek prosimy przypomnieć się kierowcy).
            </p>
            <p className="text-sm text-wedding-600">
              Prosimy o informację, o której godzinie planujecie przyjazd — to
              ważne, abyśmy mogli potwierdzić godzinę przyjazdu z hotelem.
            </p>
            <p className="text-sm text-wedding-600">
              Aby zapisać się na nocleg, skontaktujcie się z nami lub zaznaczcie
              to w formularzu RSVP.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              W razie pytań możecie skontaktować się z menedżerką hotelu{" "}
              <p className="whitespace-nowrap">
                Pani Marta{" "}
                <a
                  href="tel:+48696589845"
                  className="text-wedding-700 underline hover:text-wedding-900"
                >
                  +48 696 589 845
                </a>
              </p>
            </p>
          </div>
        </div>

        {/* Transport for out-of-town guests */}
        <h3
          className="mt-16 font-serif text-2xl md:text-3xl font-light text-center text-wedding-900 tracking-wide"
          style={revealStyle(visible, 450)}
        >
          Transport z Tarnowa i okolic
        </h3>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Transport - bus to ceremony & venue */}
          <div
            className="text-center space-y-4 p-8 rounded-xl bg-white border border-wedding-200"
            style={revealStyle(visible, 600, { scale: true })}
          >
            <Bus className="mx-auto size-8 text-silver-500 stroke-[1.2]" />
            <h4 className="font-serif text-xl font-light text-wedding-800">
              Dojazd na ślub
            </h4>
            <p className="text-2xl">Dąbrowa → Tarnów → Kraków</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dla gości z Tarnowa i okolic organizujemy transport na trasie{" "}
              <strong>Dąbrowa Tarnowska → Tarnów → Kraków</strong> — ostatni przystanek pod samym kościołem.
              Po ceremoni będzie transport tym samym pojazdem do sali weselnej.
            </p>
            <ul className="text-sm text-wedding-700 text-left space-y-2 mx-auto max-w-xs">
              <li className="flex gap-3">
                <span className="font-semibold tabular-nums w-12 shrink-0">
                  11:00
                </span>
                <span>
                  <strong>Dąbrowa Tarnowska</strong> — Orlen, ulica Piłsudskiego
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold tabular-nums w-12 shrink-0">
                  11:45
                </span>
                <span>
                  <strong>Tarnów</strong> — ulica Wodna przy salonie meblowym Ewa
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold tabular-nums w-12 shrink-0">
                  13:45
                </span>
                <span>
                  <strong>Kościół</strong> — na ceremonię o 14:00
                </span>
              </li>
            </ul>
            <p className="text-sm text-wedding-600">
               W razie pytań do tego transportu, prosimy o kontakt z rodzicami Pani Młodej. Zaznaczcie w formularzu RSVP, czy potrzebujecie tego transportu.
            </p>
          </div>

          {/* Transport - return buses */}
          <div
            className="text-center space-y-4 p-8 rounded-xl bg-white border border-wedding-200"
            style={revealStyle(visible, 750, { scale: true })}
          >
            <Bus className="mx-auto size-8 text-silver-500 stroke-[1.2]" />
            <h4 className="font-serif text-xl font-light text-wedding-800">
              Powrót po weselu
            </h4>
            <p className="text-2xl">Kraków → Tarnów → Dąbrowa</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dla gości wracających w trakcie zabawy zapewniamy{" "}
              <strong>transport powrotny</strong> na trasie{" "}
              <strong>Kraków → Tarnów → Dąbrowa Tarnowska</strong> — tą samą
              trasą w drugą stronę.
            </p>
            <ul className="text-sm text-wedding-700 text-left space-y-2 mx-auto max-w-xs">
              <li className="flex gap-3">
                <span className="font-semibold tabular-nums w-16 shrink-0">
                  ~4:00
                </span>
                <span>Planujemy jeden kurs powrotny na koniec wesela</span>
              </li>
            </ul>
            <p className="text-sm text-wedding-600">
              Jeśli wszyscy chętni będą gotowi do powrotu wcześniej, autokar może ruszyć na życzenie o wcześniejszej porze. W takiej sytuacji wystarczy zebrać się w umówionym miejscu i zgłosić się do Rodziców Panny Młodej, którzy przekażą szczegóły dotyczące wcześniejszego wyjazdu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
