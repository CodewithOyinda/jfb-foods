import {
  FaWhatsapp,
  FaXTwitter,
  FaFacebook,
  FaSquareInstagram,
  FaPhone,
} from "react-icons/fa6";

const socials = [
  { Icon: FaWhatsapp, label: "WhatsApp" },
  { Icon: FaXTwitter, label: "X (Twitter)" },
  { Icon: FaFacebook, label: "Facebook" },
  { Icon: FaSquareInstagram, label: "Instagram" },
  { Icon: FaPhone, label: "Phone" },
];

const circleCls =
  "rounded-full bg-[#F5F5F5] border border-[#C9C9C9AD] flex items-center justify-center " +
  // circle size by breakpoint
  "w-9 h-9 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px] " +
  // nice feel
  "transition-transform hover:scale-105";

const iconCls =
  // icon scales with viewport (no fixed 32px)
  "text-[clamp(0.9rem,2.2vw,2.25rem)]"; // ~14px → ~36px

export default function Contact() {
  return (
    <div className="m-[50px] flex flex-col items-center justify-center text-center">
      <p className="sm:text-[46px] text-[20px] font-[700] font-['Space_Grotesk'] mb-10">
        Get in touch with us on our socials
      </p>

      <div className="font-['Mona_Sans'] sm:text-[18px] text-[12px] font-[500] mb-10">
        <p>Follow us on our socials to keep in close contact with</p>
        <p>us and get the latest updates on our product.</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {socials.map(({ Icon, label }) => (
          <div key={label} className={circleCls} aria-label={label}>
            <Icon className={iconCls} aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}
