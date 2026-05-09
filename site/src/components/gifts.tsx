import { Wine, Coffee, BookOpen, PawPrint } from "lucide-react";

const GIFTS = [
  { icon: Wine, label: "Wino" },
  { icon: Coffee, label: "Kawa" },
  { icon: BookOpen, label: "Książki" },
  { icon: PawPrint, label: "Karma dla zwierząt" },
];

export function Gifts() {
  return (
    <section id="gifts" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-wedding-900 tracking-wide">
          Prezenty
        </h2>
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
          Wasz udział w naszym dniu jest dla nas najważniejszy. Jeśli jednak
          chcielibyście nas obdarować, zamiast kwiatów będziemy wdzięczni za:
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {GIFTS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <Icon className="size-10 text-wedding-500 stroke-[1.2]" />
              <span className="text-sm font-medium text-wedding-700">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
