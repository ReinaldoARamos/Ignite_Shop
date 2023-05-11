import { Key, ReactNode, createContext, useState } from "react";


export interface ProductsProps {
  price: ReactNode;
  name: ReactNode;
  imageURL: string;
  id: Key;
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: string ;
    description: string;
    defaultPriceId: string;
   
  };
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


  function addToCart(products: ProductsProps) {
    setCartItems((state) => [...state, products]);
  }
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}