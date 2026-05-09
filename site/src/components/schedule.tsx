const EVENTS = [
  {
    time: "15:00",
    title: "Ceremonia",
    description: "Ślub w Kościele św. Augustyna i św. Jana Chrzciciela w Zwierzyńcu",
  },
  {
    time: "16:30",
    title: "Przyjazd na salę",
    description: "Powitanie gości w sali weselnej przy Kopcu Kościuszki",
  },
  {
    time: "17:00",
    title: "Obiad",
    description: "Uroczysta kolacja weselna",
  },
  {
    time: "18:00",
    title: "Wyjście na Kopiec",
    description: "Wyjście na Kopiec Kościuszki dla chętnych",
  },
];

export function Schedule() {
  return (
    <section id="schedule" className="py-20 md:py-28 bg-wedding-50">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-center text-wedding-900 tracking-wide">
          Harmonogram dnia
        </h2>

        <div className="mt-14 space-y-0">
          {EVENTS.map((event, i) => (
            <div key={i} className="flex gap-6 md:gap-10">
              {/* Time column */}
              <div className="flex flex-col items-center">
                <span className="font-serif text-lg md:text-xl text-wedding-700 font-light w-16 text-right">
                  {event.time}
                </span>
              </div>

              {/* Line */}
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-wedding-400 border-2 border-wedding-200 mt-1.5" />
                {i < EVENTS.length - 1 && (
                  <div className="w-px flex-1 bg-wedding-300" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10">
                <h3 className="text-base font-medium text-wedding-800">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
