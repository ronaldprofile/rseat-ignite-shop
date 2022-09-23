import { styled } from "..";

export const ProductContainer = styled("main", {
  maxWidth: 1180,
  margin: "0 auto",
  display: "grid",
  gap: "4rem",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
});

export const ImageContainer = styled("div", {
  maxWidth: 576,
  height: 576,
  width: "100%",
  padding: "0.25rem",
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    display: "block",
    marginTop: "1rem",
    fontSize: "$2xl",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    color: "$gray300",
  },

  button: {
    marginTop: "auto",
    padding: "1.5rem",
    fontSize: "$md",
    fontWeight: "bold",
    color: "$white",
    background: "$green500",
    border: 0,
    borderRadius: 8,
    transition: "background .2s",

    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.6,
    },

    "&:not(:disabled):hover": {
      background: "$green300",
    },
  },
});
