import Image from "next/image";
import { ImageContainer } from "../styles/pages/products";
import { ImagesContainer, SucessContainer } from "../styles/pages/sucess";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";

export default function Sucess() {
  return (
    <SucessContainer>
      <h1>Compra efetuada com sucesso</h1>
      <ImagesContainer></ImagesContainer>

      <p>
        Uhul <strong>Reinaldo Aparecido Ramos</strong>, sua{" "}
        <strong> camisa ignite</strong> já está a caminho de sua casa!
      </p>
      <Link href={"/"}>Voltar ao catálogo</Link>
    </SucessContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query
}) => {
  const sessionId =  String(query.session_id)
  const session = await stripe.checkout.sessions.retrieve(sessionId)
  console.log(session)

  return {
    props: {},
  };
};
