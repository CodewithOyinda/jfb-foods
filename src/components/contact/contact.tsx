import { FaWhatsapp, FaXTwitter, FaFacebook, FaSquareInstagram, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="m-[50px] flex flex-col items-center justify-center text-center">
      <p className="text-[46px] font-[700] font-['Space_Grotesk'] mb-10">
        Get in touch with us on our socials
      </p> 

      <div className="font-['Mona_Sans'] text-[18px] font-[500] mb-10">
        <p>Follow us on our socials to keep in close contact with</p>
        <p>us and get the latest updates on our product.</p>
      </div>

      <div className="flex flex-row items-center justify-center gap-10">
        <div className="h-[90px] w-[90px] rounded-full bg-[#F5F5F5] border border-[#C9C9C9AD] flex items-center justify-center">
          <FaWhatsapp size={32} />
        </div>
        <div className="h-[90px] w-[90px] rounded-full bg-[#F5F5F5] border border-[#C9C9C9AD] flex items-center justify-center">
          <FaXTwitter size={32} />
        </div>
        <div className="h-[90px] w-[90px] rounded-full bg-[#F5F5F5] border border-[#C9C9C9AD] flex items-center justify-center">
          <FaFacebook size={32} />
        </div>
        <div className="h-[90px] w-[90px] rounded-full bg-[#F5F5F5] border border-[#C9C9C9AD] flex items-center justify-center">
          <FaSquareInstagram size={32} />
        </div>
        <div className="h-[90px] w-[90px] rounded-full bg-[#F5F5F5] border border-[#C9C9C9AD] flex items-center justify-center">
          <FaPhone size={32} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
