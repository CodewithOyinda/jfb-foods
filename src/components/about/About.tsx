import Button from "../buttons/Button";
import products from "../../assets/products.png";
import product from "../../assets/product.png";
import sachet from "../../assets/sachet.png";
import mask from "../../assets/Mask group (1).png";
import maskgroup from "../../assets/Mask group.png";
import pepperOne from "../../assets/Pepper-1.png";
import pepperTwo from "../../assets/Pepper-2.png";
import pepperThree from "../../assets/pepper-3.png";
import { motion } from "framer-motion";
import React from "react";

type PepperItem = {
  img: string;
  title: string;
  lines: string[];
};

const pepperItems: PepperItem[] = [
  {
    img: pepperOne,
    title: "Original Shito Sauce:",
    lines: [
      "Our classic shito sauce delivers a",
      "perfect balance of heat and flavor,",
      "creating an unforgetting taste",
      "experience that enhances any dish.",
    ],
  },
  {
    img: pepperTwo,
    title: "Mild Shito Sauce:",
    lines: [
      "For those who prefer a gentler spice, our",
      "mild shito sauce offers a delightful,",
      "subtle kick without overwhelming the",
      "palate.",
    ],
  },
  {
    img: pepperThree,
    title: "Extra hot Shito Sauce:",
    lines: [
      "Prepared for true spice enthusiasts,",
      "our hot and spicy shito sauce brings an",
      "intense, fiery heat that will ignite your",
      "taste buds.",
    ],
  },
];

function PepperCard({
  item,
  className = "",
  style = {},
}: {
  item: PepperItem;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`bg-white rounded-[10px] border border-[#C9C9C975] shadow-lg p-4 flex-none ${className}`}
      style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.06)", ...style }}
    >
      <div className="flex items-center justify-center pt-3 pb-2">
        <img src={item.img} alt="pepper" className="max-h-[120px] w-auto" />
      </div>
      <p className="text-[18px] leading-tight font-[700] font-['Space_Grotesk'] mt-3 mb-2 text-center">
        {item.title}
      </p>
      <div className="font-['Mona_Sans'] text-[15px] leading-snug flex flex-col items-center text-center mb-10">
        {item.lines.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
    </div>
  );
}

/** Mobile carousel constants */
const CARD_W = 280; 
const GAP = 16;     
const SPEED = 8;    
const LEN = pepperItems.length;

const HALF = LEN * (CARD_W + GAP) - GAP;

const About = () => {
  return (
    <div className="sm:mt-50 mt-10">
      {/* Top about block */}
      <div className="flex sm:flex-row flex-col px-6 items-center justify-center gap-10">
        <div>
          <p className="sm:text-[46px] text-[20px] font-[700] font-['Space_Grotesk']">
            About us Shitoland
          </p>
          <div className="font-['Mona_Sans'] sm:text-[20px] text-[14px] font-[500]">
            <p>At JFB foods, we bring the fiery flavors straight to your table.</p>
            <p>Our authentic shito sauce is crafted using traditional recipes</p>
            <p>and the finest ingredients, delivering a unique blend of heat</p>
            <p className="pb-[30px]">and flavor that will elevate any dish.</p>
          </div>
          <Button />
        </div>

        <div className="bg-[#F8EBEB] sm:w-[585px] w-[300px] h-[250px] sm:h-[391px] rounded-[5px]">
          <div className="flex flex-row items-center justify-center">
            <img src={products} alt="product" />
          </div>
        </div>
      </div>

      {/* Our Product heading */}
      <div className="flex flex-row items-center justify-between m-[30px]">
        <div>
          <p className="sm:text-[46px] text-[20px] font-[700] font-['Space_Grotesk']">
            Our Product
          </p>
          <div className="font-['Mona_Sans'] sm:text-[20px] text-[12px] font-[500]">
            <p>We offer a diverse array of product that nourish</p>
            <p>your taste buds and a blend to your taste.</p>
          </div>
        </div>
        <img src={mask} alt="mask" className="h-[148px] w-[120px]" />
      </div>

      {/* Three product cards */}
      <div className="flex sm:flex-row flex-col items-center justify-between gap-[10px] m-[30px]">
        <div className="w-[400px] h-auto bg-[#FFFFFF] rounded-[10px] border border-[#C9C9C975] p-6 shadow-lg">
          <div className="flex items-center justify-center pt-[20px] pb-[10px]">
            <img src={product} alt="product" className="h-[180px] w-[200px]" />
          </div>
          <p className="text-[22px] font-[700] font-['Space_Grotesk']">Medium Shito Sauce:</p>
          <div className="flex flex-row items-center justify-between">
            <p className="font-['Mona_Sans'] text-[16px]">50 CL . 40 GH</p>
            <Button />
          </div>
        </div>
        <div className="w-[400px] h-auto bg-[#FFFFFF] rounded-[10px] border border-[#C9C9C975] p-6 shadow-lg">
          <div className="flex items-center justify-center pt-[20px] pb-[10px]">
            <img src={product} alt="product" className="h-[200px] w-[300px]" />
          </div>
          <p className="text-[22px] font-[700] font-['Space_Grotesk']">Large Shito Sauce:</p>
          <div className="flex flex-row items-center justify-between">
            <p className="font-['Mona_Sans'] text-[16px]">150 CL . 80 GH</p>
            <Button />
          </div>
        </div>
        <div className="w-[400px] h-auto bg-[#FFFFFF] rounded-[10px] border border-[#C9C9C975] p-6 shadow-lg">
          <div className="flex items-center justify-center pt-[20px] pb-[10px]">
            <img src={sachet} alt="sachet" className="h-[180px] w-[140px]" />
          </div>
          <p className="text-[22px] font-[700] font-['Space_Grotesk']">Sachet Shito Sauce:</p>
          <div className="flex flex-row items-center justify-between">
            <p className="font-['Mona_Sans'] text-[16px]">5 CL . 10 GH</p>
            <Button />
          </div>
        </div>
      </div>

      {/* Spices heading */}
      <div className="flex flex-row sm:gap-70 gap-10 m-[50px]">
        <img src={maskgroup} alt="maskgroup" className="h-[148px] w-[120px]" />
        <div>
          <p className="sm:text-[46px] text-[20px] font-[700] font-['Space_Grotesk']">
            Spices for taste buds
          </p>
          <div className="font-['Mona_Sans'] sm:text-[20px] text-[14px] font-[500]">
            <p>We offer a diverse array of product that nourish your</p>
            <p>taste buds and a blend to your taste.</p>
          </div>
        </div>
      </div>

      {/* Desktop 3-across */}
      <div className="hidden sm:flex items-center gap-[10px] justify-between m-[30px]">
        {pepperItems.map((item, i) => (
          <PepperCard key={i} item={item} className="w-[400px]" />
        ))}
      </div>

      {/* Mobile auto-scrolling row */}
      <div className="sm:hidden m-[30px]">
        <div className="relative overflow-hidden">
          <motion.div
            className="flex will-change-transform"
            style={{ gap: GAP }}
            animate={{ x: [0, -HALF] }}
            transition={{ duration: SPEED, repeat: Infinity, ease: "linear" }}
            aria-label="Auto-scrolling pepper products carousel"
          >
            {[...pepperItems, ...pepperItems].map((item, i) => (
              <PepperCard key={i} item={item} style={{ width: CARD_W }} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-end mt-[30px] mb-[-100px]">
        <img src={mask} alt="mask" className="h-[148px] w-[120px]" />
      </div>
    </div>
  );
};

export default About;
