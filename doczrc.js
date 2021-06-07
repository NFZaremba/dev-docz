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
  common: {
    gray: "#67788a",
    white: "#fff",
    shadow: "#00000040",
    black: "#000",
    green: "#00ff08",
    pink: "#ff00d4",
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
          position: "relative",
          fontSize: "1.5em",
          fontWeight: "bold",
          padding: "10px 0px 10px 70px",
          margin: "30px -26px 20px -26px",
          color: colors.common.white,
          background: "linear-gradient( 90deg,rgb(0 0 0) ,rgb(98 0 255))",
          textShadow: `0px 1px 2px ${colors.common.black}`,
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
      },
      blockquote: {
        marginLeft: "15px",
        marginLeft: "15px",
        paddingTop: "0",
        paddingBottom: "1px",
        paddingLeft: "25px",
        paddingRight: "25px",
        bg: "none",
        borderLeft: `1px solid ${colors.common.black}`,
        borderTop: `1px solid ${colors.common.black}`,
        boxShadow: `5px 10px 8px ${colors.common.shadow}`,
        background:
          "linear-gradient( 90deg,rgb(216 0 255 / 50%) ,rgba(0 173 255 / 50%))",
        "> h1": {
          color: "text",
          textShadow: `3px 2px 2px rgb(98 0 255)`,
          padding: "20px 28px",
          borderTop: "5px solid #00ff08",
          margin: "-1px -25px 20px -25px",
        },
        "> h2": {
          position: "relative",
          fontSize: "1.5em",
          fontWeight: "bold",
          padding: "10px 0px 10px 25px",
          margin: "-1px -45px 20px -45px",
          color: colors.common.white,
          background: "linear-gradient( 90deg,rgb(0 0 0) ,rgb(98 0 255))",
          textShadow: `0px 1px 2px ${colors.common.black}`,
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
        "> p": {
          mb: "16px",
        },
        "> h3": {
          "> a": {
            position: "relative",
            background: "linear-gradient( 90deg,rgb(0 0 0) ,rgb(98 0 255))",
            padding: "10px 20px",
            marginLeft: "-35px",
            boxShadow: "0px 2px 4px #3b4048",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            ":after": {
              content: '" "',
              position: "absolute",
              width: 0,
              height: 0,
              left: 0,
              top: "100%",
              borderWidth: "3px 5px",
              borderStyle: "solid",
              borderColor: "#666 #666 transparent transparent",
            },
          },
        },
        "> h4": {
          "> a": {
            // position: "relative",
            // background: "linear-gradient( 90deg,rgb(0 0 0) ,rgb(98 0 255))",
            // padding: "10px 20px",
            // marginLeft: "-2px",
            // boxShadow: "0px 2px 4px #3b4048",
            // borderTopRightRadius: "30px",
            // borderBottomRightRadius: "30px",
          },
        },
        "> table": {
          color: "#fff",
        },
      },
      inlineCode: {
        bg: "muted",
        color: colors.common.pink,
        padding: "2px 4px",
        borderRadius: "4px",
        fontWeight: 700,
        fontSize: ".85em",
      },
      a: {
        color: colors.common.green,
      },
      strong: {
        color: "text",
        fontWeight: 700,
        // boxShadow: `inset 0 -1px 0 ${colors.common.gray}`,
      },
      em: {
        color: colors.common.green,
        fontStyle: "italic",
        fontWeight: 700,
        textShadow: `0px 1px 2px ${colors.common.black}`,
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
        textShadow: `0px 1px 2px ${colors.common.black}`,
      },
      ol: {
        color: "paragraph",
        paddingLeft: "25px",
        textShadow: `0px 1px 2px ${colors.common.black}`,
      },
      ul: {
        color: "paragraph",
        paddingLeft: "25px",
        listStyleType: "square",
        textShadow: `0px 1px 2px ${colors.common.black}`,
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
      },
      light: {
        plain: {
          whiteSpace: "pre-wrap",
        },
      },
    },
  },
};
