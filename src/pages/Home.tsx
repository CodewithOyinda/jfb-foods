import About from "../components/about/About";
import Hero from "../components/hero/Hero";
import Intro from "../components/intro/Intro";
import Ingredients from "../components/ingredients/Ingredients";
import Order from "../components/order/Order";
import Review from "../components/reviews/Review";


const Home = () => {
  return (
    <div>
        <Hero/>
        <Intro/>
        <About/>
        <Ingredients/>
        <Order/>
        <Review/>
        <div>

        </div>
      
    </div>
  );
}

export default Home;
