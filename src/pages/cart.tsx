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
import axios from "axios";


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
