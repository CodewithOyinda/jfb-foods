import Button from "../buttons/Button";
import product from "../../assets/product.png";
import sachet from "../../assets/sachet.png";
import mask from "../../assets/Mask group (1).png";
import maskgroup from "../../assets/Mask group.png";
import pepperOne from "../../assets/Pepper-1.png";
import pepperTwo from "../../assets/Pepper-2.png";
import pepperThree from "../../assets/pepper-3.png";

const About = () => {
  return (
    <div className=" mt-50">
      <div className="flex flex-row items-center justify-center gap-10 ">
         <div>
           <p className={`text-[46px] font-[700] font-['Space_Grotesk']`}>About us Shitoland</p>
           <div className="font-['Mona_Sans'] text-[20px] font-[500]">
           <p>At JFB foods, we bring the fiery flavors straight to your table.</p>
           <p>Our authentic shito sauce is crafted using traditional recipes</p>
           <p>and the finest ingredients, delivering a unique blend of heat</p>
           <p className="pb-[30px]">and flavor that will elevate any dish.</p>
           </div>
           <Button/>
         </div>
         <div className="bg-[#F8EBEB] w-[585px] h-[391px] rounded-[5px] ">
          <div className="flex flex-row items-center justify-center">
                  <img src={product} alt="product" className="h-[300px] w-[400px] block -mr-[290px]" />
                  <img src={product} alt="product" className="h-[350px] w-[500px] block -mr-[180px]" />
                  <img src={sachet} alt="sachet" className="h-[148px] w-[120px] block" />

                </div>
         </div>
      </div>
      <div className="flex flex-row items-center justify-between m-[30px]">
        <div>
           <p className={`text-[46px] font-[700] font-['Space_Grotesk']`}>Our Product</p>
           <div className="font-['Mona_Sans'] text-[20px] font-[500]">
           <p>We offer a diverse array of product that nourish</p>
           <p>your taste buds and a blend to your taste.</p>
           </div>
         </div>
         <div>
          <img src={mask} alt="mask" className="h-[148px] w-[120px] " />
         </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-[10px] m-[30px]">
       <div className="w-[400px] h-[362px] bg-[#FFFFFF] rounded-[10px] border border-[#C9C9C975] p-6 shadow-lg">
        <div className="flex items-center justify-center pt-[20px] pb-[10px]">
         <img src={product} alt="product" className="h-[180px] w-[200px]" />
         </div>
         <p className={`text-[22px] font-[700] font-['Space_Grotesk']`}>Medium Shito Sauce:</p>
         <div className="flex flex-row items-center justify-between">
          <p className="font-['Mona_Sans'] text-[16px]">50 CL . 40 GH</p>
          <Button/>
         </div>
       </div>
       <div className="w-[400px] h-[362px] bg-[#FFFFFF] rounded-[10px] border border-[#C9C9C975] p-6 shadow-lg">
        <div className="flex items-center justify-center pt-[20px] pb-[10px]">
         <img src={product} alt="product" className="h-[200px] w-[300px]" />
         </div>
         <p className={`text-[22px] font-[700] font-['Space_Grotesk']`}>Large Shito Sauce:</p>
         <div className="flex flex-row items-center justify-between">
          <p className="font-['Mona_Sans'] text-[16px]">150 CL . 80 GH</p>
          <Button/>
         </div>
       </div>
       <div className="w-[400px] h-[362px] bg-[#FFFFFF] rounded-[10px] border border-[#C9C9C975] p-6 shadow-lg">
        <div className="flex items-center justify-center pt-[20px] pb-[10px]">
         <img src={sachet} alt="sachet" className="h-[180px] w-[140px]" />
         </div>
         <p className={`text-[22px] font-[700] font-['Space_Grotesk']`}>Sachet Shito Sauce:</p>
         <div className="flex flex-row items-center justify-between">
          <p className="font-['Mona_Sans'] text-[16px]">5 CL . 10 GH</p>
          <Button/>
         </div>
       </div>
      </div>
      <div className="flex flex-row  gap-70 m-[50px]">
        <div>
          <img src={maskgroup} alt="maskgroup" className="h-[148px] w-[120px] " />
        </div>
        <div>
          <p className={`text-[46px] font-[700] font-['Space_Grotesk']`}>Spices for taste buds</p>
          <div className="font-['Mona_Sans'] text-[20px] font-[500]">
           <p>We offer a diverse array of product that nourish your</p>
           <p>taste buds and a blend to your taste.</p>
           </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-[10px] justify-between m-[30px]">
       <div className="w-[400px] h-[362px] bg-[#FFFFFF] rounded-[10px] border border-[#C9C9C975] p-6 shadow-lg">
        <div className="flex items-center justify-center pt-[20px] pb-[10px]">
         <img src={pepperOne} alt="pepper" />
         </div>
         <p className={`text-[22px] font-[700] font-['Space_Grotesk'] mt-[30px] mb-[10px] flex justify-center items-center`}>Original Shito Sauce:</p>
          <div className="font-['Mona_Sans'] text-[18px] flex flex-col items-center justify-center">
          <p>Our classic shito sauce delivers a</p>
          <p>perfect balance of heat and flavor,</p>
          <p>creating an unforgetting taste</p>
          <p>experience that enhances any dish.</p>
          </div>
       </div>
       <div className="w-[400px] h-[362px] bg-[#FFFFFF] rounded-[10px] border border-[#C9C9C975] p-6 shadow-lg">
        <div className="flex items-center justify-center pt-[20px] pb-[10px]">
         <img src={pepperTwo} alt="pepper" />
         </div>
         <p className={`text-[22px] font-[700] font-['Space_Grotesk'] mt-[30px] mb-[10px] flex justify-center items-center`}>Mild Shito Sauce:</p>
         <div className="font-['Mona_Sans'] text-[18px] flex flex-col items-center justify-center">
          <p>For those who prefer a gentler spice, our</p>
          <p>mild shito sauce offers a delightful,</p>
          <p>subtle kick without overwhelming the</p>
          <p>palate.</p>
          </div>
       </div>
       <div className="w-[400px] h-[362px] bg-[#FFFFFF] rounded-[10px] border border-[#C9C9C975] p-6 shadow-lg">
        <div className="flex items-center justify-center pt-[20px] pb-[10px]">
         <img src={pepperThree} alt="pepper" />
         </div>
         <p className={`text-[22px] font-[700] font-['Space_Grotesk'] mt-[30px] mb-[10px] flex justify-center items-center`}>Extra hot Shito Sauce:</p>
         <div className="font-['Mona_Sans'] text-[18px] flex flex-col items-center justify-center ">
          <p>Prepared for true spice enthusiasts,</p>
          <p>our hot and spicy shito sauce brings an</p>
          <p>intense, fiery heat that will ignite your</p>
          <p>taste buds.</p>
          </div>
       </div>
      </div>
      <div className="flex flex-row items-center justify-end mt-[30px] mb-[-100px]">
          <img src={mask} alt="mask" className="h-[148px] w-[120px] " />
        </div>
    </div>
  );
}

export default About;
