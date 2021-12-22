import React, { useEffect, useState } from "react";
import { Config, Mode } from "../pages/App";

type IProps = {
	config: Config;
	toggleMode: () => void;
};

type IState = {
	timeLeft: {
		minutes: number;
		seconds: number;
	};
};

export const Timer: React.FC<IProps> = ({ config, toggleMode }) => {
	const [timeLeft, setTimeLeft] = useState<IState["timeLeft"]>({
		minutes: config.focusMinutes,
		seconds: config.focusSeconds,
	});

	const updateTimeLeft = () => {
		setTimeLeft(() =>
			config.mode === "focus"
				? { minutes: config.focusMinutes, seconds: config.focusSeconds }
				: { minutes: config.breakMinutes, seconds: config.breakSeconds }
		);
	};

	const formatTime = (timeLeft: IState["timeLeft"]) => {
		//this function receives the time left and returns an updated object.
		let seconds = timeLeft.seconds--; //
		let minutes = timeLeft.minutes;
		if (seconds === -1) {
			// the seconds should never be negative, so if it's equal to -1, then:
			seconds = 59; // seconds is reset to 59
			minutes--; // and one minute is taken off.
		}
		return {
			minutes,
			seconds,
		};
	};

	const startTimer = (): NodeJS.Timer => {
		//this function starts the timer and returns the timerID, so that it can be cleared anytime.
		const timerID: NodeJS.Timer = setInterval(() => {
			//this code is ran every second.
			setTimeLeft((prevState: IState["timeLeft"]) => {
				const newTime = formatTime(prevState);
				return newTime;
			});
		}, 1000);
		return timerID;
	};

	useEffect(() => {
		// every time the time left changes...
		const timerID: NodeJS.Timer = startTimer();
		if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
			//if the time left is 0, then we should clear the timer.
			clearInterval(timerID);
			toggleMode();
			updateTimeLeft();
		}
		return () => {
			//if the component is unmounted then we should clear the timer.
			clearInterval(timerID);
		};
	}, [timeLeft]);

	return (
		<article className="Timer">
			<div>{`${
				timeLeft.minutes < 10
					? `0${timeLeft.minutes}`
					: timeLeft.minutes
			}:${
				timeLeft.seconds < 10
					? `0${timeLeft.seconds}`
					: timeLeft.seconds
			}`}</div>
		</article>
	);
};
