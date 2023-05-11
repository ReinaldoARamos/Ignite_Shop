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
import Camisa1 from "../../src/assets/Camisas/Camisa 1.png";
import Camisa2 from "../../src/assets/Camisas/Camisa 1.png";
import Camisa3 from "../../src/assets/Camisas/Camisa 1.png";
import { useContext, useState } from "react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { CartContext, ProductsProps } from "../context/context";


//import { CartContext } from "../context/context";

export interface CartProps {
  cartItems: ProductsProps[],

}



export default function Cart() {
const { cartItems} = useContext(CartContext)
return (
  <>
    <CartContainer>
    {cartItems.map((item) => {
          return (
           
     <ProductContainer>
     <ImageContainer>
       <Image src={item.imageURL} alt="" width={240} height={240} />
     </ImageContainer>
     <ProductContent>
       <h4>{item.name}</h4>
       <main>{item.price}</main>
       <div>Remover</div>
      
     </ProductContent>
   </ProductContainer>
          );
        })}
    </CartContainer>



    
    <Summary>
      <Quantity>
        <section> Quantidade: </section>
        <main> 3 items</main>
      </Quantity>

      <Total>
        <div>Total: </div>
        <main> R$: 270.00</main>
      </Total>
      <Purchase> Finalizar Compra</Purchase>
    </Summary>
  </>
);
}


/*
     <ProductContainer>
        <ImageContainer>
          <Image src={Camisa1} alt="" width={240} height={240} />
        </ImageContainer>
        <ProductContent>
          <h4>aws</h4>
          <main>RS 123.00</main>
          <div>Remover</div>
         
        </ProductContent>
      </ProductContainer>
* */
/*

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  console.log(response.data);

  const products = response.data.map(
    (product: {
      default_price: Stripe.Price;
      id: any;
      name: any;
      description: any;
      images: any[];
    }) => {
      const price = product.default_price as Stripe.Price;

      return {
        
        id: product.id,
        name: product.name,
        description: product.description,
        imageURL: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
          unitDisplay: "long",
          maximumFractionDigits: 2,
        }).format((price.unit_amount as number) / 100),
      };
    }
  );

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, //a cada duas horas
  };
};
* */
