//import components
import Hero from "./components/hero/hero";
import Newsletter from "./components/newsletter/newsletter";
import Products from "./components/products/products";
import Services from "./components/services/services";

export default function Home() {
  return (
    <main className="px-0">
      <Hero />
      <Services />
      <Products />
      <Newsletter />
    </main>
  );
}
