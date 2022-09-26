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

  img: {
    cursor: "pointer",
  },

  "@media (min-width: 1024px)": {
    maxWidth: 1100,
    paddingInline: 0,
  },
});
