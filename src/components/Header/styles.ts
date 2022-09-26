import { styled } from "../../styles";

export const Header = styled("header", {
  padding: "2rem 1.5rem",
  width: "100%",
  margin: "0 auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  img: {
    cursor: "pointer",
  },

  "@media (min-width: 1024px)": {
    maxWidth: 1100,
    paddingInline: 0,
  },
});

export const ButtonProductsBag = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",

  padding: "0.75rem",
  width: 48,
  height: 48,
  borderRadius: 6,
  background: "#202024",
  border: 0,
  transition: "filter .2s",

  "&:hover": {
    filter: "brightness(1.1)",
  },
});

export const ProductsQuantity = styled("div", {
  height: 24,
  width: 24,
  position: "absolute",
  right: "-7px",
  top: "-7px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#00875F",
  color: "#fff",
  fontSize: "0.875rem",
  fontWeight: "bold",
  borderRadius: 9990,
  border: "3px solid #121214",
});
