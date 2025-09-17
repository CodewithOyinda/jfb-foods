import avatar from "../../assets/Ellipse.png";
import chatOne from "../../assets/Screenshot1.png";
import chatTwo from "../../assets/Screenshot2.png";
import chatThree from "../../assets/Screenshot3.png";

const Review = () => {
  return (
    <div className="m-[50px]">
      <div>
       <p className={`sm:text-[35px] text-[18px] font-[700] font-['Space_Grotesk'] mb-10 pt-30`}>Review from our customers</p>
        <div className="flex flex-row items-center gap-2 ">
          <div>
            <img src={chatOne} alt="chat"  className=""/>
            <div className="flex flex-row items-center gap-2 ">
                <img src={avatar} alt="avatar"  className="sm:w-[70px] w-[40px] sm:h-[70px] h-[40px]"/>
                <p className="font-['Mona_Sans'] sm:text-[18px] text-[12px] font-[500]">Badmus Thomas</p>
            </div>
          </div>
          <div>
            <img src={chatTwo} alt="chat"  className=""/>
            <div className="flex flex-row items-center gap-2 ">
                <img src={avatar} alt="avatar"  className="sm:w-[70px] w-[40px] sm:h-[70px] h-[40px]"/>
                <p className="font-['Mona_Sans'] sm:text-[18px] text-[12px] font-[500]">Charles Daniels</p>
            </div>
          </div>
          <div>
            <img src={chatThree} alt="chat"  className=""/>
            <div className="flex flex-row items-center gap-2 ">
                <img src={avatar} alt="avatar"  className="sm:w-[70px] w-[40px] sm:h-[70px] h-[40px]"/>
                <p className="font-['Mona_Sans'] sm:text-[18px] text-[12px] font-[500]">Shina Wale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
