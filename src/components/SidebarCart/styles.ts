import { styled } from "../../styles";

export const SidebarContainer = styled("div", {
  position: "absolute",
  width: 480,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 2000,
  overflowY: 'scroll',

  background: "#202024",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
});

export const ButtonCloseSidebar = styled("button", {
  position: "absolute",
  width: 24,
  height: 24,
  right: 24,
  top: 24,

  background: "none",
});

export const SidebarWrapper = styled("div", {
  padding: 48,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  footer: {
    marginTop: 100,

    "div:first-child": {
      marginBottom: 8,
    },

    "div:last-child": {
      span: {
        fontWeight: "bold",
      },
    },

    div: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#E1E1E6",

      strong: {
        fontSize: "$xl",
      },
    },
  },
});

export const SidebarTitle = styled("span", {
  display: "block",
  marginBottom: "2rem",

  fontSize: "$lg",
  fontWeight: "bold",
  color: "#E1E1E6",
});

export const ProductsList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const ProductItem = styled("li", {
  display: "flex",
  alignItems: "start",
  gap: "1.5rem",
});

export const ImageProductContainer = styled("div", {
  width: "100%",
  maxWidth: 100,
  height: 93,
  padding: "0.25rem",
  position: "relative",
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  borderRadius: 8,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductItemInfo = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px",

  span: {
    fontSize: "$md",
    color: "#C4C4CC",
  },

  strong: {
    fontSize: "$md",
    color: "#E1E1E6",
  },

  button: {
    padding: 10,
    marginTop: "auto",
    fontWeight: "bold",
    background: "#F75A68",
    color: "#fff",

    border: 0,
    borderRadius: 4,
    transition: "filter .2s",

    "&:hover": {
      filter: "brightness(0.8)",
    },
  },
});

export const ButtonCompleteOrder = styled("button", {
  width: "100%",
  marginTop: "2rem",
  padding: "1rem",
  fontSize: "$md",
  fontWeight: "bold",
  color: "$white",
  background: "$green500",
  border: 0,
  borderRadius: 4,
  transition: "background .2s",

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
  },

  "&:not(:disabled):hover": {
    background: "$green300",
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
