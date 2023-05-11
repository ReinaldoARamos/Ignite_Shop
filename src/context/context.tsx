import { Key, ReactNode, createContext, useState } from "react";


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
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}