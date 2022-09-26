import { styled } from "..";

export const HomePageContainer = styled("div", {
  width: "100%",
  minHeight: 620,
  padding: 24,
  display: "flex",

  "@media (min-width: 1024px)": {
    maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
    marginLeft: "auto",
  },
});

export const KeenSlider = styled("div", {
  display: "none !important",

  "@media (min-width: 500px)": {
    display: "flex !important",
  },
});

export const ProductsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: 48,

  "@media (min-width: 500px)": {
    display: "none",
  },
});

export const Product = styled("a", {
  height: 320,
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

    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      padding: "0.75rem",
      width: 48,
      height: 48,
      borderRadius: 6,
      background: "#00875F",
      border: 0,
      transition: "filter .2s",

      "&:hover": {
        filter: "brightness(0.9)",
      },
    },
  },

  "@media (min-width: 640px)": {
    minWidth: 696,
    height: "auto",
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
    hide: {
      true: {
        display: "none",
      },
    },
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
