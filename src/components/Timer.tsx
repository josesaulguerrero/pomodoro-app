/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useContext } from "react";
import { TimerConfigContext } from "../config/context/timerConfig";
import { usePomodoro } from "../hooks/usePomodoro";
import { ProgressBar } from "./ProgressBar";

export const Timer: FC = () => {
	const { config } = useContext(TimerConfigContext);
	const {
		time: { minutes, seconds },
		isRunning,
		start,
		pause,
	} = usePomodoro(config.Timer);

	const formatTime = (): string => {
		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
		const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
		return `${formattedMinutes}:${formattedSeconds}`;
	};

	return (
		<>
			<ProgressBar percentage={50} time={formatTime()} />
			<button onClick={start} disabled={isRunning}>
				Start
			</button>
			<button onClick={pause} disabled={!isRunning}>
				Pause
			</button>
		</>
	);
};
