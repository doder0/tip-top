import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  { q: "Da li se majica skuplja nakon pranja?", a: "Majica je od kvalitetnog 100% pamuka, prethodno tretiranog tako da skupljanje bude minimalno. Preporučujemo pranje na 30°C i sušenje na vazduhu." },
  { q: "Koje veličine postoje?", a: "Dostupne su sve veličine od S do 5XL." },
  { q: "Koliko traje dostava?", a: "Dostava na teritoriji Srbije traje 1–3 radna dana." },
  { q: "Da li postoji plaćanje pouzećem?", a: "Da, plaćanje pouzećem je dostupno za sve porudžbine u Srbiji." },
  { q: "Mogu li da naručim više komada?", a: "Naravno — u korpi možeš dodati više komada, različitih veličina i boja." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-brand-dark text-white">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <div className="text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">FAQ</div>
          <h2 className="mt-2 font-display text-3xl leading-[0.95] md:text-5xl">Česta Pitanja</h2>
        </div>
        <div className="mt-8 space-y-2">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-lg border transition ${
                  isOpen ? "border-primary bg-white/[0.04]" : "border-white/10 bg-white/[0.02] hover:border-white/25"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 font-semibold">
                    <span className={`font-display text-sm ${isOpen ? "text-primary" : "text-white/40"}`}>
                      0{i + 1}
                    </span>
                    {f.q}
                  </span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-180 text-primary" : "text-white/50"}`} />
                </button>
                {isOpen && <div className="px-5 pb-5 pl-12 text-sm text-white/70">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
