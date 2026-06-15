import { ShoppingBag } from "lucide-react";
import { BRAND } from "@/lib/product";
import { useCart } from "@/lib/cart";

export function Header() {
  const { count, setOpen } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={BRAND.logo} alt="Tip Top Auto Perionica logo" className="h-10 w-10 shrink-0 rounded-md object-cover" />
        </a>
        <div className="min-w-0 text-center">
          <div className="font-display text-xl leading-none tracking-wide">TIP TOP</div>
          <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            • Vranje •
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          aria-label="Otvori korpu"
          className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-card transition hover:border-primary hover:text-primary"
        >
          <ShoppingBag className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
              {count}
            </span>
          )}
        </button>
      </div>
      <div className="h-[3px] racing-stripe" />
    </header>
  );
}
