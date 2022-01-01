/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, FC, useEffect, useReducer, useState } from "react";

export type Time = {
	minutes: number;
	seconds: number;
};

export type TimerConfig = {
	Pomodoro: Time;
	shortBreak: Time;
	longBreak: Time;
	readonly pomodorosBeforeLongBreak: number;
};

export type StylesConfig = {
	font: string;
	color: string;
};

export type AppConfig = {
	Timer: TimerConfig;
	Styles: StylesConfig;
};

type TimerContext = {
	config: AppConfig;
	changeConfig(newConfig: AppConfig): void;
};

export const TimerConfigContext = createContext<TimerContext>(null!);

const defaultConfig: AppConfig = {
	Timer: {
		Pomodoro: {
			minutes: 20,
			seconds: 0,
		},
		shortBreak: {
			minutes: 10,
			seconds: 0,
		},
		longBreak: {
			minutes: 5,
			seconds: 0,
		},
		pomodorosBeforeLongBreak: 4,
	},
	Styles: {
		color: "primary",
		font: "primary",
	},
};

export const TimerConfigContextProvider: FC = ({ children }) => {
	//is there a cached config?
	const cachedConfig: AppConfig = JSON.parse(
		window.localStorage.getItem("timerConfig") as string
	);
	const [config, setConfig] = useState(
		cachedConfig ? cachedConfig : defaultConfig
	);

	const changeConfig = (newConfig: AppConfig) => {
		setConfig(newConfig);
	};

	useEffect(() => {
		window.localStorage.setItem("timerConfig", JSON.stringify(config));
	}, [config]);

	return (
		<TimerConfigContext.Provider
			value={{
				config,
				changeConfig,
			}}
		>
			{children}
		</TimerConfigContext.Provider>
	);
};
