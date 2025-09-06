import logo from "../../assets/logo.png";
import {flexD } from "../../styles/global";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";

const Hero = () => {
  return (
    <div className={`flex ${flexD("row")} justify-between items-center ml-20 mr-20 h-[92px]`}>
      {/* Logo */}
      <div className="w-[64px] h-[70px]">
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation */}
      <div className={`${flexD("row")} justify-between items-center gap-10 font-['Inter'] text-[16px] font-[500]`}>
        <p>Home</p>
        <p>Product</p>
        <p>Contact Us</p>
        <p>Testimony</p>
      </div>

      {/* Icons + Contact */}
      <div className={`${flexD("row")} justify-between items-center gap-4 text-[#A30005]`}>
        <AiOutlineShoppingCart />
        <FaWhatsapp />
        <PiPhoneCall />
        <p className="underline font-['Mona_Sans'] text-[16px]">+2348142398699</p>
      </div>
    </div>
  );
};

export default Hero;
