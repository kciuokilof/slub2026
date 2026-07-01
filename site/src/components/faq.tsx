"use client";

import { useScrollReveal, revealStyle } from "@/hooks/use-scroll-reveal";

const FAQ_ITEMS = [
    {
    question: "Kiedy składamy życzenia?",
    answer:
      "Życzenia składamy po ceremonii zaślubin na dziedzińcu kościoła. Po złożeniu życzeń busy zabiorą Was z powrotem na salę weselną.",
  },
  {
    question: "Chcę wyjść na kopiec, co muszę wiedzieć?",
    answer:
      "Jeśli pogoda pozwoli, chcemy wspólnie wyjść na szczyt Kopca Kościuszki. Atrakcja dla chętnych. Wejście jest krótkie (5-10 minut od sali) po bruku, końcowy fragment jest dość stromy i prowadzi po utwardzonej, miejscami nierównej nawierzchni. Polecamy wygodne obuwie, warto rozważyć niższy obcas, lub zabranie dodatkowej pary butów. Nie są potrzebne buty trekkingowe ani sportowe. Starsze osoby dadzą radę spokojnym tempem.",
  },
  {
    question: "Czy jest parking?",
    answer:
      "Przy sali weselnej dostępne są bezpłatne miejsca parkingowe (zarówno przy drodze dojazdowej jak i na terenie kopca). Z miejsca zaznaczonego na mapce kopca odjeżdżają autobusy które zabiorą Was do kościoła i z powrotem na salę weselną. Niestety, przy kościele nie ma dedykowanego parkingu. Jeśli zdecydujecie się jechać do kościoła samodzielnie, trzeba zaparkować na publicznych płatnych miejscach parkingowych.",
  },
  {
    question: "Czy będzie nocleg?",
    answer:
      "Pracujemy nad zapewnieniem noclegów dla gości. Szczegóły pojawią się wkrótce. W formularzu RSVP możecie zaznaczyć, czy potrzebujecie noclegu.",
  },
  {
    question: "Do której trwa wesele?",
    answer: "Będziemy bawić się do białego rana! Planujemy zakończenie zabawy w okolicach godziny 4:00–5:00.",
  }
];

export function Faq() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="faq" className="py-20 md:py-28 bg-wedding-50">
      <div className="mx-auto max-w-3xl px-6" ref={ref}>
        <h2
          className="font-serif text-3xl md:text-4xl font-light text-center text-wedding-900 tracking-wide"
          style={revealStyle(visible, 0)}
        >
          Najczęściej zadawane pytania
        </h2>

        <div className="mt-14 space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <details
              key={item.question}
              className="group rounded-xl bg-white border border-wedding-200 overflow-hidden"
              style={revealStyle(visible, 100 + i * 80)}
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-sm font-medium text-wedding-800 hover:bg-wedding-50 transition-colors list-none">
                {item.question}
                <svg
                  className="size-4 text-silver-400 transition-transform group-open:rotate-180 shrink-0 ml-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
