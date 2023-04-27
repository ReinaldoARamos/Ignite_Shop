import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import Camisa1 from "../assets/Camisas/Camisa 1.png";
import Camisa2 from "../assets/Camisas/Camisa 2.png";
import Camisa3 from "../assets/Camisas/Camisa 3.png";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={Camisa1} alt="" width={520} height={480} />

        <footer>
          <strong>Camisa x</strong>
          <span>R$: 79.90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Camisa2} alt="" width={520} height={480} />

        <footer>
          <strong>Camisa x</strong>
          <span>R$: 79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={Camisa3} alt="" width={520} height={480} />

        <footer>
          <strong>Camisa x</strong>
          <span>R$: 79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={Camisa3} alt="" width={520} height={480} />

        <footer>
          <strong>Camisa x</strong>
          <span>R$: 79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
