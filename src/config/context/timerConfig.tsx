import { createContext, FC, useReducer } from "react";
import { Action } from "../actions/index";
import { reducer } from "../reducer";
import { ActionTypes } from "../types";

export type Time = {
	minutes: number;
	seconds: number;
};

export type TimerConfig = {
	Pomodoro: Time;
	shortBreak: Time;
	longBreak: Time;
};

type TimerContext = {
	config: TimerConfig;
	dispatch: React.Dispatch<Action>;
};

const defaultConfig: TimerConfig = {
	Pomodoro: {
		minutes: 0,
		seconds: 20,
	},
	shortBreak: {
		minutes: 0,
		seconds: 5,
	},
	longBreak: {
		minutes: 0,
		seconds: 10,
	},
};

export const TimerConfigContext = createContext<TimerContext>(null!);

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
