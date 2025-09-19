import About from "../components/about/about";
import Hero from "../components/hero/hero";
import Intro from "../components/intro/intro";
import Ingredients from "../components/ingredients/ingredients";
import Order from "../components/order/order";
import Review from "../components/reviews/review";
import Contact from "../components/contact/contact";
import BottomNav from "../components/bottomNav/bottomNav";

export default function Home() {
  return (
    // smooth scroll for the whole page
    <div className="scroll-smooth">
      <Hero />

      {/* Home → Intro */}
      <section id="home" className="scroll-mt-24 md:scroll-mt-[110px]">
        <Intro />
      </section>

      {/* Product → About */}
      <section id="product" className="scroll-mt-24 md:scroll-mt-[110px]">
        <About />
      </section>

      <Ingredients />
      <Order />

      {/* Testimony → Reviews */}
      <section id="testimony" className="scroll-mt-24 md:scroll-mt-[110px]">
        <Review />
      </section>

      {/* Contact → Contact */}
      <section id="contact" className="scroll-mt-24 md:scroll-mt-[110px]">
        <Contact />
      </section>

      <BottomNav />
    </div>
  );
}
