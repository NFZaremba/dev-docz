const colors = {
  dark: {
    background: "#12181b", // used for main container bg
    text: "#000",
    accent: "#1fb6ff", // used for inlinecode text color
    muted: "#2d2d2d", // used for inlinecode background color
  },
  light: {
    background: "#f7f6f3",
    text: "#000000",
    accent: "#c7254e",
    muted: "#f9f2f4",
    gray: "#67788a",
  },
  common: {
    gray: "#67788a",
    white: "#fff",
    shadow: "#3b4048",
    black: "#000",
    green: "#00ff08",
    pink: "#ff00d4",
    purple: "#5f00f8",
  },
};

export default {
  title: "Knowledge Base",
  menu: ["Components", "Docs", "Getting Started", "Readme"],
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
            navGroup: colors.dark.white,
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
      blockquote: {
        paddingTop: "0",
        paddingBottom: "10px",
        paddingLeft: "25px",
        paddingRight: "25px",
        marginTop: 0,
        marginBottom: 0,
        bg: "none",
        // boxShadow: `6px 5px 10px ${colors.common.shadow}`,
        background: "#fff",
        border: "none",
        "> h1": {
          position: "relative",
          fontStyle: "normal",
          fontSize: "2.5em",
          fontWeight: "bold",
          padding: "20px 0px 20px 25px",
          margin: "-1px -45px 20px -45px",
          color: colors.common.white,
          background: "linear-gradient( 90deg,rgb(0 0 0) ,rgb(98 0 255))",
          boxShadow: "0px 2px 4px #3b4048",
          ":after": {
            content: '" "',
            position: "absolute",
            width: 0,
            height: 0,
            left: 0,
            top: "100%",
            borderWidth: "5px 10px",
            borderStyle: "solid",
            borderColor: "#666 #666 transparent transparent",
          },
          ":before": {
            content: '" "',
            position: "absolute",
            width: 0,
            height: 0,
            left: "calc(100% - 20px);",
            top: "100%",
            borderWidth: "5px 10px",
            borderStyle: "solid",
            borderColor: "#666 #666 transparent transparent",
            transform: "scale(-1, 1)",
          },
        },
        " > h2": {
          fontStyle: "normal",
          marginTop: "3rem",
          borderTop: `1px solid ${colors.common.black}`,
          "> a": {
            color: colors.common.white,
            position: "relative",
            background: colors.common.black,
            padding: "7px 20px",
            marginLeft: "-15px",
            boxShadow: `2px 2px 4px ${colors.common.purple}`,
            borderBottomRightRadius: "30px",
            color: colors.common.white,
          },
        },
        "> h3": {
          fontStyle: "normal",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "1.7rem",
          color: colors.common.black,
        },
        "> h4": {
          fontStyle: "normal",
          fontWeight: 900,
          marginBottom: "10px",
          fontSize: "1.5rem",
          color: colors.common.black,
        },
        "> blockquote": {
          borderLeft: `2px solid ${colors.common.black}`,
          marginLeft: "5px",
          paddingTop: 0,
          paddingBottom: 0,
        },
        "> p": {
          mb: "10px",
        },
        "> ul": {
          mb: "10px",
        },
        "> ol": {
          mb: "10px",
        },
        "> table": {
          color: colors.common.black,
          padding: "20px 25px",
          maxWidth: "84%",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: `6px 5px 10px ${colors.common.shadow}`,
        },
        "> .comment": {
          color: "red",
        },
      },
      inlineCode: {
        bg: "#0000001a",
        color: colors.common.purple,
        padding: "2px 6px",
        borderRadius: "4px",
        fontSize: ".85em",
        fontWeight: 900,
      },
      a: {
        color: colors.common.purple,
      },
      strong: {
        fontStyle: "normal",
        color: "text",
        fontWeight: 700,
        boxShadow: `inset 0 -3px 0 ${colors.common.green}`,
      },
      em: {
        fontStyle: "normal",
        color: colors.common.purple,
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
        fontStyle: "normal",
        color: "text",
        fontWeight: 500,
      },
      ol: {
        color: "text",
        paddingLeft: "25px",
        fontWeight: 500,
        marginBottom: "10px",
      },
      ul: {
        color: "text",
        paddingLeft: "25px",
        listStyleType: "square",
        fontWeight: 500,
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
        styles: [
          {
            types: ["changed"],
            style: {
              color: "rgb(162, 191, 252)",
              fontStyle: "italic",
            },
          },
          {
            types: ["deleted"],
            style: {
              color: "rgba(239, 83, 80, 0.56)",
              fontStyle: "italic",
            },
          },
          {
            types: ["inserted", "attr-name"],
            style: {
              color: "rgb(173, 219, 103)",
              fontStyle: "italic",
            },
          },
          {
            types: ["comment"],
            style: {
              color: "#00db08",
              fontStyle: "italic",
            },
          },
          {
            types: ["string", "url"],
            style: {
              color: "rgb(173, 219, 103)",
            },
          },
          {
            types: ["variable"],
            style: {
              color: "rgb(214, 222, 235)",
            },
          },
          {
            types: ["number"],
            style: {
              color: "rgb(247, 140, 108)",
            },
          },
          {
            types: ["builtin", "char", "constant", "function"],
            style: {
              color: "rgb(130, 170, 255)",
            },
          },
          {
            // This was manually added after the auto-generation
            // so that punctuations are not italicised
            types: ["punctuation"],
            style: {
              color: "rgb(199, 146, 234)",
            },
          },
          {
            types: ["selector", "doctype"],
            style: {
              color: "rgb(199, 146, 234)",
              fontStyle: "italic",
            },
          },
          {
            types: ["class-name"],
            style: {
              color: "rgb(255, 203, 139)",
            },
          },
          {
            types: ["tag", "operator", "keyword"],
            style: {
              color: "rgb(127, 219, 202)",
            },
          },
          {
            types: ["boolean"],
            style: {
              color: "rgb(255, 88, 116)",
            },
          },
          {
            types: ["property"],
            style: {
              color: "rgb(128, 203, 196)",
            },
          },
          {
            types: ["namespace"],
            style: {
              color: "rgb(178, 204, 214)",
            },
          },
        ],
      },
      light: {
        plain: {
          whiteSpace: "pre-wrap",
        },
      },
    },
  },
};
