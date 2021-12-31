import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   html {
      box-sizing: border-box;
      font-size: 62.5%;
   }

   :root {
      --backgroundColor: #1E213F;
      --darkerBackground: #161932;
      --lighterBackground: rgba(215, 224, 255, 0.1);
      --mainColor: #ed6f73;
      --fontColor: #D7E0FF;
      --lighterFontColor: #4c4d6b;
   }

   body {
      width: 100%;
      height: 100vh;
      min-height: 600px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--backgroundColor);
      overflow: hidden;
   }

   *, *::before, *::after {
      margin: 0;
      padding: 0;
   }
`;
