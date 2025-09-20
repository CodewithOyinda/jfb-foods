import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Intro from "../components/intro/Intro";
import Ingredients from "../components/ingredients/Ingredients";
import Order from "../components/order/Order";
import Review from "../components/reviews/Review";
import Contact from "../components/contact/contact";
import BottomNav from "../components/bottomNav/BottomNav";

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
