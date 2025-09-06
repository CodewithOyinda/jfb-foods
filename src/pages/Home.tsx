import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Intro from "../components/intro/Intro";
import Ingredients from "../components/ingredients/Ingredients";
import Order from "../components/order/Order";
import Review from "../components/reviews/Review";
import Contact from "../components/contact/Contact";
import BottomNav from "../components/bottomNav/BottomNav";


const Home = () => {
  return (
    <div>
        <Hero/>
        <Intro/>
        <About/>
        <Ingredients/>
        <Order/>
        <Review/>
        <Contact />
        <BottomNav/>
        <div>

        </div>
      
    </div>
  );
}

export default Home;
