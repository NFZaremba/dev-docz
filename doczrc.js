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
          background: "#12181b",
          text: "#fff",
          paragraph: "#b2becd", // used for paragraphs, ul, ol, etc.
          accent: "#9166cc", // used for inlinecode text color
          muted: "#1d1d1d", // used for inlinecode background color
          blue: "#1fb6ff",
          Container: {
            bg: "bg",
          },
          root: {
            bg: "bg",
          },
          // sidebar: {
          //   // boxShadow: "4px 0 10px -3px #010101",
          //   bg: "#13161F",
          //   navGroup: "text",
          //   navLinkActive: "blue",
          //   tocLink: "#1fb6ff",
          //   tocLinkActive: "yellow",
          // },
          prism: {
            plain: {
              bg: "red",
            },
          },
        },
        light: {
          text: "#000000",
          paragraph: "#828282",
          accent: "#c7254e",
          muted: "#f9f2f4",
        },
      },
    },
    styles: {
      Container: {
        bg: "background",
      },
      root: {
        bg: "background",
      },
      sidebar: {
        // boxShadow: "4px 0 10px -3px #010101",
        bg: "#13161F",
        navGroup: "text",
        navLinkActive: "blue",
        tocLink: "#1fb6ff",
        tocLinkActive: "yellow",
      },
      code: {
        bg: "yellow",
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
        marginLeft: "30px",
        paddingTop: "0",
        paddingBottom: "0",
        bg: "none",
      },
      strong: {
        color: "text",
        // boxShadow: "inset 0 -1px 0 #00b4fc91",
      },
      img: {
        display: "block",
        marginTop: "20px",
        width: "100%",
        objectFit: "cover",
        // marginLeft: "auto",
        // marginRight: "auto",
        // height: "80vh",
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
        borderBottom: "1px solid #90909033",
      },
      table: {
        margin: "0 auto",
      },
    },
  },
};
