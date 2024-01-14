import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  @font-face{
    font-family:'DNFBitBitv2';
    src: url('https://cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf') format('opentype');
    font-style: normal;
    font-weight:400;
    font-display: block;
  }

  @font-face {
      font-family: 'DOSGothic';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/DOSGothic.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: block;
  }

  body {
    font-family: 'GmarketSansMedium', 'DNFBitBitv2', 'DOSGothic', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #cfc1ab;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: gray;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
