import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { useCart, formatRSD } from "@/lib/cart";
import { PRODUCT } from "@/lib/product";
import { toast } from "sonner";

export function CartDrawer() {
  const { open, setOpen, lines, remove, setQty, totalRSD } = useCart();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const checkout = () => {
    toast.success("Porudžbina prosleđena", { description: "Kontaktiraćemo vas radi potvrde (demo checkout)." });
    setOpen(false);
  };

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="font-display text-xl tracking-wide">KORPA</h3>
          <button onClick={() => setOpen(false)} aria-label="Zatvori" className="grid h-9 w-9 place-items-center rounded-md hover:bg-muted">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <div className="grid h-full place-items-center text-center text-muted-foreground">
              <div>
                <p>Korpa je prazna.</p>
                <button onClick={() => setOpen(false)} className="mt-3 text-sm font-semibold text-primary underline-offset-4 hover:underline">Nastavi kupovinu</button>
              </div>
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map((l) => {
                const img = PRODUCT.images.find((i) => i.colorId === l.color)?.url;
                return (
                  <li key={l.variantId} className="flex gap-3 rounded-lg border border-border bg-card p-3">
                    <img src={img} alt="" className="h-20 w-20 shrink-0 rounded-md object-cover" />
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-semibold">{PRODUCT.title}</div>
                      <div className="text-xs uppercase text-muted-foreground">{l.color} • {l.size}</div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="inline-flex items-center rounded-md border border-border">
                          <button onClick={() => setQty(l.variantId, l.quantity - 1)} className="grid h-8 w-8 place-items-center" aria-label="−"><Minus className="h-3 w-3" /></button>
                          <span className="w-8 text-center text-sm tabular-nums">{l.quantity}</span>
                          <button onClick={() => setQty(l.variantId, l.quantity + 1)} className="grid h-8 w-8 place-items-center" aria-label="+"><Plus className="h-3 w-3" /></button>
                        </div>
                        <div className="font-bold">{formatRSD(l.quantity * PRODUCT.price.amount)}</div>
                      </div>
                    </div>
                    <button onClick={() => remove(l.variantId)} aria-label="Ukloni" className="self-start text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-border p-5">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Ukupno</span><span>{formatRSD(totalRSD)}</span>
            </div>
            <button
              onClick={checkout}
              className="mt-3 h-12 w-full rounded-md bg-primary font-display tracking-wider text-brand-dark transition hover:brightness-110"
            >
              NARUČI POUZEĆEM
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
