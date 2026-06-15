import { useEffect, useRef, useState } from "react";
import tiptop1 from "@/assets/tiptop1.jpg";
import tiptop2 from "@/assets/tiptop2.jpg";
import tiptop3 from "@/assets/tiptop3.jpg";
import tiptop4 from "@/assets/tiptp4.jpg";
import tiptop5 from "@/assets/tiptop5.jpg";
import tiptop6 from "@/assets/tiptop6.jpg";
import tiptop7 from "@/assets/tiptop7.jpg";
import tiptop8 from "@/assets/tiptop8.jpg";

import { Instagram } from "lucide-react";
import { BRAND } from "@/lib/product";

const GALLERY = [
  { url: tiptop1, tag: "Detailing", caption: "Pipni ga bato." },
  { url: tiptop2, tag: "Engine Bay", caption: "Enterijer." },
  { url: tiptop3, tag: "Customer Ride", caption: "Sređeno u Tip Top-u." },
  { url: tiptop4, tag: "Workshop", caption: "Posao se vidi u detalju." },
  { url: tiptop5, tag: "Detailing", caption: "Pipni ga bato." },
  { url: tiptop6, tag: "Engine Bay", caption: "Enterijer." },
  { url: tiptop7, tag: "Customer Ride", caption: "Sređeno u Tip Top-u." },
  { url: tiptop8, tag: "Workshop", caption: "Posao se vidi u detalju." },
];

function useCountUp(target: number, duration = 1600) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { ref, val };
}

function Stat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { ref, val } = useCountUp(value);
  return (
    <div ref={ref} className="border-l border-white/10 px-4 py-3 first:border-l-0 sm:px-6">
      <div className="font-display text-2xl text-primary md:text-4xl">
        {val.toLocaleString("sr-RS")}{suffix}
      </div>
      <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">{label}</div>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="carbon-bg relative border-y border-white/10 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Zajednica</div>
            <h2 className="mt-2 font-display text-3xl leading-[0.95] md:text-5xl">
              39.000+ Ljudi Prati <span className="text-primary">Tip Top</span>
            </h2>
          </div>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/80 transition hover:border-primary hover:text-primary"
          >
            <Instagram className="h-4 w-4" /> @tiptop
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {GALLERY.map((g) => (
            <a
              key={g.url}
              href={BRAND.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-lg border border-white/10"
            >
              <img
                src={g.url}
                alt={g.caption}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute left-3 top-3 rounded bg-primary/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-dark">
                {g.tag}
              </div>
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px]">
                <span className="font-medium text-white/90">{g.caption}</span>
                <Instagram className="h-3.5 w-3.5 text-white/70" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] md:grid-cols-4">
          <Stat value={39200} label="Followers" />
          <Stat value={1600} suffix="+" label="Objava" />
          <Stat value={5000} suffix="+" label="Mušterija" />
          <Stat value={10} suffix="+" label="Godina" />
        </div>
      </div>
    </section>
  );
}
