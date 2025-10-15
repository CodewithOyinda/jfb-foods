import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useCart } from "../../context/CartContext";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();

  // Prevent body scroll when sheet is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : original || "";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Smooth in-page scroll + close mobile sheet
  const handleNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 10);
  };

  return (
    <>
      {/* HEADER BAR */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl h-16 md:h-[92px] px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="inline-flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-[44px] w-auto md:h-[70px]"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10 font-['Inter'] text-[16px] font-[500]">
            <a
              href="#home"
              onClick={handleNav("home")}
              className="hover:text-[#A30005]"
            >
              Home
            </a>
            <a
              href="#product"
              onClick={handleNav("product")}
              className="hover:text-[#A30005]"
            >
              Product
            </a>
            <a
              href="#contact"
              onClick={handleNav("contact")}
              className="hover:text-[#A30005]"
            >
              Contact us
            </a>
            <a
              href="#testimony"
              onClick={handleNav("testimony")}
              className="hover:text-[#A30005]"
            >
              Testimony
            </a>
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-4 text-[#A30005]">
            <div className="relative">
              <AiOutlineShoppingCart className="text-xl" />
              {/* badge */}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-[#A30005] text-white text-[11px] font-semibold rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
                  {cartCount}
                </span>
              )}
            </div>
            <FaWhatsapp className="text-xl" />
            <PiPhoneCall className="text-xl" />
            <a
              href="tel:+2348142398699"
              className="underline font-['Mona_Sans'] text-[16px]"
            >
              +2348142398699
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex md:hidden items-center gap-3 text-[#A30005]">
            <div className="relative">
              <AiOutlineShoppingCart className="text-2xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-[#A30005] text-white text-[10px] font-semibold rounded-full px-1 py-0.5 min-w-[16px] text-center">
                  {cartCount}
                </span>
              )}
            </div>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="p-2 rounded-md hover:bg-black/5"
            >
              <HiOutlineMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SHEET  */}
      {open && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Sheet */}
          <aside
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-full w-[100%] max-w-sm bg-white shadow-xl p-6 flex flex-col z-10 overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <img
                src={logo}
                alt="Logo"
                className="h-[44px] w-auto md:h-[70px]"
              />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-black/5"
              >
                <HiOutlineX className="text-2xl" />
              </button>
            </div>

            <nav className="mt-6 space-y-4 font-['Inter'] text-[16px] font-[600]">
              <a
                href="#home"
                onClick={handleNav("home")}
                className="block hover:text-[#A30005]"
              >
                Home
              </a>
              <a
                href="#product"
                onClick={handleNav("product")}
                className="block hover:text-[#A30005]"
              >
                Product
              </a>
              <a
                href="#contact"
                onClick={handleNav("contact")}
                className="block hover:text-[#A30005]"
              >
                Contact us
              </a>
              <a
                href="#testimony"
                onClick={handleNav("testimony")}
                className="block hover:text-[#A30005]"
              >
                Testimony
              </a>
            </nav>

            <div className="mt-auto pt-6 border-t flex items-center gap-4 text-[#A30005]">
              <FaWhatsapp className="text-2xl" />
              <PiPhoneCall className="text-2xl" />
              <a
                href="tel:+2348142398699"
                className="underline font-['Mona_Sans'] text-[16px]"
              >
                +2348142398699
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Hero;
