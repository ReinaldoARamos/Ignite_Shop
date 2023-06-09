import React, { useContext } from "react";
import * as Popover from "@radix-ui/react-popover";
import { styled, keyframes } from "@stitches/react";
import { violet, mauve, blackA } from "@radix-ui/colors";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Bag, ShoppingCart } from "phosphor-react";
import { Purchase, Quantity, Total } from "@/src/styles/pages/cart";
import Cart from "@/src/pages/cart";
import Home from "@/src/pages";
import { MiniCart } from "../MiniCart/MiniCart";
import Link from "next/link";
import { GoToCart } from "@/src/styles/components/MiniCart";
import { CartContext } from "@/src/context/context";

import { display } from "@mui/system";
import css from "styled-jsx/css";



export default function PopoverDemo() {
  const { cartItems} = useContext(CartContext)

//display: 'hidden'
return(
  
  <Popover.Root>
    <Popover.Trigger asChild>
      <IconButton aria-label="Update dimensions">
  
        {cartItems.length
              ?       <div>{cartItems.length } </div>
              :       <section></section>}
      
      
   
     
        <Bag size={24} />
       
        
      </IconButton>
    </Popover.Trigger>
    <Popover.Portal>
      <PopoverContent sideOffset={5} css={{ backgroundColor: "$gray800" }}>
        <Flex css={{ flexDirection: "column", gap: 10 }}>
          <Text
            css={{ marginBottom: 10, color: "$gray100", fontWeight: "bold" }}
          >
            Sacola de Compras{" "}
          </Text>
        <MiniCart />
        </Flex>
        <Link href={"/cart"}>
        <GoToCart>Ver Carrinho completo</GoToCart>
        </Link>
       
        <PopoverClose
          aria-label="Close"
          css={{ border: "none", outline: "hidden" }}
        >
          <Cross2Icon />
        </PopoverClose>
        <PopoverArrow />
      </PopoverContent>
    </Popover.Portal>
  </Popover.Root>
)
};

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const PopoverContent = styled(Popover.Content, {

  borderRadius: 10,
  padding: 20,
  width: 300,
 height: 600,

  backgroundColor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
  "&:focus": {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${violet.violet7}`,
  },
});

const PopoverArrow = styled(Popover.Arrow, {
  fill: "white",
});

const PopoverClose = styled(Popover.Close, {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$green500",
  position: "absolute",
  top: 5,
  right: 5,
  cursor: "pointer",
  "&:hover": { color: "$green300" },
});

const Flex = styled("div", { display: "flex",  height: 530, overflow: 'hidden'});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 35,
  width: 35,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$gray100",

  boxShadow: `0 2px 10px ${blackA.blackA7}`,

  
  div: {

    display: 'flex',
    justifyContent: 'center',


     
          backgroundColor: '$green300',
          borderRadius: 99999,
          width: 20,
          height: 20,
     
        alignItems: "center",
        marginRight: -30,
        marginTop: -20,
        position: 'absolute',
        color: "$gray800",
      
        section: {
          display: 'hidden',
        }
  },
});



const Text = styled("p", {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: "19px",
  fontWeight: 500,
});


