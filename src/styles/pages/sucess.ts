import { styled } from "..";

export const SucessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: 656,
  margin: "0 auto",
});

export const ImagesContainer = styled("main", {
  width: "100%",
  maxWidth: 130,
  height: 145,
  background: "linear-gradient(100deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  img: {
    objectFit: "cover",
  },
});
