import { TriangleAlert } from "lucide-react";
import Image from "next/image";

export function Directions() {
  return (
    <section id="maps" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-center text-wedding-900 tracking-wide">
          Jak dojechać
        </h2>

        {/* Church */}
        <div className="mt-16 space-y-6">
          <h3 className="font-serif text-2xl font-light text-wedding-800">
            Kościół — Ceremonia
          </h3>
          <p className="text-sm text-muted-foreground">
            Kościół św. Augustyna i św. Jana Chrzciciela w Zwierzyńcu
            <br />
            ul. Tadeusza Kościuszki, 30-114 Kraków
          </p>

          <div className="text-sm text-wedding-700 leading-relaxed space-y-3">
            <p>
              Kościół znajduje się na Zwierzyńcu, tuż przy moście Dębnickim, nad
              samą Wisłą. Jadąc od strony centrum — kierujcie się aleją
              Krasińskiego w stronę Salwatora. Po minięciu ronda przy Poczcie
              Głównej skręćcie w ulicę Kościuszki. Kościół znajduje się po prawej
              stronie, tuż za Klasztorem Sióstr Norbertanek.
            </p>
            <p>
              <strong>Parking:</strong> Parking dostępny jest wzdłuż ulicy
              Kościuszki (miejsca równoległe) oraz na małym parkingu przy
              klasztorze. Można też zaparkować na ulicy św. Bronisławy lub przy
              Salwatorze.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-wedding-200">
            <Image
              src="/mapa-kosciol.png"
              alt="Mapa dojazdu do kościoła"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="rounded-xl overflow-hidden border border-wedding-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.5!2d19.9085!3d50.0555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47164467e5b2e477%3A0x6d7b7e8e3b8c8b8b!2sKo%C5%9Bci%C3%B3%C5%82%20%C5%9Bw.%20Augustyna%20i%20%C5%9Bw.%20Jana%20Chrzciciela!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
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

        {/* Divider */}
        <div className="my-16 border-t border-wedding-200" />

        {/* Venue */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl font-light text-wedding-800">
            Sala weselna — Wesele
          </h3>
          <p className="text-sm text-muted-foreground">
            Sala weselna przy Kopcu Kościuszki
            <br />
            al. Jerzego Waszyngtona 1, 30-204 Kraków
          </p>

          <div className="text-sm text-wedding-700 leading-relaxed space-y-3">
            <p>
              Sala weselna mieści się u podnóża Kopca Kościuszki. Jadąc od strony
              centrum Krakowa, kierujcie się aleją Waszyngtona (od strony
              Salwatora / Zwierzyńca). Aleja prowadzi serpentynami pod górę w
              kierunku kopca.
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

            <p>
              <strong>Parking:</strong> Parking dla gości dostępny jest
              bezpośrednio przy sali weselnej. Wjazd na parking znajduje się zaraz
              po skręceniu w lewo na rozwidleniu. Dodatkowe miejsca parkingowe
              są dostępne niżej, przy alei Waszyngtona.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-wedding-200">
            <Image
              src="/mapa-kopiec.png"
              alt="Mapa dojazdu do sali weselnej"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="rounded-xl overflow-hidden border border-wedding-200">
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
      </div>
    </section>
  );
}
