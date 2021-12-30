/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useContext } from "react";
import { TimerConfigContext } from "../config/context/timerConfig";
import { usePomodoro } from "../hooks/usePomodoro";

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
			<section>{formatTime()}</section>
			<button onClick={start} disabled={isRunning}>
				Start
			</button>
			<button onClick={pause} disabled={!isRunning}>
				Pause
			</button>
		</>
	);
};
