import { useState } from "react";
import logo from "../../assets/logo.png";
import { flexD } from "../../styles/global";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur">
      {/* Bar */}
      <div
        className={`mx-auto max-w-6xl h-16 md:h-[92px] px-5 md:px-8
          flex items-center justify-between`}
      >
        {/* Logo */}
        <a href="#" className="inline-flex items-center">
          <img src={logo} alt="Logo" className="h-[44px] w-auto md:h-[70px]" />
        </a>

        {/* Desktop nav */}
        <nav
          className={`${flexD("row")} hidden md:flex items-center gap-10 font-['Inter'] text-[16px] font-[500]`}
        >
          <a href="#home" className="hover:text-[#A30005]">Home</a>
          <a href="#product" className="hover:text-[#A30005]">Product</a>
          <a href="#contact" className="hover:text-[#A30005]">Contact us</a>
          <a href="#testimony" className="hover:text-[#A30005]">Testimony</a>
        </nav>

        {/* Desktop actions */}
        <div
          className={`${flexD("row")} hidden md:flex items-center gap-4 text-[#A30005]`}
        >
          <AiOutlineShoppingCart className="text-xl" />
          <FaWhatsapp className="text-xl" />
          <PiPhoneCall className="text-xl" />
          <a href="tel:+2348142398699" className="underline font-['Mona_Sans'] text-[16px]">
            +2348142398699
          </a>
        </div>

        {/* Mobile actions + menu button */}
        <div className="flex md:hidden items-center gap-3 text-[#A30005]">
          <AiOutlineShoppingCart className="text-2xl" />
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="p-2 rounded-md hover:bg-black/5"
          >
            <HiOutlineMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* dim background */}
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/30"
          />
          {/* sheet */}
          <div className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-black/5"
              >
                <HiOutlineX className="text-2xl" />
              </button>
            </div>

            <nav className="mt-6 space-y-4 font-['Inter'] text-[16px] font-[600]">
              <a href="#home" onClick={() => setOpen(false)} className="block hover:text-[#A30005]">
                Home
              </a>
              <a href="#product" onClick={() => setOpen(false)} className="block hover:text-[#A30005]">
                Product
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-[#A30005]">
                Contact us
              </a>
              <a href="#testimony" onClick={() => setOpen(false)} className="block hover:text-[#A30005]">
                Testimony
              </a>
            </nav>

            <div className="mt-auto pt-6 border-t flex items-center gap-4 text-[#A30005]">
              <FaWhatsapp className="text-2xl" />
              <PiPhoneCall className="text-2xl" />
              <a href="tel:+2348142398699" className="underline font-['Mona_Sans'] text-[16px]">
                +2348142398699
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Hero;
