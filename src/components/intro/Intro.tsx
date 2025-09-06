import bg from "../../assets/bg-image.png";
import product from "../../assets/product.png";
import frame from "../../assets/Frame-1 (1).png";
import frame2 from "../../assets/Frame-1 (2).png";
import { flexD } from "../../styles/global";
import Button from "../buttons/button";

const Intro = () => {
  return (
    <div>
      <div>
        <img src={bg} alt="bg" />
      </div>
      <div className="flex flex-row items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div>
          <div
            className={`${flexD(
              "row"
            )} items-center gap-4 text-[46px] font-[700] font-['Space_Grotesk']`}
          >
            <p className={`text-[#A30005]`}>Bold</p>
            <p>and</p>
            <p className={`text-[#A30005]`}>spicy</p>
            <p>With</p>
          </div>
          <div className={`text-[46px] font-[700] font-['Space_Grotesk']`}>
            <p>Shitoland's irresistible blend.</p>
          </div>
          <div className="font-['Mona_Sans'] text-[18px] font-[500]">
            <p>Experience the bold, spicy essence of Ghananian</p>
            <p>cuisine with Shitoland's irresistible shito sauce.</p>
          </div>
          <Button />
        </div>
        <div className="flex flex-row items-center gap-2 ">
          <img src={product} alt="product" className="h-[400px] w-[400px]" />
          <img src={product} alt="product" className="h-[400px] w-[400px]" />
        </div>
      </div>
      <div className="absolute ">
        <img src={frame} alt="frame" className="" />
        <img
          src={frame2}
          alt="frame2"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full"
        />
      </div>
    </div>
  );
};

export default Intro;
