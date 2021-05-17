const colors = {
  dark: {
    background: "#12181b", // used for main container bg
    text: "#fff",
    paragraph: "#b2becd", // used for paragraphs, ul, ol, etc.
    accent: "#9166cc", // used for inlinecode text color
    muted: "#2d2d2d", // used for inlinecode background color
    blue: "#1fb6ff",
    darkBlue: "#13161F",
    code: "#22262f",
  },
  light: {
    text: "#000000",
    paragraph: "#828282",
    accent: "#c7254e",
    muted: "#f9f2f4",
  },
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
          header: {
            bg: colors.dark.darkBlue,
          },
          sidebar: {
            bg: colors.dark.darkBlue,
            navGroup: "text",
            navLinkActive: colors.dark.blue,
            tocLink: colors.dark.blue,
            tocLinkActive: colors.dark.blue,
          },
        },
        light: {
          ...colors.light,
        },
      },
    },
    styles: {
      h1: {
        color: colors.dark.blue,
      },
      inlineCode: {
        bg: "muted",
        color: "blue",
        padding: "2px 4px",
        borderRadius: "4px",
        fontWeight: 700,
        fontSize: ".85em",
      },
      blockquote: {
        marginLeft: "30px",
        paddingTop: "0",
        paddingBottom: "0",
        bg: "none",
        borderLeft: `1px solid ${colors.dark.text}`,
      },
      strong: {
        color: "accent",
        // boxShadow: "inset 0 -1px 0 #00b4fc91",
      },
      img: {
        display: "block",
        marginTop: "20px",
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
      },
      hr: {
        borderBottom: `1px solid ${colors.dark.accent}`,
      },
      table: {
        margin: "0 auto",
        maxWidth: "80%",
      },
    },
    prism: {
      dark: {
        plain: {
          backgroundColor: colors.dark.code,
          whiteSpace: "pre-wrap",
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
