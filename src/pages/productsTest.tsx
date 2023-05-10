import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

import Stripe from "stripe";
import { GetStaticProps } from "next";
import { ImageContainer, ProductContainer, ProductContent } from "@/src/styles/components/Cart";
import { stripe } from "@/src/lib/stripe";
import PopoverDemo from "../Components/PopOver/PopOver";
import PopOver from "../Components/PopOver/PopOver";


//import { CartContext } from "../context/context";

interface CartProps {
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: number;
  }[];
}
export default function Cart({ products }: CartProps) {
  
  return (
    <>

      <ProductContainer>
        {products.map((product) => {
          return (
            <>
            <ImageContainer>
            <Image src={product.imageURL} alt="" width={95} height={95} />
          </ImageContainer>
          <ProductContent>
          <h4>{product.name}</h4>
          <main>{product.price}</main>
          <div>Remover</div>
          </ProductContent>
          </>
          );
        })}
      </ProductContainer>
    </>
  );
}

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
