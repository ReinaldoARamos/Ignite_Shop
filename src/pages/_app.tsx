import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import Logo from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import * as React from "react";
import Image from "next/image";
import { Bag } from "phosphor-react";
import Link from "next/link";
import { CartProvider, useShoppingCart } from "use-shopping-cart";


GlobalStyles();

export default function App({ Component, pageProps }: AppProps) {

  //const {addItem} = useShoppingCart();

  return (
    <>

<CartProvider
    cartMode="checkout-session"
    stripe={process.env.STRIPE_PUBLIC_KEY}
    currency="BRL"
    shouldPersist
  >

    <Container>
      <Header>
        <a href="/">
        <Image src={Logo} alt=" "  />
        </a>
    

        <div>
         <Link href={'/cart'}>
        <Bag size={24}/>
        </Link>
        </div>
      </Header>
   
      <Component {...pageProps} />

    </Container>
    </CartProvider>

    </>
   
  );
}
