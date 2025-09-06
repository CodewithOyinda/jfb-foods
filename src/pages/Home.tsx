import About from "../components/about/about";
import Hero from "../components/hero/hero";
import Intro from "../components/intro/intro";
import Ingredients from "../components/ingredients/ingredients";
import Order from "../components/order/order";
import Review from "../components/reviews/review";
import Contact from "../components/contact/contact";
import BottomNav from "../components/bottomNav/bottomNav";


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
