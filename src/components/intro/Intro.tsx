import bg from "../../assets/bg-image.png";
import product from "../../assets/jfb image.png";
import frame from "../../assets/Frame-1 (1).png";
import frame2 from "../../assets/Frame-1 (2).png";
import { flexD } from "../../styles/global";
import Button from "../buttons/button";

const Intro = () => {
  return (
    <div className="relative">
      {/* BG */}
      <div>
        <img src={bg} alt="bg" className="w-full h-auto" />
      </div>

      {/* HERO row — centered, with exactable spacing */}
      <div
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-full max-w-6xl px-6
          flex sm:flex-row flex-col items-center justify-between gap-12
          z-20
        "
      >
        {/* LEFT: text */}
        <div className="max-w-[560px]">
          <div
            className="flex items-center gap-4 sm:text-[46px] text-[20px] font-[700] font-['Space_Grotesk']"
          >
            <p className="text-[#A30005]">Bold</p>
            <p>and</p>
            <p className="text-[#A30005]">spicy</p>
            <p>With</p>
          </div>

          <div className="sm:text-[46px] text-[20px] font-[700] font-['Space_Grotesk']">
            <p>Shitoland&apos;s irresistible blend.</p>
          </div>

          <div className="font-['Mona_Sans'] text-[12px] sm:text-[18px] font-[500] mt-2">
            <p>Experience the bold, spicy essence of Ghananian</p>
            <p>cuisine with Shitoland&apos;s irresistible shito sauce.</p>
          </div>

          <div className="mt-6">
            <Button />
          </div>
        </div>

        {/* RIGHT: products — overlap & depth */}
        <div className="flex items-end">
          <img
            src={product}
            alt="product"
           className="sm:w-full w-[250px] sm:h-full h-[80px]"
          />
        </div>
      </div>

      {/* FRAMES (behind content) */}
      <div className="absolute z-2 pointer-events-none translate-y-24"> 
        <img src={frame} alt="frame" className="mt-[-120px]" /> 
        <img src={frame2} alt="frame2" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full" /> 
      </div>
    </div>
  );
};

export default Intro;
