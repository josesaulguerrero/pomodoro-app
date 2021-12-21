import React, { useEffect, useState } from "react";

type IProps = {
	milliseconds: number;
};

export const Timer: React.FC<IProps> = ({ milliseconds }) => {
	const [timeLeft, setTimeLeft] = useState<number>(milliseconds);

	useEffect(() => {
		const timerID: NodeJS.Timer = startTimer();
		if (timeLeft === 0) {
			clearInterval(timerID);
		}
		return () => {
			clearInterval(timerID);
		};
	}, [timeLeft]);

	const formatTime = (milliseconds: number): string => {
		let minutes: number = Math.floor(milliseconds / 1000 / 60);
		let seconds: number = 0;
		if (milliseconds / 1000 / 60 !== 0) {
			seconds = milliseconds / 1000 - minutes * 60;
		}

		return `${minutes > 10 ? minutes : `0${minutes}`}:${
			seconds > 10 ? seconds : `0${seconds}`
		}`;
	};

	const [formattedTimeLeft, setFormmatedTimeLeft] = useState<string>(
		formatTime(milliseconds)
	);

	const startTimer = (): NodeJS.Timer => {
		const timerID = setInterval(() => {
			setTimeLeft((prevState) => {
				const newTime = prevState - 1000;
				setFormmatedTimeLeft(formatTime(newTime));
				return newTime;
			});
		}, 1000);
		return timerID;
	};

	return (
		<article className="Timer">
			<div>{formattedTimeLeft}</div>
		</article>
	);
};
