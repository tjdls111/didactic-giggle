import { Global, css } from "@emotion/react";

const style = css`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "SpoqaHanSansNeo-Medium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Medium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
