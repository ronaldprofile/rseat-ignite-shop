import { styled } from "..";

export const ProductContainer = styled("main", {
  width: "100%",
  padding: 24,

  "@media (min-width: 640px)": {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gap: "4rem",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "stretch",
  },
});

export const ImageContainer = styled("div", {
  maxWidth: 576,
  height: 320,
  width: "100%",
  padding: "0.25rem",
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  img: {
    objectFit: "cover",
  },

  "@media (min-width: 640px)": {
    height: "auto",
  },

  "@media (min-width: 1024px)": {
    height: 570,
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h1: {
    marginTop: "0.75rem",
    fontSize: "$lg",
    color: "$gray300",
  },

  span: {
    display: "block",
    marginTop: "1rem",
    fontSize: "$lg",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    color: "$gray300",
    lineHeight: 1.6,
  },

  button: {
    marginTop: "1rem",
    padding: "1rem",
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

  "@media (min-width: 640px)": {
    h1: {
      fontSize: "$xl",
      marginTop: 0,
    },

    span: {
      fontSize: "$2xl",
    },
  },

  "@media (min-width: 1024px)": {
    h1: {
      fontSize: "$2xl",
    },

    button: {
      marginTop: "auto",

      padding: "1.5rem",
      fontSize: "$md",
    },
  },
});
