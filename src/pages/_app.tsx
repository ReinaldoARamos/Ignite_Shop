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
import PersistentDrawerLeft from "../Components/Drawer";



GlobalStyles();





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