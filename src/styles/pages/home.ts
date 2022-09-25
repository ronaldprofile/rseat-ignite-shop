import { styled } from "..";

export const HomePageContainer = styled("div", {
  minHeight: 620,
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
});

export const Product = styled("a", {
  minWidth: 696,
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
    padding: 20,
    bottom: "0.25rem",
    right: "0.25rem",
    left: "0.25rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    borderRadius: 6,
    background: "rgba(0,0,0,0.6)",

    "> div": {
      display: "flex",
      flexDirection: "column",
      gap: 4,

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
  },
});

export const Glass = styled("div", {
  position: "absolute",
  width: "136px",
  top: 0,
  bottom: 0,
  zIndex: 1000,
  background:
    "linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)",

  variants: {
    position: {
      "right-position": {
        right: 0,
      },

      "left-position": {
        left: 0,
      },
    },
  },

  defaultVariants: {
    position: "right-position",
  },
});

export const SlidesControl = styled("div", {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ButtonControl = styled("button", {
  width: 48,
  height: 48,
  background: "none",
  border: 0,

  svg: {
    width: "100%",
    height: "100%",
  },

  "&:disabled": {
    cursor: "not-allowed",

    svg: {
      opacity: "0.6",
    },
  },
});
