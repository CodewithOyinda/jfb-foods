import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type CartContextType = {
  cartCount: number;
  addToCart: (qty: number) => void;
  setCartCount: (n: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartCount, setCartCountState] = useState<number>(() => {
    
    try {
      const v = localStorage.getItem("cartCount");
      return v ? parseInt(v, 10) : 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cartCount", String(cartCount));
    } catch {}
  }, [cartCount]);

  const addToCart = (qty: number) => {
    setCartCountState((prev) => prev + Math.max(0, Math.round(qty)));
  };

  const setCartCount = (n: number) => setCartCountState(Math.max(0, Math.round(n)));

  return (
    <CartContext.Provider value={{ cartCount, addToCart, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
