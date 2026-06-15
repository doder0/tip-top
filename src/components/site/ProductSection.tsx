import { useState } from "react";
import { Minus, Plus, ShieldCheck, Truck, MapPin, Flame } from "lucide-react";
import { PRODUCT, type ProductColor } from "@/lib/product";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";

export function ProductSection() {
  const [color, setColor] = useState<ProductColor["id"]>("black");
  const [size, setSize] = useState<string>("L");
  const [qty, setQty] = useState(1);
  const { add } = useCart();

  const activeImage = PRODUCT.images.find((i) => i.colorId === color)!;

  const handleAdd = () => {
    const variantId = `${color}-${size}`;
    add({ variantId, color, size, quantity: qty });
    toast.success("Dodato u korpu", { description: `${PRODUCT.title} — ${color.toUpperCase()} / ${size}` });
  };

  return (
    <section id="product" className="relative">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-4 md:grid-cols-2 md:gap-10 md:py-12">
        {/* Gallery */}
        <div className="md:sticky md:top-24 md:self-start">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-muted">
            <img
              key={activeImage.url}
              src={activeImage.url}
              alt={activeImage.alt}
              className="h-full w-full animate-in fade-in zoom-in-95 object-cover duration-300"
            />
            <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand-dark/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
              <Flame className="h-3.5 w-3.5 text-primary" /> Zvanični Tip Top Merch
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {PRODUCT.images.map((img) => (
              <button
                key={img.colorId}
                onClick={() => setColor(img.colorId)}
                aria-label={`Prikaži ${img.colorId} majicu`}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 transition ${
                  color === img.colorId ? "border-primary" : "border-border hover:border-foreground/40"
                }`}
              >
                <img src={img.url} alt={img.alt} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">
            Tip Top Auto Perionica • Vranje
          </div>
          <h1 className="font-display text-4xl leading-[0.95] tracking-wide md:text-6xl">
            PIPNI GA <span className="text-primary">BATO</span>
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">{PRODUCT.description}</p>

          <div className="flex items-baseline gap-3">
            <div className="font-display text-3xl md:text-4xl">{PRODUCT.priceFormatted}</div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">PDV uračunat</div>
          </div>

          {/* Color */}
          <div>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-semibold uppercase tracking-wider">Boja</span>
              <span className="text-muted-foreground capitalize">{PRODUCT.colors.find((c) => c.id === color)?.label}</span>
            </div>
            <div className="flex gap-2">
              {PRODUCT.colors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setColor(c.id)}
                  aria-label={c.label}
                  className={`h-10 w-10 rounded-full border-2 ring-offset-2 ring-offset-background transition ${
                    color === c.id ? "border-foreground ring-2 ring-primary" : "border-border"
                  }`}
                  style={{ backgroundColor: c.swatch }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-semibold uppercase tracking-wider">Veličina</span>
              <a href="#faq" className="text-xs text-muted-foreground underline-offset-2 hover:underline">Vodič za veličine</a>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {PRODUCT.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-12 rounded-md border-2 text-sm font-bold transition ${
                    size === s
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card hover:border-foreground/50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Qty + CTA */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <div className="inline-flex h-14 items-center rounded-md border-2 border-border bg-card">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-full w-12 place-items-center text-muted-foreground hover:text-foreground" aria-label="Smanji količinu">
                <Minus className="h-4 w-4" />
              </button>
              <div className="w-10 text-center font-bold tabular-nums">{qty}</div>
              <button onClick={() => setQty((q) => q + 1)} className="grid h-full w-12 place-items-center text-muted-foreground hover:text-foreground" aria-label="Povećaj količinu">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={handleAdd}
              className="group relative h-14 flex-1 overflow-hidden rounded-md bg-primary px-6 font-display text-xl tracking-wider text-brand-dark shadow-lg shadow-primary/30 transition hover:brightness-110 active:scale-[0.99]"
            >
              KUPI ODMAH — {PRODUCT.priceFormatted}
            </button>
          </div>

          {/* Trust */}
          <ul className="mt-2 grid grid-cols-1 gap-2 text-sm sm:grid-cols-3">
            <li className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2">
              <Truck className="h-4 w-4 text-secondary" /> Brza Dostava
            </li>
            <li className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2">
              <ShieldCheck className="h-4 w-4 text-secondary" /> Pouzećem
            </li>
            <li className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2">
              <MapPin className="h-4 w-4 text-secondary" /> Lokalni Brend
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
