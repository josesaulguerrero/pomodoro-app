import { useEffect, useRef, useState } from "react";
import { Time, TimerConfig } from "../config/context/timerConfig";

enum Mode {
	pomodoro = "pomodoro",
	shortBreak = "short break",
	longBreak = "long break",
}

export const usePomodoro = (config: TimerConfig) => {
	const { Pomodoro, longBreak, shortBreak, pomodorosBeforeLongBreak } =
		config;
	const currentTimer = useRef<Time>(null!);
	const timerId = useRef<NodeJS.Timer>(null!);
	const [currentMode, setCurrentMode] = useState<Mode>(null!);
	const [counter, setCounter] = useState<Time>({
		minutes: 0,
		seconds: 0,
	});
	const [pomodorosLeft, setPomodorosLeft] = useState(
		pomodorosBeforeLongBreak
	);
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
		timerId.current = intervalID;
		setIsRunning(true);
	};

	const pause = () => {
		clearInterval(timerId.current);
		setIsRunning(false);
	};

	const resetCounter = () => {
		setCounter({
			minutes: 0,
			seconds: 0,
		});
	};

	const selectNextTimer = () => {
		if (
			(!currentTimer.current && !currentMode) ||
			currentMode === Mode.shortBreak ||
			currentMode === Mode.longBreak
		) {
			setPomodorosLeft(
				(currentPomodorosLeft) => currentPomodorosLeft - 1
			);
			currentTimer.current = Pomodoro;
			setCurrentMode(Mode.pomodoro);
			resetCounter();
		} else if (pomodorosLeft === 0 && currentMode === Mode.pomodoro) {
			setPomodorosLeft(pomodorosBeforeLongBreak);
			currentTimer.current = longBreak;
			setCurrentMode(Mode.longBreak);
			resetCounter();
		} else if (currentMode === Mode.pomodoro) {
			currentTimer.current = shortBreak;
			setCurrentMode(Mode.shortBreak);
			resetCounter();
		}
	};

	useEffect(() => {
		selectNextTimer();
		return () => {
			clearInterval(timerId.current);
		};
	}, []);

	useEffect(() => {
		if (
			counter.minutes === currentTimer.current.minutes &&
			counter.seconds > currentTimer.current.seconds
		) {
			selectNextTimer();
		}
	}, [counter]);

	return {
		time: counter,
		start,
		pause,
		isRunning,
	};
};
