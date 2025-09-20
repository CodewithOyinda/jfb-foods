import product from "../../assets/jfb image.png";
import Button from "../buttons/Button";
import star from "../../assets/Star.png";

const Ingredients = () => {
  return (
    <div className="bg-[#F8EBEB]">
      <div className="flex sm:flex-row flex-col items-center justify-between m-[30px]">
        {/* Left Side - Products */}
        <div>
          <img src={product} alt="product" />
        </div>

        {/* Right Side - Info */}
        <div>
          <p className="sm:text-[35px] text-[18px] font-[700] font-['Space_Grotesk'] pt-[30px] pb-[10px]">
            Hot & Spicy Shito Sauce
          </p>

          <div className="font-['Inter'] sm:text-[18px] text-[12px] font-[500]">
            <p>Enjoy our signature sauce, made with fresh ingredients and</p>
            <p>natural spices. It's not just a sauce; it's an experience.</p>
          </div>

          <p className="font-['Inter'] text-[#A30005] sm:text-[20px] text-[14px] font-[600] pt-[20px] pb-[10px]">
            Ingredients
          </p>

          {/* Ingredients + Star */}
          <div className="flex flex-row justify-between gap-2">
            <ul className="list-disc list-inside space-y-2 sm:text-[18px] text-[12px] font-['Inter'] font-[500]">
              <li>Pepper</li>
              <li>Ginger</li>
              <li>Garlic</li>
              <li>Onions</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 sm:text-[18px] text-[12px] font-['Inter'] font-[500]">
              <li>Chilli</li>
              <li>Natural Spices</li>
              <li>Mustard Oil</li>
              <li>Meat</li>
            </ul>

            {/* Star with Text Centered */}
            <div className="relative flex items-center justify-center">
              <img
                src={star}
                alt="star"
                className="sm:w-[180px] sm:h-[180px] w-[100px] h-[100px]"
              />
              <div className="absolute flex flex-col items-center justify-center text-center">
                <p className="sm:text-[32px] text-[14px] font-[700] font-['Space_Grotesk'] text-[#EBEBEB]">
                  8 GH
                </p>
                <p className="sm:text-[18px] text-[12px] font-[500] font-['Space_Grotesk'] text-[#EBEBEB]">
                  per pack
                </p>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
