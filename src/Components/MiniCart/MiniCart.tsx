import { CartContext, ProductsProps } from "@/src/context/context";

import { useContext } from "react";
import Image from 'next/image'
import { MiniCartContainer, MiniImageContainer, MiniProductContainer, MiniProductContent } from "@/src/styles/components/MiniCart";
import EmptyCart from "../EmptyCart/EmptyCart";
import MiniEmptyCart from "../MiniEmptyCart/MiniEmpyCart";
export interface CartProps {
    cartItems: ProductsProps[],
  
  }

export function MiniCart() {
    const { cartItems, cartTotal, removeCartItem} = useContext(CartContext)

    if(cartItems.length == 0){
        return(
          <MiniEmptyCart />
        )
      }else  return (
       
          <MiniCartContainer >
          {cartItems.map((item) => {
                return (
                 
           <MiniProductContainer>
           <MiniImageContainer>
             <Image src={item.imageURL} alt="" width={120} height={120} />
           </MiniImageContainer>
           <MiniProductContent>
             <p>{item.name}</p>
             <main>{item.price}</main>
             <div onClick={() => {removeCartItem(item.id)}}>Remover</div>
            
           </MiniProductContent>
         </MiniProductContainer>
                );
              })}
          </MiniCartContainer>
      
    )
}