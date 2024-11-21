const maktaba = {
  // hemistich styling
  "div[data-testid=scroll-item-body]": {
    ul: {
      padding: "0",
      margin: "0 0 1rem",

      li: {
        padding: "0",
        margin: "0",
        listStyle: "none",

        p: {
          padding: "0",
          margin: "0",
        },
      },

      ul: {
        marginLeft: "1rem",
      },
    },
  },

  // hotfix clover bug where information panel shows annotations
  ".clover-viewer-content": {
    aside: {
      display: "none",
    },
  },

  ".clover-viewer-header": {
    display: "none !important",
  },

  ".clover-viewer-media-wrapper > div > div > button": {
    display: "none",
  },

  "section.footnotes ol li": {
    listStyleType: "unset",
  },

  "#scroll-search": {
    margin: "1rem 1rem",
    width: "calc(100% - 4rem)",

    "> span": {
      padding: "0",

      svg: {
        height: "60%",
        width: "60%",
        padding: "20%",
        boxSizing: "inherit",
      },
    },
  },

  "section article figure": {
    margin: "0",
  },
};

export default maktaba;
