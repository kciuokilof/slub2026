import { Hotel, Bus } from "lucide-react";

export function Accommodation() {
  return (
    <section id="accommodation" className="py-20 md:py-28 bg-wedding-50">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-center text-wedding-900 tracking-wide">
          Noclegi & Transport
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {/* Accommodation */}
          <div className="text-center space-y-4 p-8 rounded-xl bg-white border border-wedding-200">
            <Hotel className="mx-auto size-8 text-wedding-500 stroke-[1.2]" />
            <h3 className="font-serif text-xl font-light text-wedding-800">
              Noclegi
            </h3>
            <p className="text-2xl">Wkrótce</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pracujemy nad ustaleniem szczegółów dotyczących noclegów dla
              naszych gości. Informacje o hotelach, adresach i cenach pojawią
              się tutaj wkrótce.
            </p>
            <p className="text-sm text-wedding-600">
              W formularzu RSVP możecie zaznaczyć, czy potrzebujecie noclegu
              (od piątku lub od soboty).
            </p>
          </div>

          {/* Transport */}
          <div className="text-center space-y-4 p-8 rounded-xl bg-white border border-wedding-200">
            <Bus className="mx-auto size-8 text-wedding-500 stroke-[1.2]" />
            <h3 className="font-serif text-xl font-light text-wedding-800">
              Transport
            </h3>
            <p className="text-2xl">Wkrótce</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Planujemy zorganizować transport autobusowy na trasie{" "}
              <strong>Tarnów → Kraków</strong> (przed ślubem) oraz{" "}
              <strong>busy powrotne</strong> po weselu.
            </p>
            <p className="text-sm text-wedding-600">
              Szczegóły dotyczące godzin odjazdu, miejsca zbiórki i parkingu
              zostaną podane wkrótce. Zaznacz w formularzu RSVP, czy
              potrzebujesz transportu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
