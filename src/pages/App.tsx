// libraries and hooks
import React, { useContext } from "react";
import { usePomodoro } from "../hooks/usePomodoro";
// context
import { TimerConfigContext } from "../config/context/timerConfig";
// components
import { Timer } from "../components/Timer";
import { Bar } from "../components/Bar";
// styled components
import { GlobalStyle } from "../styles/global.styles";
import { StyledApp, Wrapper } from "../styles/App.styles";

export const App: React.FC = () => {
	const { config } = useContext(TimerConfigContext);
	const { time, isRunning, currentTimer, currentMode, start, pause } =
		usePomodoro(config.Timer);

	return (
		<StyledApp>
			<GlobalStyle />
			<Wrapper>
				<Bar currentMode={currentMode} />
				<Timer
					time={time}
					isRunning={isRunning}
					currentTimer={currentTimer}
					start={start}
					pause={pause}
				/>
			</Wrapper>
		</StyledApp>
	);
};
