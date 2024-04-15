import { globalCss } from "@stitches/react";

export const rem = 20;
export const headerHeight = 60.533333;

const defaults = {
  body: {
    margin: 0,
    padding: 0,
  },

  html: {
    fontFamily: "$sans",
    fontSize: `${rem}px`,
    fontWeight: "500",
    fontSmooth: "always",
    webKitFontSmothing: "antialiased",
    mozOsxFontSmoth: "grayscale",
    paddingTop: `${headerHeight}px`,
  },

  "ul, ol": {
    li: {
      paddingBottom: "$gr1",
    },
  },

  dl: {
    dt: {
      fontWeight: "400",
    },
    dd: {
      marginInlineStart: "0",
      paddingBottom: "$gr4",
      lineHeight: "1.47em",
    },
  },

  "main div > div > article": {
    "> div, > p": {
      wordWrap: "break-word",
      whiteSpace: "pre-line !important",
      fontFamily: "Georgia, serif",
      lineHeight: "1.55em",
      fontSize: "0.85em",
    },
  },
};

const globalStyles = globalCss({
  ...defaults,
});

export default globalStyles;
