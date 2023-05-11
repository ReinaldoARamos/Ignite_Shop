import Image from "next/image";
//mport { ImageContainer } from "../styles/pages/products";

import Link from "next/link";
//import { GetServerSideProps } from "next";
//import { stripe } from "../lib/stripe";
 //import Stripe from "stripe";
import { Head } from "next/document";
import Camisa1 from '../assets/Camisas/Camisa 1.png'
import Camisa2 from '../assets/Camisas/Camisa 2.png'
import Camisa3 from '../assets/Camisas/Camisa 3.png'
import { ImagesContainer, SucessContainer } from "../styles/pages/sucesscart";

/*
interface SucessProps {
  costumerName: string;
  products: {
    name: string;
    imageUrl: string;
  };
}
*/
export default function CartSucess() {
  return (
    <SucessContainer>
    <h1>Compra efetuada com sucesso</h1>
    <ImagesContainer>
      <Image
        src={Camisa1}
        width={120}
        height={120}
        alt=""
      ></Image>
      <Image
        src={Camisa2}
        width={120}
        height={120}
        alt=""
      ></Image>
      <Image
        src={Camisa3}
        width={120}
        height={120}
        alt=""
      ></Image>
    </ImagesContainer>

    <p>
      Uhul <strong>Reinaldo</strong>, suas{" "}
      <strong>3 camisas </strong> já está a caminho de sua casa!
    </p>
    <Link href={"/"}>Voltar ao catálogo</Link>
  </SucessContainer>
  );
}

/*

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const costumerName = session.customer_details.name;
  const products = session.line_items.data[0].price.product as Stripe.Product;

  console.log(session);

  return {
    props: {
      costumerName,

      products: {
        name: products.name,
        imageUrl: products.images[0],
      },
    },
  };
};
*/