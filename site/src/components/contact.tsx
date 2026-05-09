"use client";

import { Phone } from "lucide-react";
import { useScrollReveal, revealStyle } from "@/hooks/use-scroll-reveal";

const CONTACTS = [
  { role: "Świadkowa", name: "Anna Kowalska", phone: "+48 512 345 678" },
  { role: "Świadek", name: "Ludwik Bukowski", phone: "+48 601 987 588" },
  { role: "Mama Panny Młodej", name: "Barbara Golemo", phone: "+48 604 428 057" },
  { role: "Tata Panny Młodej", name: "Paweł Golemo", phone: "+48 545 678 901" },
  { role: "Mama Pana Młodego", name: "Justyna Kozioł", phone: "+48 500 303 603" },
  { role: "Tata Pana Młodego", name: "Krystian Kozioł", phone: "+48 501 615 787" },
  { role: "Pani Młoda", name: "Jagna Golemo", phone: "+48 784 940 324" },
  { role: "Pan Młody", name: "Kamil Kozioł", phone: "+48 500 227 184" },
  { role: "Brat Pana Młodego", name: "Kacper Kozioł", phone: "+48 500 537 516" },
];

export function Contact() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <section id="contact" className="py-20 md:py-28 bg-wedding-50">
      <div className="mx-auto max-w-4xl px-6" ref={ref}>
        <h2
          className="font-serif text-3xl md:text-4xl font-light text-center text-wedding-900 tracking-wide"
          style={revealStyle(visible, 0)}
        >
          Kontakt
        </h2>
        <p
          className="mt-4 text-sm text-muted-foreground text-center"
          style={revealStyle(visible, 100)}
        >
          Macie pytania? Śmiało dzwońcie lub piszcie!
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTACTS.map((c, i) => (
            <div
              key={c.role}
              className="text-center space-y-2 p-6 rounded-xl bg-white border border-wedding-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              style={revealStyle(visible, 150 + i * 60, { scale: true })}
            >
              <p className="text-xs font-medium tracking-wider uppercase text-silver-500">
                {c.role}
              </p>
              <p className="text-sm font-medium text-wedding-800">{c.name}</p>
              <a
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-1.5 text-sm text-wedding-600 hover:text-wedding-800 transition-colors"
              >
                <Phone className="size-3.5" />
                {c.phone}
              </a>
            </div>
          ))}
        </div>

        <div
          className="mt-10 max-w-lg mx-auto text-center space-y-3"
          style={revealStyle(visible, 700)}
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            Przed weselem będziemy więcej niż szczęśliwi, mogąc odpowiedzieć na wszystkie Wasze pytania — dzwońcie i piszcie śmiało! W dniu wesela prosimy jednak kierować pytania do bliskich wymienionych powyżej.
          </p>
          <p className="text-sm text-wedding-700 leading-relaxed">
            Jeśli wśród Waszych bliskich są osoby, które nie korzystają z internetu — prosimy, przekażcie im najważniejsze informacje z tej strony osobiście lub telefonicznie. Będziemy wdzięczni!
          </p>
        </div>
      </div>
    </section>
  );
}
