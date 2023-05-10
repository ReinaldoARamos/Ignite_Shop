import { ReactNode, createContext, useState } from "react";
import { ProductsProps } from "../pages/product/[id]";
//import { ProductsProps } from "../pages/product/[id]";

//export interface CartItem extends ProductsProps {}

export interface CartItem extends ProductsProps {
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

interface CartContextType {
  cartItems: CartItem[];
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function ContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    return [];
  });
  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
