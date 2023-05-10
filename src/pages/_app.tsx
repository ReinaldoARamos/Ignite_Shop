import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import Logo from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";

import Image from "next/image";
import { Bag } from "phosphor-react";
import PopOver from "../Components/PopOver/PopOver";
import { CartProvider } from "use-shopping-cart";
import CartContext from "../context/context";


GlobalStyles();

export default function App({ Component, pageProps }: AppProps) {

  const [teste, setTeste] = useState('Teste')
  return (
    <>


<CartProvider
      mode="payment"
      cartMode="client-only"
      // Connects to your Stripe account
      stripe={process.env.STRIPE_PUBLIC_KEY}
      // Redirected here after successful payments
      successUrl={`${process.env.NEXT_URL}/success`}
      // Redirected here when you click back on Stripe Checkout
      cancelUrl={`${process.env.NEXT_URL}/cancel`}
      currency="BRL"
      // Only customers from UK will be able to purchase
      // Having this setting means that we will capture shipping address
      allowedCountries={["BR"]}
      // Enables local storage
      shouldPersist={true}
    >
    <Container>
      <Header>
        <a href="/">
        <Image src={Logo} alt=" "  />
        </a>
    

        <div>
          <PopOver />
        </div>
      </Header>
   
      <Component {...pageProps} />

    </Container>
    </CartProvider>

    </>
   
  );
}
