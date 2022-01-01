// libraries and hooks
import { FC, useEffect, useState } from "react";
import { usePomodoro } from "../hooks/usePomodoro";
// components
import { Bar } from "./Bar";
import { ProgressBar } from "./ProgressBar";
import { Settings } from "./Settings";
// styled components
import { Button, Container, Time } from "../styles/Timer.styles";

export const Timer: FC = () => {
	const { time, isRunning, currentTimer, currentMode, start, pause } =
		usePomodoro();

	const { minutes, seconds } = time;

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
			<Settings />
		</>
	);
};
