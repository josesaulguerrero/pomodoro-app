/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useContext, useEffect, useState } from "react";
import { TimerConfigContext } from "../config/context/timerConfig";
import { usePomodoro } from "../hooks/usePomodoro";
import { Button, Container, Time } from "../styles/Timer.styles";
import { ProgressBar } from "./ProgressBar";

export const Timer: FC = () => {
	const { config } = useContext(TimerConfigContext);
	const {
		time: { minutes, seconds },
		isRunning,
		currentTimer,
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
		setProgress(newProgress);
	}, [minutes, seconds, currentTimer]);

	return (
		<>
			<Container>
				<ProgressBar
					percentage={parseFloat(progressPercentage.toFixed(5))}
				/>
				<Time>{formatTime()}</Time>
				<Button onClick={isRunning ? pause : start}>
					{isRunning ? "PAUSE" : "START"}
				</Button>
			</Container>
		</>
	);
};
