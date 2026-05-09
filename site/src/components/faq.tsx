"use client";

const FAQ_ITEMS = [
    {
    question: "Kiedy składamy życzenia?",
    answer:
      "Życzenia składamy po ceremonii zaślubin na dziedzińcu kościoła. Po złożeniu życzeń zachęcamy do sprawnego udania się na salę weselną.",
  },
  {
    question: "Czy mogę przyjechać z dziećmi?",
    answer:
      "Oczywiście można przyjechać z dziećmi, prosimy o informację. Na terenie ośrodka nie ma odpowiedniej infrastruktury dla najmłodszych  (brak kącika zabaw, przewijaka, animacji itp.)",
  },
  {
    question: "Chcę wyjść na kopiec, co muszę wiedzieć?",
    answer:
      "Planujemy wspólne wyjście na szczyt Kopca Kościuszki dla chętnych. Wejście jest krótkie (5-10 minut od sali) po bruku, końcowy fragment jest dość stromy i prowadzi po utwardzonej, miejscami nierównej nawierzchni. Polecamy wygodne obuwie — dla Pań w szpilkach wejście może być mniej komfortowe, dlatego warto rozważyć niższy obcas, lub zabranie dodatkowej pary butów. Nie są potrzebne buty trekkingowe ani sportowe. Starsze osoby dadzą radę spokojnym tempem.",
  },
  {
    question: "Czy jest parking?",
    answer:
      "Tak! Zarówno przy kościele, jak i przy sali weselnej dostępne są miejsca parkingowe. Szczegóły znajdziecie w sekcji Jak dojechać.",
  },
  {
    question: "Czy będzie nocleg?",
    answer:
      "Pracujemy nad zapewnieniem noclegów dla gości. Szczegóły pojawią się wkrótce. W formularzu RSVP możecie zaznaczyć, czy potrzebujecie noclegu.",
  },
  {
    question: "Do której trwa wesele?",
    answer: "Będziemy bawić się do białego rana! Planujemy zakończenie zabawy w okolicach godziny 4:00–5:00.",
  },
  {
    question: "Czy można robić zdjęcia w kościele?",
    answer:
      "Podczas ceremonii prosimy o niefotografowanie — chcemy, żebyście byli z nami w pełni obecni. Profesjonalny fotograf zadba o uwiecznienie tego momentu. Po ceremonii będzie mnóstwo czasu na wspólne zdjęcia!",
  },
  {
    question: "Co z prezentami?",
    answer:
      "Wasz udział w naszym dniu jest dla nas najważniejszy. Jeśli jednak chcielibyście nas obdarować, zamiast kwiatów będziemy wdzięczni za: wino, kawę, książki lub karmę dla zwierząt. Prezenty można wręczyć w dowolnym momencie wesela — przy wejściu na salę będzie przygotowane miejsce na upominki. Można je też przekazać naszym rodzicom lub świadkom.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-wedding-50">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-center text-wedding-900 tracking-wide">
          Najczęściej zadawane pytania
        </h2>

        <div className="mt-14 space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl bg-white border border-wedding-200 overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-sm font-medium text-wedding-800 hover:bg-wedding-50 transition-colors list-none">
                {item.question}
                <svg
                  className="size-4 text-wedding-400 transition-transform group-open:rotate-180 shrink-0 ml-4"
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
