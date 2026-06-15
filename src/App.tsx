import { CartProvider } from "./lib/cart";
import { Header } from "./components/site/Header";
import { ProductSection } from "./components/site/ProductSection";
import { SocialProof } from "./components/site/SocialProof";
import { Features, Meaning, About, FinalCTA, Footer } from "./components/site/Sections";
import { FAQ } from "./components/site/FAQ";
import { CartDrawer } from "./components/site/CartDrawer";

function App() {
  return (
    <CartProvider>
      <div id="top" className="min-h-screen bg-background text-foreground">
        <Header />

        <main>
          <ProductSection />
          <SocialProof />
          <Meaning />
          <Features />
          <About />
          <FAQ />
          <FinalCTA />
        </main>

        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;