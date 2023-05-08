import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import Logo from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import { Bag } from "phosphor-react";

 import Image from "next/image";
import PersistentDrawerLeft from "../Components/Drawer";



GlobalStyles();
export function handleDrawer() {
  
} 

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
    
      <Header>
        <Image src={Logo} alt=" " />
        <div>
          
          <Bag size={24} />
         
        </div>
      </Header>
      <PersistentDrawerLeft />
     
      <Component {...pageProps} />
    </Container>
  );
}