"use client";

import { Bus, TriangleAlert } from "lucide-react";
import Image from "next/image";
import { useScrollReveal, revealStyle } from "@/hooks/use-scroll-reveal";

export function Directions() {
  const { ref: churchRef, visible: churchVisible } = useScrollReveal(0.1);
  const { ref: venueRef, visible: venueVisible } = useScrollReveal(0.1);

  return (
    <section id="maps" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-center text-wedding-900 tracking-wide">
          Jak dojechać
        </h2>

        {/* Venue */}
        <div className="mt-16 space-y-6" ref={venueRef}>
          <h3
            className="font-serif text-2xl font-light text-wedding-800"
            style={revealStyle(venueVisible, 0)}
          >
            Sala weselna — tu parkujemy
          </h3>


          <div
            className="text-sm text-wedding-700 leading-relaxed space-y-3"
            style={revealStyle(venueVisible, 200)}
          >
            <p>
              Sala weselna mieści się u podnóża Kopca Kościuszki, gdzie znajduje
              się wygodny parking dla gości. To właśnie tutaj zostawiamy
              samochody — zarówno na czas ceremonii, jak i wesela. Dojazd i
              miejsce parkingowe pokazuje poniższa mapa.
            </p>

            {/* Warning */}
            <div className="flex gap-3 p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">
              <TriangleAlert className="size-5 shrink-0 mt-0.5 text-amber-600" />
              <div>
                <p className="font-medium">
                  Uwaga! Google Maps prowadzi błędnie!
                </p>
                <p className="mt-1">
                  Dojeżdżając do Kopca Kościuszki od strony alei Waszyngtona, na
                  rozwidleniu tuż przy kopcu należy{" "}
                  <strong>skręcić w lewo</strong>, a nie w prawo (jak sugeruje
                  nawigacja). Prawy zjazd prowadzi na parking widokowy, a sala
                  weselna znajduje się po lewej stronie, w zabudowaniach fortu u
                  podnóża kopca.
                </p>
              </div>
            </div>

            {/* Shuttle highlight */}
            <div className="flex gap-3 p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">
              <Bus className="size-5 shrink-0 mt-0.5 text-amber-600" />
              <div>
                <p className="font-medium">
                  Autobus dowiezie Was na ceremonię i z powrotem
                </p>
                <p className="mt-1">
                  Przy kościele nie ma parkingu, dlatego samochody zostawiamy
                  tutaj, przy sali weselnej. Stąd <strong>autobus zabierze
                  gości do kościoła na ceremonię</strong>, a po niej{" "}
                  <strong>przywiezie z powrotem</strong> na salę weselną.
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl overflow-hidden border border-wedding-200"
            style={revealStyle(venueVisible, 300, { scale: true })}
          >
            <Image
              src="/mapa-kopiec.png"
              alt="Mapa dojazdu do sali weselnej i parkingu"
              width={2048}
              height={1371}
              className="w-full h-auto"
            />
          </div>

          <div
            className="rounded-xl overflow-hidden border border-wedding-200"
            style={revealStyle(venueVisible, 400, { scale: true })}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.5!2d19.8932!3d50.0545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47164453b3da57f3%3A0x471e09c888fb2f5e!2sKopiec%20Ko%C5%9Bciuszki!5e0!3m2!1spl!2spl!4v1700000000001!5m2!1spl!2spl"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa sali weselnej"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-wedding-200" />

        {/* Church */}
        <div className="space-y-6" ref={churchRef}>
          <h3
            className="font-serif text-2xl font-light text-wedding-800"
            style={revealStyle(churchVisible, 0)}
          >
            Kościół — Ceremonia
          </h3>

          <div
            className="text-sm text-wedding-700 leading-relaxed space-y-3"
            style={revealStyle(churchVisible, 200)}
          >
            <p>
              Kościół znajduje się na Zwierzyńcu, tuż przy moście Dębnickim, nad
              samą Wisłą. Kościół posiada dwa wejścia, jedno od ulicy Tadeusza Kościuszki oraz drugie wejscie od dziedzińca, do którego wejscie znajduje się od strony rzeki Rudawy.
            </p>
            <p>
              <strong>Parking:</strong> Przy kościele nie ma dedykowanego
              parkingu — dlatego dojazd zapewnia autobus z parkingu przy sali
              weselnej (szczegóły powyżej).
            </p>
          </div>

          <div
            className="rounded-xl overflow-hidden border border-wedding-200"
            style={revealStyle(churchVisible, 300, { scale: true })}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1280.5!2d19.9141919!3d50.0521627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b762a8a3e99%3A0xd6e453b9ea19d47f!2sParish%20of%20the%20Holy%20Saviour!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa kościoła"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
