import { styled } from "..";

export const Container = styled("div", {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "flex-start",
});

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
