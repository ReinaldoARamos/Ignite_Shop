import { relative } from "path";
import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) /2 ))",
  marginLeft: "auto",
  minHeight: 656,
});

export const Product = styled("a", {
  background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%) ",
  borderRadius: 8,
 color: "$gray100",
  cursor: "pointer",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    fontFamily: "Roboto sans-serif",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2rem",
    color: "$white",
    backgroundColor: "rgba(0,0, 0, 0.6)",
    overflow: "hidden",
    strong: {
      fontSize: "$lg",
    },
    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",
    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
    
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: "1",
    },
  },
});
