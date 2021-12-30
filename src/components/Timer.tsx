/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useContext, useEffect, useRef, useState } from "react";
import { Time, TimerConfigContext } from "../config/context/timerConfig";

enum Mode {
	pomodoro = "pomodoro",
	shortBreak = "short break",
	longBreak = "long break",
}

export const Timer: FC = () => {
	const {
		config: { Pomodoro, shortBreak, longBreak },
	} = useContext(TimerConfigContext);
	const currentTimer = useRef<Time>(null!);
	const [currentMode, setCurrentMode] = useState<Mode>(null!);
	const [counter, setCounter] = useState<Time>({
		minutes: 0,
		seconds: 0,
	});
	const { minutes, seconds } = counter;
	const [timerId, setTimerId] = useState<NodeJS.Timer>(null!);
	const [pomodorosLeft, setPomodorosLeft] = useState(2);
	const [isRunning, setIsRunning] = useState(false);

	const start = (): void => {
		const intervalID = setInterval(() => {
			setCounter((currentCounter) => {
				let seconds = currentCounter.seconds++;
				let minutes = currentCounter.minutes;
				if (seconds === 60) {
					seconds = 0;
					minutes++;
				}
				return {
					minutes,
					seconds,
				};
			});
		}, 1000);
		setTimerId(intervalID);
		setIsRunning(true);
	};

	const formatTime = (): string => {
		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
		const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
		return `${formattedMinutes}:${formattedSeconds}`;
	};

	const resetCounter = () => {
		setCounter({
			minutes: 0,
			seconds: 0,
		});
	};

	const selectNextTimer = () => {
		console.log("selecting...");
		if (
			(!currentTimer.current && !currentMode) ||
			currentMode === Mode.shortBreak ||
			currentMode === Mode.longBreak
		) {
			console.log("start pomodoro");
			setPomodorosLeft(
				(currentPomodorosLeft) => currentPomodorosLeft - 1
			);
			currentTimer.current = Pomodoro;
			setCurrentMode(Mode.pomodoro);
			resetCounter();
		} else if (pomodorosLeft === 0 && currentMode === Mode.pomodoro) {
			console.log("starting long break");
			setPomodorosLeft(2);
			currentTimer.current = longBreak;
			setCurrentMode(Mode.longBreak);
			resetCounter();
		} else if (currentMode === Mode.pomodoro) {
			console.log("starting short break");
			currentTimer.current = shortBreak;
			setCurrentMode(Mode.shortBreak);
			resetCounter();
		}
	};

	const pause = () => {
		clearInterval(timerId);
		setIsRunning(false);
	};

	useEffect(() => {
		selectNextTimer();
		return () => {
			clearInterval(timerId);
		};
	}, []);

	useEffect(() => {
		console.log(counter);
		if (
			minutes === currentTimer.current.minutes &&
			seconds > currentTimer.current.seconds
		) {
			selectNextTimer();
		}
	}, [minutes, seconds]);

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
