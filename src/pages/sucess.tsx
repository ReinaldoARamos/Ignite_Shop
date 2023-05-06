import Image from "next/image";
import { ImageContainer } from "../styles/pages/products";
import { ImagesContainer, SucessContainer } from "../styles/pages/sucess";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

interface SucessProps {
  costumerName: string,
  products: {
    name: string,
    imageUrl: string,
  }
}

export default function Sucess({costumerName, products} : SucessProps) {
  return (
    <SucessContainer>
      <h1>Compra efetuada com sucesso</h1>
      <ImagesContainer>
       <Image src={products.imageUrl} width={120}  height={120} alt=""></Image>
      </ImagesContainer>

      <p>
        Uhul <strong>{costumerName}</strong>, sua{" "}
        <strong>{products.name} </strong> já está a caminho de sua casa!
      </p>
      <Link href={"/"}>Voltar ao catálogo</Link>
    </SucessContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query
}) => {
  const sessionId =  String(query.session_id)
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const costumerName = session.customer_details.name;
  const products = session.line_items.data[0].price.product as Stripe.Product;

  console.log(session)

  return {
    props: {
      costumerName,

      products: {
        name: products.name,
        imageUrl: products.images[0]
      }
    
    },
  };
};
