import { ReactNode, createContext, useState } from "react";
//
import { ProductsProps } from "../pages/product/[id]";
//import { ProductsProps } from "../pages/product/[id]";

//export interface CartItem extends ProductsProps {}

export interface CartItem {
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
 
  teste:  string,
}

interface CartContextProviderProps {
  children: ReactNode;
}

 const CartContext = createContext({} as CartContextType);

export function ContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    return [];

    
  });

 const teste = "Hi"
 
}

export default CartContext