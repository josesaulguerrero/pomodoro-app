// libraries and hooks
import React, { useContext } from "react";
// components
import { Timer } from "../components/Timer";
// styled components
import { GlobalStyle } from "../styles/global.styles";
import { StyledApp, Wrapper } from "../styles/App.styles";
// context
import { TimerConfigContext } from "../config/context/timerConfig";

export const App: React.FC = () => {
	const { config, dispatch } = useContext(TimerConfigContext);

	return (
		<StyledApp>
			<GlobalStyle />
			<Wrapper>
				<Timer config={config.Timer} dispatch={dispatch} />
			</Wrapper>
		</StyledApp>
	);
};
