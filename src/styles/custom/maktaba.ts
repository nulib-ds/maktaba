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
    padding: "0",
    margin: "0",
  },

  "section article figure": {
    margin: "0",
  },

  "section header div[data-testid=scroll-panel] button[role=checkbox] > div": {
    border: "1px solid #0003",
  },

  // hotfix clover bug where information panel shows annotations
  ".clover-viewer-content": {
    aside: {
      display: "none",
    },
  },

  "main table": {},
};

export default maktaba;
