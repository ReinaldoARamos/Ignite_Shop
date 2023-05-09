import { styled } from "..";

export const ProductContainer = styled("main", {

    gap: "4rem",
    margin: "0 auto",
    maxWidth: 1180,
    display: 'flex',
 
   justifyContent: "flex-start",
   paddingRight:    "6rem",
  });
  export const ImageContainer = styled("div", {
     marginBottom: '1.5rem',
    width: "100%",
    maxWidth: 95,
    height: 95,
    background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%) ",
    borderRadius: 8,
    padding: "0.25rem",

    justifyContent: "center",
    alignItems: "center",
    img: {
      objectFit: "cover",
    },
  });