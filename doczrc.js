const colors = {
  dark: {
    background: "#12181b", // used for main container bg
    text: "#fff",
    paragraph: "#b2becd", // used for paragraphs, ul, ol, etc.
    accent: "#1fb6ff", // used for inlinecode text color
    muted: "#2d2d2d", // used for inlinecode background color
  },
  light: {
    background: "#f7f6f3",
    text: "#000000",
    paragraph: "#828282",
    accent: "#c7254e",
    muted: "#f9f2f4",
    gray: "#67788a",
  },
  common: { gray: "#67788a" },
};

export default {
  title: "Zaremba Docz",
  menu: ["Components", "JavaScript", "Getting Started", "Readme"],
  themeConfig: {
    initialColorMode: "dark",
    fonts: {
      body: "sofia-pro, sans-serif",
    },
    colors: {
      modes: {
        dark: {
          ...colors.dark,
          sidebar: {
            navGroup: "text",
            navLinkActive: colors.dark.accent,
            tocLink: colors.dark.accent,
            tocLinkActive: colors.dark.accent,
          },
        },
        light: {
          ...colors.light,
          sidebar: {
            navGroup: "text",
            navLinkActive: colors.dark.accent,
            tocLink: colors.dark.accent,
            tocLinkActive: colors.dark.accent,
          },
        },
      },
    },
    styles: {
      Container: {
        "> h2": {
          borderBottom: "2px dashed #2a2e35",
          paddingBottom: ".7em",
        },
      },
      h1: {
        color: "accent",
      },
      inlineCode: {
        bg: "muted",
        color: "accent",
        padding: "2px 4px",
        borderRadius: "4px",
        fontWeight: 700,
        fontSize: ".85em",
      },
      blockquote: {
        // marginLeft: "30px",
        paddingTop: "0",
        paddingBottom: "0",
        paddingLeft: "25px",
        bg: "none",
        borderLeft: "1px solid #38393a",
        borderTop: "1px solid #38393a",
        boxShadow: "-5px -7px 5px #29292940",
        "> p": {
          mb: "10px",
        },
      },
      strong: {
        color: "text",
        // bg: "muted",
        // padding: "2px 4px",
        // borderRadius: "4px",
        fontWeight: 700,
        // boxShadow: `inset 0 -1px 0 ${colors.common.gray}`,
      },
      em: {
        color: "#ffe000",
        fontStyle: "italic",
        fontWeight: 700,
      },
      img: {
        display: "block",
        // marginTop: "20px",
        maxWidth: "80%",
        objectFit: "cover",
        margin: "0 auto",
        marginTop: "2.5rem",
        marginBottom: "2.5rem",
      },
      p: {
        color: "paragraph",
      },
      ol: {
        color: "paragraph",
        paddingLeft: "25px",
      },
      ul: {
        color: "paragraph",
        paddingLeft: "25px",
        listStyleType: "square",
      },
      hr: {
        borderBottom: `1px solid ${colors.common.gray}`,
      },
    },
    prism: {
      dark: {
        plain: {
          whiteSpace: "pre-wrap",
          backgroundColor: "#22262f",
        },
        // styles: [
        //   {
        //     types: ["comment"],
        //     style: {
        //       color: "rgb(255, 55, 1)",
        //       fontStyle: "italic",
        //     },
        //   },
        // ],
      },
      light: {
        plain: {
          whiteSpace: "pre-wrap",
        },
      },
    },
  },
};
