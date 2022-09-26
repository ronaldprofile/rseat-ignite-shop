import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  config,
  createTheme,
  getCssText,
  keyframes,
  globalCss,
  theme,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",
      gray900: "#121214",
      gray800: "#202024",
      gray300: "#c4c4cc",

      gray100: "#e1e1e6",
      green500: "#00875f",
      green300: "#00b37e",
    },

    fontSizes: {
      sm: "0.75rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
});
