import logo from "../../assets/logo.png";
// import { bg, flexD, px, mt } from "@/styles/global";
import {  w, h, flex, flexD } from "../../styles/global";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";

const Hero = () => {
  return (
    <div>
      <div className={`${w(64)} ${h(70)}`}>
        <img src={logo}  />
      </div>
      
      <div className={`${flexD("row")}`}>
        <p>Home</p>
        <p>Product</p>
        <p>Contact Us</p>
        <p>Testimony</p>
      </div>
      <div className={`${flexD("row")}`}>
        <AiOutlineShoppingCart />
        <FaWhatsapp />
        <PiPhoneCall />
        <p>+2348142398699</p>
      </div>
    </div>
  );
}

export default Hero;
