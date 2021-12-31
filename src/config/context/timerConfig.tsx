/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, FC, useReducer } from "react";
import { Action } from "../actions/index";
import { reducer } from "../reducer";
// import { ActionTypes } from "../types";

export type Time = {
	minutes: number;
	seconds: number;
};

export type TimerConfig = {
	Pomodoro: Time;
	shortBreak: Time;
	longBreak: Time;
	pomodorosBeforeLongBreak: number;
};

export type StylesConfig = {
	font: string;
	color: string;
};

export type AppConfig = {
	Timer: TimerConfig;
	Styles?: StylesConfig;
};

type TimerContext = {
	config: AppConfig;
	dispatch: React.Dispatch<Action>;
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
};

export const TimerConfigContextProvider: FC = ({ children }) => {
	const [config, dispatch] = useReducer(reducer, defaultConfig);

	return (
		<TimerConfigContext.Provider
			value={{
				config,
				dispatch,
			}}
		>
			{children}
		</TimerConfigContext.Provider>
	);
};
