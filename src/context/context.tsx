import { Key, ReactNode, createContext, useState } from "react";
import Product from "../pages/product/[id]";


export interface ProductsProps {
  defaultPriceId: any;
  description: ReactNode;
  price: string;
  name: string;
  imageURL: string;
  id: string,

}

export interface CartContextType{
cartItems: ProductsProps[],
addToCart: (product: ProductsProps) => void;
removeCartItem: (productId: string) => void;
verifyIfExist: (productId: string) => boolean;
}



interface CartContextProviderProps  {
  children: ReactNode;
}

 export const CartContext = createContext({} as CartContextType);

 export function ContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ProductsProps[]>([]);


  function addToCart(products: ProductsProps ) {
    setCartItems((state) => [...state, products]);
    console.log(products);
    
  }
  function removeCartItem(productId: string) {
    setCartItems((state) => state.filter((item) => item.id !== productId));
  }

  function verifyIfExist(productId: string) {
    return cartItems.some((product) => product.id === productId);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeCartItem, verifyIfExist}}>
      {children}
    </CartContext.Provider>
  );
}