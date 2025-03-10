import { headerHeight } from "@styles/global";
import { styled } from "@styles/stitches";

/* eslint sort-keys: 0 */

const asideWidth = "300px";

const AsideFixedContent = styled("div", {
  position: "fixed",
  width: asideWidth,
  paddingTop: "calc($gr4 + $gr3)",
  marginTop: "-$gr4",
  maxHeight: `calc(100% - $gr5 - ${headerHeight}px)`,
  overflow: "scroll",

  "@xs": {
    position: "relative",
    width: "100%",
    maxHeight: "auto",
    paddingTop: "0",
    marginTop: "0",
  },
});

const AsideStyled = styled("aside", {
  width: asideWidth,

  "@xs": {
    position: "relative",
    width: "100%",
    marginTop: "0",
    paddingBottom: "$gr2",
    borderBottom: "1px solid var(--gray-4)",
  },
});

const ContentStyled = styled("div", {
  flexShrink: 1,
  width: `calc(100% - ${asideWidth})`,

  "@xs": {
    width: "100%",
  },
});

const ContentWrapper = styled("div", {
  position: "relative",
  width: "100%",
  padding: "$gr3 0",
  display: "flex",

  variants: {
    aside: {
      true: {
        "@xs": {
          flexDirection: "column",
        },
      },
    },
  },

  "@md": {
    padding: "$gr2 0",
  },
});

export { AsideFixedContent, AsideStyled, ContentStyled, ContentWrapper };
