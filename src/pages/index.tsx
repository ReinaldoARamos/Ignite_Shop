import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import Camisa1 from "../assets/Camisas/Camisa 1.png";
import Camisa2 from "../assets/Camisas/Camisa 2.png";
import Camisa3 from "../assets/Camisas/Camisa 3.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={Camisa1} alt="" width={520} height={480} />

        <footer>
          <strong>Camisa x</strong>
          <span>R$: 79.90</span>
        </footer>
      </Product>

      <Product>
        <Image src={Camisa2} alt="" width={520} height={480} />

        <footer>
          <strong>Camisa x</strong>
          <span>R$: 79.90</span>
        </footer>
      </Product>
      <Product>
        <Image src={Camisa3} alt="" width={520} height={480} />

        <footer>
          <strong>Camisa x</strong>
          <span>R$: 79.90</span>
        </footer>
      </Product>
      
    </HomeContainer>
  );
}
