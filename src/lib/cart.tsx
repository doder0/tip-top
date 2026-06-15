import { createContext, useContext, useState, type ReactNode } from "react";
import { PRODUCT } from "./product";

export type CartLine = {
  variantId: string;
  color: string;
  size: string;
  quantity: number;
};

type CartCtx = {
  lines: CartLine[];
  count: number;
  totalRSD: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (line: Omit<CartLine, "quantity"> & { quantity?: number }) => void;
  remove: (variantId: string) => void;
  setQty: (variantId: string, qty: number) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  const add: CartCtx["add"] = (line) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.variantId === line.variantId);
      const qty = line.quantity ?? 1;
      if (existing) {
        return prev.map((l) => (l.variantId === line.variantId ? { ...l, quantity: l.quantity + qty } : l));
      }
      return [...prev, { ...line, quantity: qty }];
    });
    setOpen(true);
  };
  const remove = (id: string) => setLines((p) => p.filter((l) => l.variantId !== id));
  const setQty = (id: string, qty: number) =>
    setLines((p) => p.map((l) => (l.variantId === id ? { ...l, quantity: Math.max(1, qty) } : l)));

  const count = lines.reduce((a, l) => a + l.quantity, 0);
  const totalRSD = lines.reduce((a, l) => a + l.quantity * PRODUCT.price.amount, 0);

  return (
    <Ctx.Provider value={{ lines, count, totalRSD, open, setOpen, add, remove, setQty }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used inside CartProvider");
  return v;
}

export const formatRSD = (n: number) => `${n.toLocaleString("sr-RS")} RSD`;
