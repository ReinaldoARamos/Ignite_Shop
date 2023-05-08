import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1100,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  div: {
    background: "Red",
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: "$gray800",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: '0.4s',

    svg: {
      color: "$gray500",
    },

    "&:hover": {
      svg: {
        color: "$gray300",
      },
    },
  },
});
