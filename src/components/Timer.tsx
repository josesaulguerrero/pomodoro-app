// libraries and hooks
import { FC, useEffect, useState } from "react";
// types
import { Time as TimeType } from "../config/context/timerConfig";
// components
import { ProgressBar } from "./ProgressBar";
// styled components
import { Button, Container, Time } from "../styles/Timer.styles";

type Props = {
	time: TimeType;
	isRunning: boolean;
	currentTimer: TimeType;
	start(): void;
	pause(): void;
};

export const Timer: FC<Props> = ({
	time,
	isRunning,
	currentTimer,
	start,
	pause,
}) => {
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
