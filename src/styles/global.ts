import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$gray900",
    color: "$gray100",
  },

  "body, button, input, textarea": {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 400,
  },

  button: {
    cursor: "pointer",
    border: 0,
  },

  li: {
    listStyle: "none",
  },

  a: {
    textDecoration: "none",
  },

  // ".keen-slider__slide": {
  //   minWidth: "696px !important"
  // }
});
