import { styled } from "../styles";

export const ProductContainerSkeleton = styled("main", {
  maxWidth: 1180,
  margin: "0 auto",
  display: "grid",
  gap: "4rem",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
});

export const ProductDetailsSkeleton = styled("div", {
  display: "flex",
  flexDirection: "column",

  ".details": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    ".product-description": {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
  },

  ".product-title": {
    display: "block",
    width: 520,
  },

  ".buy-product": {
    marginTop: "auto",

    ".button-buy": {
      padding: 24,
    },
  },
});
