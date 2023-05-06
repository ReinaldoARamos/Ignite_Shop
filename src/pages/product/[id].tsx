import { stripe } from "../../lib/stripe";

import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Stripe from "stripe";
import { ParsedUrlQuery } from "querystring";
import {
  ProductContainer,
  ImageContainer,
  ProductDetails,
} from "../../styles/pages/products";
import { useRouter } from "next/router";

/** const { isFallback } = useRouter();
  if (isFallback) {
    return "loading";
  }
   */

interface ProductsProps {
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ products }: ProductsProps) {
  
  function handleBuyProduct() {
    console.log(products.defaultPriceId)
  }
  const { isFallback } = useRouter();
  if (isFallback) {
    return <p>Loading...</p>;
  }
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={products.imageURL} alt="" width={520} height={400}></Image>
      </ImageContainer>
      <ProductDetails>
        <h1> {products.name}</h1>
        <span>{products.price}</span>
        <p>{products.description}</p>
        <button onClick={handleBuyProduct}>Comprar agora!</button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "prod_NnBi8kGskbRrBU",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  //const productId = params.id;
  const productId = (params as ParsedUrlQuery).id;
  const products = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });
  const price = products.default_price as Stripe.Price;

  return {
    props: {
      products: {
        id: products.id,
        name: products.name,
        description: products.description,
        imageURL: products.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
          unitDisplay: "long",
          maximumFractionDigits: 2,
        }).format((price.unit_amount as number) / 100),
        defaultPriceId: price.id,
      },
    },
    //revalidate: 60 * 60 * 1,
  };
};
