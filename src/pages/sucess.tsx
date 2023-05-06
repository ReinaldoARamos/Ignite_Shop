import Image from "next/image";
import { ImageContainer } from "../styles/pages/products";
import { ImagesContainer, SucessContainer } from "../styles/pages/sucess";
import Link from "next/link";

export default function Sucess() {
  return (
    <SucessContainer>
      <h1>Compra efetuada com sucesso</h1>
      <ImagesContainer></ImagesContainer>

      <p>
        Uhul <strong>Reinaldo Aparecido Ramos</strong>, sua{" "}
        <strong> camisa ignite</strong> já está a caminho de sua casa!
      </p>
      <Link href={"/"}>
      Voltar ao catálogo
      </Link>
    </SucessContainer>
  );
}
