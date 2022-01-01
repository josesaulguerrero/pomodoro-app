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
		return "hsl(0, 91%, 71%)";
	} else if (variant === "secondary") {
		return "#70F3F8";
	} else {
		return "#D881F8";
	}
};

const pickFont = (variant: string) => {
	if (variant === "primary") {
		return "'Kumbh Sans', sans-serif";
	} else if (variant === "secondary") {
		return "'Roboto Slab', serif";
	} else {
		return "'Space Mono', monospace";
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
      --mainColor: ${(props: StyleProps) => pickColor(props.ColorVariant)};
      --fontFamily: ${(props: StyleProps) => pickFont(props.FontVariant)};
      --fontColor: #D7E0FF;
      --lighterFontColor: #7f8096;
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
`;
