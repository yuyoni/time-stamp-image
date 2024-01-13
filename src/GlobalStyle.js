// GlobalStyle.js 파일

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
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
  }
`;

export default GlobalStyle;
