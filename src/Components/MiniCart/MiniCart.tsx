import { CartContext, ProductsProps } from "@/src/context/context";
import { CartContainer, ImageContainer, ProductContainer, ProductContent } from "@/src/styles/pages/cart";
import { useContext } from "react";
import Image from 'next/image'
export interface CartProps {
    cartItems: ProductsProps[],
  
  }

export function MiniCart() {
    const { cartItems, cartTotal, removeCartItem} = useContext(CartContext)

    return (
       
          <CartContainer >
          {cartItems.map((item) => {
                return (
                 
           <ProductContainer>
           <ImageContainer>
             <Image src={item.imageURL} alt="" width={240} height={240} />
           </ImageContainer>
           <ProductContent>
             <h4>{item.name}</h4>
             <main>{item.price}</main>
             <div onClick={() => {removeCartItem(item.id)}}>Remover</div>
            
           </ProductContent>
         </ProductContainer>
                );
              })}
          </CartContainer>
      
    )
}