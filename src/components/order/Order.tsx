import bgTwo from "../../assets/image 468.png";
import { FaAngleDown } from "react-icons/fa6";
import Button from "../buttons/Button";

const Order = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img src={bgTwo} alt="bg" className="w-full h-auto" />

      {/* Overlay Form Section */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
        <p className="text-[46px] font-[700] font-['Space_Grotesk'] ">
          Place an Order
        </p>

        <div className="w-[484px] bg-[#FAFAFA] rounded-[10px] border border-[#D9D9D94D] p-6 shadow-lg">
          {/* Row 1 */}
          <div className="flex flex-row items-center justify-between gap-6 mb-4">
            <div className="flex flex-col w-1/2">
              <label className="text-sm font-medium mb-1">Size</label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
                <FaAngleDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-sm font-medium mb-1">Product Type</label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none">
                  <option>Jar</option>
                  <option>Sachet</option>
                  <option>Packet</option>
                </select>
                <FaAngleDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-row items-center justify-between gap-6">
            <div className="flex flex-col w-1/2">
              <label className="text-sm font-medium mb-1">Quantity</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Enter quantity"
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-sm font-medium mb-1">Price</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
                placeholder="Auto-calculated"
                disabled
              />
            </div>
          </div>
          <div className="mt-6">
          <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
