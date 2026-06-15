import { Instagram, Facebook, Phone, MapPin, SprayCan, Users, Shirt, Quote, Flame } from "lucide-react";
import { BRAND } from "@/lib/product";
import viralVideo from "@/assets/pipnigabato.mp4";
import about from "@/assets/about.webp";
import cta from "@/assets/cta-bg.webp";

export function Meaning() {
  return (
    <section className="carbon-bg text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:gap-0 md:px-0 md:py-0 md:items-stretch">

        {/* TEXT */}
        <div className="order-1 relative flex flex-col justify-center px-2 py-2 md:order-2 md:px-10 md:py-16">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
            Viralni Snimak
          </div>

          <h2 className="mt-3 font-display text-4xl leading-[0.95] md:text-5xl">
            Kako Je Nastalo <br />
            <span className="text-primary">
              "PIPNI GA BATO"
            </span>
            ?
          </h2>

          <div className="relative mt-6 border-l-2 border-primary pl-5">
            <Quote className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-brand-dark p-1 text-primary" />

            <p className="font-display text-xl leading-snug text-white md:text-2xl">
              „PIPNI GA BATO“
            </p>
          </div>

          <p className="mt-5 text-base text-white/70">
            Sve je počelo viralnim Tip Top snimkom koji je privukao pažnju
            hiljada ljubitelja automobila širom regiona.
          </p>

          <p className="mt-4 text-base text-white/70">
            Rečenica "PIPNI GA BATO" postala je zaštitni znak Tip Top Auto
            Perionice i jedna od najprepoznatljivijih fraza među pratiocima
            zajednice.
          </p>

          <p className="mt-4 text-base text-white/70">
            Zbog ogromne popularnosti snimka, slogan je pretočen u zvaničnu
            Tip Top majicu koju danas nose članovi zajednice.
          </p>

          <div className="mt-7">
            <a
              href="#product"
              className="inline-flex h-12 items-center rounded-md bg-primary px-6 font-display tracking-wider text-brand-dark transition hover:brightness-110"
            >
              ŽELIM SVOJU MAJICU
            </a>
          </div>
        </div>

        {/* VIDEO */}
        <div className="order-2 relative overflow-hidden rounded-xl bg-black md:order-1 md:rounded-none">
          <video
            controls
            preload="metadata"
            className="h-[320px] w-full object-cover md:h-full"
          >
            <source src={viralVideo} type="video/mp4" />
            Vaš browser ne podržava video.
          </video>

          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/85 md:bottom-6 md:left-6">
            <span className="h-px w-8 bg-primary" />
            Originalni Viralni Snimak
          </div>
        </div>

      </div>
    </section>
  );
}

export function Features() {
  const items = [
    { icon: SprayCan, title: "Premium Štampa", text: "Kvalitetna i dugotrajna izrada. Ne puca, ne bledi posle pranja." },
    { icon: Users, title: "Deo Tip Top Zajednice", text: "Više od majice — pripadnost zajednici od 39.000+ ljudi." },
    { icon: Shirt, title: "Udobna Za Svaki Dan", text: "Mekan 100% pamuk. Regular fit, prijatan i u boksu i u gradu." },
  ];
  return (
    <section className="bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Zašto je nose</div>
            <h2 className="mt-2 font-display text-3xl leading-[0.95] md:text-5xl">Tri Razloga.</h2>
          </div>
          <Flame className="hidden h-10 w-10 text-primary/70 md:block" />
        </div>
        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-primary hover:bg-white/[0.06]"
            >
              <div className="absolute right-3 top-3 font-display text-3xl text-white/10">0{i + 1}</div>
              <div className="grid h-12 w-12 place-items-center rounded-md bg-primary text-brand-dark">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl tracking-wide">{title}</h3>
              <p className="mt-2 text-sm text-white/65">{text}</p>
              <div className="mt-5 h-[2px] w-10 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-0 px-0 md:grid-cols-[1fr_1.1fr] md:items-stretch">
        <div className="px-5 py-12 md:px-10 md:py-16">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">O nama</div>
          <h2 className="mt-2 font-display text-3xl leading-[0.95] md:text-5xl">Više Od Auto Perionice</h2>
          <div className="mt-5 space-y-3 text-muted-foreground md:text-lg">
            <p>Godinama gradimo poverenje kroz kvalitetan rad, posvećenost detaljima i ljubav prema automobilima.</p>
            <p>Oko perionice se formirala zajednica ljudi koji dele istu strast.</p>
            <p>
              Danas je <span className="font-semibold text-foreground">„PIPNI GA BATO"</span> simbol te zajednice.
            </p>
          </div>

          <dl className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {[
              ["Materijal", "100% Pamuk"],
              ["Kroj", "Regular Fit"],
              ["Štampa", "Premium"],
              ["Pranje", "Mašinsko 30°"],
              ["Veličine", "S–5XL"],
              ["Iz", "Vranja"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-md border border-border bg-card p-3">
                <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{k}</dt>
                <dd className="mt-1 text-sm font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[320px] overflow-hidden md:min-h-full">
          <img src={about} alt="Tip Top studio" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
          <div className="absolute inset-0 flex items-end p-6">
            <div className="flex items-center gap-3">
              <img src={BRAND.logo} alt="" className="h-14 w-14 rounded-md border-2 border-primary object-cover" />
              <div className="text-white">
                <div className="font-display text-xl tracking-wide">TIP TOP</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">Auto Perionica • Vranje</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <img src={cta} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
      <div className="mx-auto max-w-4xl px-4 py-20 text-center md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> Ograničena količina
        </div>
        <h2 className="mt-5 font-display text-4xl leading-[0.95] md:text-6xl">
          Spreman Da Nosiš <br className="hidden md:block" />
          <span className="text-primary">PIPNI GA BATO</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75 md:text-lg">
          Pridruži se Tip Top zajednici. Poruči svoju majicu pre nego što veličine nestanu.
        </p>
        <a
          href="#product"
          className="mt-8 inline-flex h-14 items-center rounded-md bg-primary px-10 font-display text-xl tracking-wider text-brand-dark shadow-lg shadow-primary/30 transition hover:brightness-110"
        >
          NARUČI MAJICU
        </a>
        <div className="mt-4 text-xs text-white/60">Plaćanje pouzećem • Dostava 1–3 dana</div>
      </div>
      <div className="h-[3px] racing-stripe" />
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80">
      <div className="h-[3px] racing-stripe" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={BRAND.logo} alt="" className="h-10 w-10 rounded-md object-cover" />
            <div>
              <div className="font-display text-lg tracking-wide text-white">TIP TOP</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Auto Perionica • Vranje</div>
            </div>
          </div>
          <p className="mt-3 max-w-sm text-sm">Zvanični merch zajednice. Napravljeno u Vranju, za sve ljubitelje auto kulture.</p>
        </div>

        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Kontakt</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> {BRAND.phone}</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {BRAND.city}</li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Prati nas</div>
          <div className="mt-3 flex gap-2">
            <a href={BRAND.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-md border border-white/15 transition hover:border-primary hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={BRAND.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-md border border-white/15 transition hover:border-primary hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/50">
          © {new Date().getFullYear()} Tip Top Auto Perionica. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
