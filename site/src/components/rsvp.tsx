export function Rsvp() {
  return (
    <section id="rsvp" className="py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-wedding-900 tracking-wide">
          Potwierdź przybycie
        </h2>

        <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
          Prosimy o potwierdzenie obecności do{" "}
          <strong className="text-wedding-800">24 września 2026</strong>.
        </p>

        <div className="mt-10 text-left max-w-sm mx-auto">
          <p className="text-sm text-wedding-700 font-medium mb-3">
            W formularzu zapytamy o:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-wedding-400">—</span>
              Imię i nazwisko
            </li>
            <li className="flex gap-2">
              <span className="text-wedding-400">—</span>
              Czy zabierasz osobę towarzyszącą (+1)?
            </li>
            <li className="flex gap-2">
              <span className="text-wedding-400">—</span>
              Preferencje żywieniowe / alergie
            </li>
            <li className="flex gap-2">
              <span className="text-wedding-400">—</span>
              Czy potrzebujesz noclegu? (od piątku / od soboty)
            </li>
            <li className="flex gap-2">
              <span className="text-wedding-400">—</span>
              Czy potrzebujesz transportu? (Tarnów → Kraków / bus powrotny)
            </li>
            <li className="flex gap-2">
              <span className="text-wedding-400">—</span>
              Dedykacja muzyczna
            </li>
          </ul>
        </div>

        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-wedding-700 px-8 py-3.5 text-sm font-medium text-white tracking-wider uppercase hover:bg-wedding-800 transition-colors"
          >
            Wypełnij formularz RSVP
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Formularz Google Forms — link zostanie uzupełniony wkrótce.
          </p>
        </div>
      </div>
    </section>
  );
}
