import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import Logo from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import * as React from "react";
import Image from "next/image";

import Link from "next/link";
import { CartContext, ContextProvider, ProductsProps } from "../context/context";
import PopoverDemo from "../Components/PopOver/PopOver";
import { useContext } from "react";

GlobalStyles();




export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <ContextProvider>
        <Container>
          <Header>
            <Link href="/">
              <Image src={Logo} alt=" " />
            </Link>

            <PopoverDemo />
          
          </Header>

          <Component {...pageProps} />
        </Container>
      </ContextProvider>
    </>
  );
}
