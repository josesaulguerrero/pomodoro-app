import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   html {
      box-sizing: border-box;
      font-size: 62.5%;
   }

   :root {
      --backgroundColor: #1e2140;
   }

   body {
      width: 100%;
      height: 100vh;
      min-height: 600px;
      background-color: var(--backgroundColor);
      overflow: hidden;
   }
`;
