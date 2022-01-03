import { createGlobalStyle } from "styled-components";

// font-family: 'Kumbh Sans', sans-serif;
// font-family: 'Roboto Slab', serif;
// font-family: 'Space Mono', monospace;
/*
   red -> hsl(0, 91%, 71%)
   cyan -> #70F3F8
   violet -> #D881F8
*/

const pickColor = (variant: string) => {
	if (variant === "primary") {
		return "var(--primaryColor)";
	} else if (variant === "secondary") {
		return "var(--secondaryColor)";
	} else {
		return "var(--tertiaryColor)";
	}
};

const pickFont = (variant: string) => {
	if (variant === "primary") {
		return "var(--primaryFont)";
	} else if (variant === "secondary") {
		return "var(--secondaryFont)";
	} else {
		return "var(--tertiaryFont)";
	}
};

type StyleProps = {
	ColorVariant: string;
	FontVariant: string;
};

export const GlobalStyle = createGlobalStyle`
   html {
      box-sizing: border-box;
      font-size: 62.5%;
   }

   :root {
      --backgroundColor: #1E213F;
      --darkerBackground: #161932;
      --lighterBackground: rgba(215, 224, 255, 0.1);
      --primaryColor: hsl(0, 91%, 71%);
      --secondaryColor: #70F3F8;
      --tertiaryColor: #D881F8;
      --mainColor: ${(props: StyleProps) => pickColor(props.ColorVariant)};
      --primaryFont: 'Kumbh Sans', sans-serif;
      --secondaryFont:'Roboto Slab', serif;
      --tertiaryFont: 'Space Mono', monospace;
      --fontFamily: ${(props: StyleProps) => pickFont(props.FontVariant)};
      --fontColor: #D7E0FF;
      --lighterFontColor: #7f8096;
      --lightGray: #c6dbfab1;
   }

   body {
      width: 100%;
      height: 100vh;
      min-height: 600px;
      background-color: var(--backgroundColor);
      overflow: hidden;
   }

   *, *::before, *::after {
      margin: 0;
      padding: 0;
      font-family: var(--fontFamily);
      box-sizing: border-box;
   }

   button {
      cursor: pointer;
   }
`;
