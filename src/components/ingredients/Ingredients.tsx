import product from "../../assets/product.png";
import Button from "../buttons/Button";
import star from "../../assets/Star.png";

const Ingredients = () => {
  return (
    <div className="bg-[#F8EBEB]">
      <div className="flex flex-row items-center justify-between m-[30px]">
        <div className="flex flex-row items-center justify-center">
          <img
            src={product}
            alt="product"
            className="h-[350px] w-[500px] block -mr-[290px]"
          />
          <img
            src={product}
            alt="product"
            className="h-[300px] w-[400px] block -mr-[180px]"
          />
        </div>
        <div>
          <p className={`text-[46px] font-[700] font-['Space_Grotesk']`}>
            Hot & Spicy Shito Sauce
          </p>
          <div className="font-['Mona_Sans'] text-[18px] font-[500]">
            <p>Enjoy our signature sauce, made with fresh ingredients and</p>
            <p>natural spices. It's not just a sauce; it's an experience.</p>
          </div>
          <p className={`text-[#A30005]`}>Ingredients</p>
          <div className="flex flex-row justify-between gap-2">
            <ul className="list-disc list-inside space-y-2 text-[18px] font-['Mona_Sans']">
              <li>Pepper</li>
              <li>Ginger</li>
              <li>Garlic</li>
              <li>Onions</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-[18px] font-['Mona_Sans']">
              <li>Chilli</li>
              <li>Natural Spices</li>
              <li>Mustard Oil</li>
              <li>Meat</li>
            </ul>
            <img
            src={star}
            alt="star"
          />
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
