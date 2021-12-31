// libraries and hooks
import { FC, useContext, useEffect, useState } from "react";
import { usePomodoro } from "../hooks/usePomodoro";
// context
import { TimerConfigContext } from "../config/context/timerConfig";
// components
import { ProgressBar } from "./ProgressBar";
// styled components
import { Button, Container, Time } from "../styles/Timer.styles";
import { Bar } from "./Bar";

export const Timer: FC = () => {
	const { config } = useContext(TimerConfigContext);

	const {
		time: { minutes, seconds },
		isRunning,
		currentTimer,
		currentMode,
		start,
		pause,
	} = usePomodoro(config.Timer);

	//percentage = (passed time * 100) / total time
	const [progressPercentage, setProgress] = useState(0);

	const formatTime = (): string => {
		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
		const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
		return `${formattedMinutes}:${formattedSeconds}`;
	};

	useEffect(() => {
		const newProgress =
			((minutes * 60 + seconds) * 100) /
			(currentTimer?.minutes * 60 + currentTimer?.seconds);
		setProgress(parseFloat(newProgress.toFixed(1)));
	}, [minutes, seconds, currentTimer]);

	return (
		<>
			<Bar currentMode={currentMode} />
			<Container>
				<ProgressBar percentage={progressPercentage} />
				<Time>{formatTime()}</Time>
				<Button onClick={isRunning ? pause : start}>
					{isRunning ? "PAUSE" : "START"}
				</Button>
			</Container>
		</>
	);
};
