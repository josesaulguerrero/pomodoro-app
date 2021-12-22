/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export type Time = {
	minutes: number;
	seconds: number;
};

export const useTimer = (time: Time) => {
	const [timeLeft, setTimeLeft] = useState<Time>(time);
	const [timerID, setTimerID] = useState<NodeJS.Timer>();
	const { minutes, seconds } = timeLeft;

	const updateTimer = (time: Time): Time => {
		let seconds = time.seconds--;
		let minutes = time.minutes;
		if (seconds === -1) {
			seconds = 59;
			minutes--;
		}
		return {
			minutes,
			seconds,
		};
	};

	const startTimer = (): void => {
		let ID = setInterval(() => {
			setTimeLeft((currentTime) => {
				const newTime = updateTimer(currentTime);
				return newTime;
			});
		}, 1000);
		setTimerID(ID);
	};

	const pauseTimer = () => {
		clearInterval(timerID as NodeJS.Timer);
	};

	useEffect(() => {
		if (minutes === 0 && seconds === 0) {
			clearInterval(timerID as NodeJS.Timer);
		}
	}, [timeLeft]);

	useEffect(() => () => clearInterval(timerID as NodeJS.Timer), []);

	const formmatedTime = `${minutes < 10 ? `0${minutes}` : minutes}:${
		seconds < 10 ? `0${seconds}` : seconds
	}`;
	return { formmatedTime, startTimer, pauseTimer };
};
