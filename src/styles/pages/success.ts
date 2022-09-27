import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    maxWidth: 560,
    marginTop: "2rem",
    textAlign: "center",
    fontSize: "$xl",
    color: "$gray300",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    fontWeight: "bold",
    color: "$green500",
    transition: "color .2s",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ProductImageContainer = styled("div", {
  display: "flex",
  minWidth: 300,
  marginBottom: 48,

  "& > div": {
    position: "relative",
  },

  "& div ~ div": {
    position: "absolute",
    zIndex: 100,

    marginLeft: 125,
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 200,
  height: 200,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: "100%",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    objectFit: "cover",
  },
});
