// libraries and hooks
import React from "react";
// components
import { Timer } from "../components/Timer";
// styled components
import { GlobalStyle } from "../styles/global.styles";
import { StyledApp, Wrapper } from "../styles/App.styles";

export const App: React.FC = () => {
	return (
		<StyledApp>
			<GlobalStyle />
			<Wrapper>
				<Timer />
			</Wrapper>
		</StyledApp>
	);
};
