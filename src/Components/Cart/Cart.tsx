

import Image from "next/image";
import Camisa1 from "../../assets/Camisas/Camisa 1.png";
import { ImageContainer, ProductContainer } from "@/src/styles/components/Cart";
export default function CartItem() {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={Camisa1} alt="" width={95} height={95} />
      </ImageContainer>
      <main>teste</main>
    </ProductContainer>
  );
}
