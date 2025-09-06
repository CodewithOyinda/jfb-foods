import product from "../../assets/product.png";
import Button from "../buttons/Button";
import star from "../../assets/Star.png";

const Ingredients = () => {
  return (
    <div className="bg-[#F8EBEB]">
      <div className="flex flex-row items-center justify-between m-[30px]">
        {/* Left Side - Products */}
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

        {/* Right Side - Info */}
        <div>
          <p className="text-[35px] font-[700] font-['Space_Grotesk'] pt-[30px] pb-[10px]">
            Hot & Spicy Shito Sauce
          </p>

          <div className="font-['Inter'] text-[18px] font-[500]">
            <p>Enjoy our signature sauce, made with fresh ingredients and</p>
            <p>natural spices. It's not just a sauce; it's an experience.</p>
          </div>

          <p className="font-['Inter'] text-[#A30005] text-[20px] font-[600] pt-[20px] pb-[10px]">Ingredients</p>

          {/* Ingredients + Star */}
          <div className="flex flex-row justify-between gap-2">
            <ul className="list-disc list-inside space-y-2 text-[18px] font-['Inter'] font-[500]">
              <li>Pepper</li>
              <li>Ginger</li>
              <li>Garlic</li>
              <li>Onions</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-[18px] font-['Inter'] font-[500]">
              <li>Chilli</li>
              <li>Natural Spices</li>
              <li>Mustard Oil</li>
              <li>Meat</li>
            </ul>

            {/* Star with Text Centered */}
            <div className="relative flex items-center justify-center">
              <img src={star} alt="star" className="w-[180px] h-[180px]" />
              <div className="absolute flex flex-col items-center justify-center text-center">
                <p className="text-[32px] font-[700] font-['Space_Grotesk'] text-[#EBEBEB]">
                  8 GH
                </p>
                <p className="text-[18px] font-[500] font-['Space_Grotesk'] text-[#EBEBEB]">
                  per pack
                </p>
              </div>
            </div>
          </div>

          <Button />
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
