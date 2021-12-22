/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Time, useTimer } from "../hooks/useTimer";

type TimerConfig = {
	sprintTime: Time;
	shortBreak: Time;
	longBreak: Time;
	sprints: number;
};

enum Mode {
	sprint = "SPRINT_MODE",
	shortBreak = "SHORT_BREAK",
	longBreak = "LONG_BREAK",
}

export const Timer: React.FC = () => {
	const [mode, setMode] = useState<Mode>(Mode.sprint);

	const {
		formmatedTime: time,
		startTimer,
		pauseTimer,
	} = useTimer({
		minutes: 0,
		seconds: 4,
	});

	return (
		<article className="Timer">
			<div>{time}</div>
			<button onClick={pauseTimer}>Pause</button>
			<button onClick={startTimer}>Start</button>
		</article>
	);
};
