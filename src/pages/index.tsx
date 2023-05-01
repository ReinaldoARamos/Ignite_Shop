import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import Camisa1 from "../assets/Camisas/Camisa 1.png";
import Camisa2 from "../assets/Camisas/Camisa 2.png";
import Camisa3 from "../assets/Camisas/Camisa 3.png";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";


interface HomeProps {
  products: {
    id: string,
    name: string,
    imageURL: string,
    price: number,
  }[]
}
export default function Home({products} : HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
     {products.map(product => {
      return (
        <Product key={product.id} className="keen-slider__slide">
          <Image
            src={product.imageURL}
            alt=''
            width={520}
            height={400}
            
          />
          <footer>
            <strong>{product.name}</strong>
            <span>${product.price}</span>
          </footer>
        </Product>
      )
     })}
    </HomeContainer>
  );
}

export const getServerSideProps = async () => {

  const  response = await stripe.products.list({
    expand: ['data.default_price']
  })
  console.log(response.data)


  const  products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageURL: product.images[0],
      price: price.unit_amount /100,
    }
  })

  return{
    props: {
      products
    }
  }
}
