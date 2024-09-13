//import components
import Hero from "@/app/components/hero/hero";
import Newsletter from "@/app/components/newsletter/newsletter";
import Products from "@/app/components/products/products";
import Services from "@/app/components/services/services";

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
