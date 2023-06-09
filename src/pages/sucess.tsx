import { GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import {
  ImageContainer,
  ImagesContainer,
  SucessContainer,
} from "../styles/pages/sucess";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  };
  productsImages: string[];
}

export default function Success({
  customerName,
  products,
  productsImages,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SucessContainer>
        <ImagesContainer>
          {productsImages.map((item, i) => (
            <ImageContainer key={i}>
              <Image src={item} width={140} height={140} alt="" />
            </ImageContainer>
          ))}
        </ImagesContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{" "}
          {productsImages.length} camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SucessContainer>
    </>
  );
}

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

  const customerName = session.customer_details.name;
  const productsImages = session.line_items.data.map((item) => {
    const products = item.price.product as Stripe.Product;
    return products.images[0];
  });

  return {
    props: {
      customerName,
      productsImages,
    },
  };
};