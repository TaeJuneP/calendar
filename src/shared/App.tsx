import React from "react";
import { createGlobalStyle } from "styled-components";
import Main from "pages/Main";
const App: React.FC = () => {
  return (
    <>
      <Main />
      <GlobalStyle />
    </>
  );
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "roboto", 'NotoSansKR', "Helvetica Neue", Helvetica, Arial, "맑은 고딕", malgun gothic, "돋움", Dotum, sans-serif, "Apple Color Emoji", "Noto Color Emoji";
  }

  html, body, #root {
  width: 100%;
  height: 100%; 
  font-size: 1rem;
  display:flex;
  }
`;

export default App;
