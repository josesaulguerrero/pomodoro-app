/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from "react";
import { Time, TimerConfigContext } from "../context/timerConfig";

export enum Mode {
	pomodoro = "pomodoro",
	shortBreak = "short break",
	longBreak = "long break",
}

export const usePomodoro = () => {
	const { config } = useContext(TimerConfigContext);
	const [times, setTimes] = useState(config.Timer);
	let { Pomodoro, longBreak, shortBreak, pomodorosBeforeLongBreak } = times;
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
				let seconds = currentCounter.seconds + 1;
				let minutes = currentCounter.minutes;
				if (seconds === 60) {
					seconds = 0;
					minutes += 1;
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
		// once the component is mounted
		selectNextTimer();
		return () => {
			clearInterval(timerId.current);
		};
	}, []);

	useEffect(() => {
		// every second when the timer changes
		if (
			counter.minutes >= currentTimer.current.minutes &&
			counter.seconds > currentTimer.current.seconds
		) {
			selectNextTimer();
		}
	}, [counter]);

	useEffect(() => {
		//when the timer config changes.
		setTimes(() => {
			if (currentMode === Mode.pomodoro) {
				currentTimer.current = config.Timer.Pomodoro;
			} else if (currentMode === Mode.shortBreak) {
				currentTimer.current = config.Timer.shortBreak;
			} else if (currentMode === Mode.longBreak) {
				currentTimer.current = config.Timer.longBreak;
			}
			return config.Timer;
		});
	}, [config]);

	return {
		time: counter,
		start,
		pause,
		isRunning,
		currentTimer: currentTimer.current,
		currentMode,
	};
};
