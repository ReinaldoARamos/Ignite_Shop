import Image from "next/image";
import {
  CartContainer,
  ImageContainer,
  ProductContainer,
  ProductContent,
  Purchase,
  Quantity,
  Summary,
  Total,
} from "../styles/pages/cart";
import { useContext, useState } from "react";
import { CartContext, ProductsProps } from "../context/context";
import axios from "axios";
import EmptyCart from "../Components/EmptyCart/EmptyCart";


//import { CartContext } from "../context/context";

export interface CartProps {
  cartItems: ProductsProps[],

}




export default function Cart() {
const { cartItems, removeCartItem, cartTotal} = useContext(CartContext)
const [isCreatingCheckout, SetisCreatingCheckout] = useState(false);
const formattedCartTotal = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(cartTotal);

async function handleBuyProduct() {
  try {
    SetisCreatingCheckout(true);
    const response = await axios.post("/api/checkout", {
     products: cartItems
    });
    const { checkoutUrl } = response.data;

    window.location.href = checkoutUrl;
  } catch (error) {
    SetisCreatingCheckout(false);
    alert("falha ao redirecionar ao checkout");
  }
}

if(cartItems.length == 0){
  return(
    <EmptyCart />
  )
}else 
  console.log('item')
return (
  <>
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



    
    <Summary>
      <Quantity>
        <section> Quantidade: {cartItems.length} </section>
        <main> </main>
      </Quantity>

      <Total>
        <div>Total: </div>
        <main> {formattedCartTotal}</main>
      </Total>
      <Purchase onClick={handleBuyProduct}> Finalizar Compra</Purchase>
    </Summary>
  </>
);
}