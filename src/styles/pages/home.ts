import { styled } from "..";

export const HomePageContainer = styled("div", {
  minHeight: 656,
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
});

export const Product = styled("a", {
  minWidth: 540,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  cursor: "pointer",
  overflow: "hidden",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    padding: 32,
    bottom: "0.25rem",
    right: "0.25rem",
    left: "0.25rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    borderRadius: 6,
    background: "rgba(0,0,0,0.6)",

    strong: {
      fontSize: "$lg",
      color: "$white",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },
});
