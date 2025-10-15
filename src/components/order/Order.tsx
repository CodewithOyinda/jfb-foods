import bgTwo from "../../assets/image 468.png";
import { FaAngleDown } from "react-icons/fa6";
import Button from "../buttons/Button";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

const PRICES: Record<string, number> = {
  Jar: 40, 
  Sachet: 10,
  Packet: 80,
};

const Order = () => {
  const { addToCart } = useCart();

  const [size, setSize] = useState<"Small" | "Medium" | "Large">("Small");
  const [type, setType] = useState<"Jar" | "Sachet" | "Packet">("Jar");
  const [quantity, setQuantity] = useState<number>(1);

  const pricePerUnit = PRICES[type] ?? 0;
  const totalPrice = pricePerUnit * (quantity || 0);

  const handlePlaceOrder = () => {
    const qty = Math.max(0, Math.round(quantity || 0));
    if (qty <= 0) {
      alert("Please enter a valid quantity");
      return;
    }

    // Add to cart
    addToCart(qty);

    // Optionally: show a toast or clear the form
    alert(`Added ${qty} item(s) to cart`);
    setQuantity(1);
  };

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img src={bgTwo} alt="bg" className="w-full h-auto" />

      {/* Overlay Form Section */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
        <p className="sm:text-[46px] text-[20px] pt-30 font-[700] font-['Space_Grotesk'] ">
          Place an Order
        </p>

        <div className="sm:w-[484px] w-[300px] bg-[#FAFAFA] rounded-[10px] border border-[#D9D9D94D] p-6 shadow-lg">
          {/* Row 1 */}
          <div className="flex flex-row items-center justify-between gap-6 mb-4">
            <div className="flex flex-col w-1/2">
              <label className="text-sm font-medium mb-1">Size</label>
              <div className="relative">
                <select value={size}
                  onChange={(e) => setSize(e.target.value as any)} className="w-full border sm:text-[16px] text-[12px] border-gray-300 rounded-md px-3 py-2 appearance-none">
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
                <select value={type}
                  onChange={(e) => setType(e.target.value as any)} className="w-full border sm:text-[16px] text-[12px] border-gray-300 rounded-md px-3 py-2 appearance-none">
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
                value={quantity}
                onChange={(e) => setQuantity(Math.max(0, Number(e.target.value)))}
                className="w-full border sm:text-[16px] text-[12px] border-gray-300 rounded-md px-3 py-2"
                placeholder="Enter quantity"
                min={0}
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-sm font-medium mb-1">Price</label>
              <input
                type="text"
                value={totalPrice > 0 ? `${totalPrice} NGN` : ""}
                readOnly
                className="w-full border sm:text-[16px] text-[12px] border-gray-300 rounded-md px-3 py-2 bg-gray-100"
                placeholder="Auto-calculated"
                disabled
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Button  size="large" onClick={handlePlaceOrder}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
