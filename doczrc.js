const colors = Object.freeze({
  gray: "#b2becd",
  white: "#fff",
  lightGray: "#e9e9e9",
  lightBlue: "#00b4fc",
  darkGray: "#333333",
  purple: "#9468ff",
});

export default {
  title: "Zaremba Docz",
  themeConfig: {
    fonts: {
      body: "sofia-pro, sans-serif",
    },
    // colors: {
    //   background: "red",
    // },
    styles: {
      inlineCode: {
        bg: colors.darkGray,
        color: colors.purple,
        padding: "2px 4px",
        borderRadius: "4px",
        fontWeight: 700,
      },
      blockquote: {
        marginLeft: "30px",
        paddingTop: "0",
        paddingBottom: "0",
        bg: "none",
      },
      p: {
        color: colors.gray,
      },
      strong: {
        color: colors.lightGray,
        boxShadow: "inset 0 -1px 0 #00b4fc91",
      },
      img: {
        display: "block",
        marginTop: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        // width: "50%",
      },
      ol: {
        color: colors.gray,
        paddingLeft: "25px",
      },
      ul: {
        color: colors.gray,
        paddingLeft: "25px",
      },
      hr: {
        borderBottom: "1px solid #90909033",
      },
      table: {
        margin: "0 auto",
        // maxWidth: "80%",
      },
    },
  },
};
