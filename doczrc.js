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
          padding: "0px 20px 0px 70px",
          margin: "30px 10px 20px -26px",
          color: colors.common.white,
          background:
            "linear-gradient( 90deg, rgb(216 0 255 / 50%) , rgba(0 220 255 / 50%))",
          textShadow: `0px 1px 2px ${colors.common.black}`,
          // -webkit-box-shadow: 0px 2px 4px #888,
          // -moz-box-shadow: 0px 2px 4px #888,
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
        marginLeft: "10px",
        paddingTop: "0",
        paddingBottom: "1px",
        paddingLeft: "25px",
        bg: "none",
        borderLeft: `1px solid ${colors.dark.accent}`,
        borderTop: `1px solid ${colors.dark.accent}`,
        boxShadow: `-5px -7px 5px ${colors.common.shadow}`,
        background:
          "linear-gradient( 90deg,rgb(216 0 255 / 50%) ,rgba(0 220 255 / 50%))",
        "> p": {
          mb: "16px",
        },
        "> h3": {
          "> a": {
            position: "relative",
            background: colors.common.black,
            padding: "10px",
            marginLeft: "-46px",
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
          },
        },
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
