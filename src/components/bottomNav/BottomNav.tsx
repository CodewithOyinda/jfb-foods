import logo from "../../assets/logo.png";


const BottomNav = () => {
  return (
    <div className="hidden sm:flex sm:flex-row flex-col justify-between items-center ml-20 mr-20 h-[92px]">
      {/* Logo */}
      <div className="w-[64px] h-[70px]">
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation */}
      <div className="flex sm:flex-row flex-col justify-between items-center gap-10 font-['Inter'] text-[16px] font-[500]`}">
        <p>Home</p>
        <p>Product</p>
        <p>Contact Us</p>
        <p>Testimony</p>
      </div>

      
    </div>
  );
};

export default BottomNav;
