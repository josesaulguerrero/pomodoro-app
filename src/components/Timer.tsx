import React, { useEffect, useState } from "react";
import { Config } from "../pages/App";

type IProps = {
	config: Config;
};

type IState = {
	timeLeft: Config;
};

export const Timer: React.FC<IProps> = ({ config }) => {
	const [timeLeft, setTimeLeft] = useState<IState["timeLeft"]>({
		minutes: config.minutes,
		seconds: config.seconds,
	});

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
		const timerID: NodeJS.Timer = setInterval(() => {
			setTimeLeft((prevState: IState["timeLeft"]) => {
				const newTime = formatTime(prevState);
				return newTime;
			});
		}, 1000);
		return timerID;
	};

	useEffect(() => {
		const timerID: NodeJS.Timer = startTimer();
		if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
			clearInterval(timerID);
		}
		return () => {
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
