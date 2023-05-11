import { ReactNode, createContext, useState } from "react";
//

//import { ProductsProps } from "../pages/product/[id]";

//export interface CartItem extends ProductsProps {}

export interface ProductsProps {
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: string ;
    description: string;
    defaultPriceId: string;
   
  };
}

export interface CartData{
cartItems: ProductsProps[]
}
interface CartContextType {
  cartItems: ProductsProps[],
  teste: () => void
}

interface CartContextProviderProps {
  children: ReactNode;
}

 export const CartContext = createContext({} as CartContextType);

 export function ContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ProductsProps[]>([]);

  function teste() {
    console.log("hi")
  }
  return (
    <CartContext.Provider value={{ cartItems, teste }}>
      {children}
    </CartContext.Provider>
  );
}