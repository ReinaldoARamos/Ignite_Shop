import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/global'
import Logo from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app';
import HomeImg from '../assets/Home.png'

import Image from 'next/image';

GlobalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container > 
      <Header>
        <Image src={Logo} alt=' ' />
        Ignite Shop
      </Header>
  <Component {...pageProps} />
  </Container>
  )
}
