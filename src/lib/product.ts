import logo from "@/assets/logo.jpg";
import black from "@/assets/mockup.webp";
import white from "@/assets/mockupWhite.webp";
import red from "@/assets/mockupRed.webp";

export const BRAND = {
  logo: logo,
  name: "Tip Top",
  tagline: "• Vranje •",
  instagram: "https://www.instagram.com/tip_top_auto_perionica/",
  facebook: "https://facebook.com",
  phone: "+381 60 000 0000",
  city: "Vranje, Srbija",
};

export type ProductVariant = {
  id: string;
  title: string; 
  color: ProductColor["id"];
  size: string;
  available: boolean;
  price: { amount: number; currencyCode: string };
};

export type ProductColor = {
  id: "black" | "white" | "red";
  label: string;
  swatch: string;
  image: string;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  priceFormatted: string;
  price: { amount: number; currencyCode: string };
  colors: ProductColor[];
  sizes: string[];
  images: { url: string; alt: string; colorId: ProductColor["id"] }[];
  variants: ProductVariant[];
};

const COLORS: ProductColor[] = [
  { id: "black", label: "Crna", swatch: "#171717", image: black },
  { id: "white", label: "Bela", swatch: "#f5f5f5", image: white },
  { id: "red", label: "Crvena", swatch: "#c1272d", image: red },
];

const SIZES = ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

export const PRODUCT: Product = {
  id: "tiptop-pipni-ga-bato",
  handle: "pipni-ga-bato",
  title: "PIPNI GA BATO",
  description:
    'Zvanična Tip Top majica. Za sve koji znaju kako izgleda auto kada je stvarno sređen.',
  priceFormatted: "1.500 RSD",
  price: { amount: 1500, currencyCode: "RSD" },
  colors: COLORS,
  sizes: SIZES,
  images: COLORS.map((c) => ({ url: c.image, alt: `Tip Top Pipni Ga Bato majica — ${c.label}`, colorId: c.id })),
  variants: COLORS.flatMap((c) =>
    SIZES.map((s) => ({
      id: `${c.id}-${s}`,
      title: `${c.label} / ${s}`,
      color: c.id,
      size: s,
      available: true,
      price: { amount: 1500, currencyCode: "RSD" },
    })),
  ),
};
