import {ReactNode, createContext, useState } from "react";



export interface ProductsProps {
  defaultPriceId: any;
  description: ReactNode;
  price: number;
  name: string;
  imageURL: string;
  id: string,
  numberPrice: number,

}

export interface CartContextType{
cartItems: ProductsProps[],
addToCart: (product: ProductsProps) => void;
removeCartItem: (productId: string) => void;
verifyIfExist: (productId: string) => boolean;
cartTotal: number;
}



interface CartContextProviderProps  {
  children: ReactNode;
}

 export const CartContext = createContext({} as CartContextType);

 export function ContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ProductsProps[]>([]);

  const cartTotal = cartItems.reduce((total, products) => {
    return total + products.numberPrice
  }, 0)

  console.log(cartTotal)
  function addToCart(products: ProductsProps ) {
    setCartItems((state) => [...state, products]);
    
    
  }
  function removeCartItem(productId: string) {
    setCartItems((state) => state.filter((item) => item.id !== productId));
  }

  function verifyIfExist(productId: string) {
    return cartItems.some((product) => product.id === productId);
  }
 
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeCartItem, verifyIfExist, cartTotal}}>
      {children}
    </CartContext.Provider>
  );
}