import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Head } from "next/document";


interface HomeProps {
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: number;
  }[];
}
export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <>
 
      
   
    <HomeContainer ref={sliderRef} className="keen-slider">
      
      {products.map((product) => {
        return (
          <Link key={product.id}
           href={`product/${product.id}`}
           prefetch={false}
           >
            <Product className="keen-slider__slide">
              <Image src={product.imageURL} alt="" width={520} height={400} />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        );
      })}
    </HomeContainer>
    
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
