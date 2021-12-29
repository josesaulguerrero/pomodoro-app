import { createContext, FC, useReducer } from "react";
import { Action } from "../actions/index";
import { reducer } from "../reducer";
import { ActionTypes } from "../types";

type Time = {
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
		minutes: 20,
		seconds: 0,
	},
	shortBreak: {
		minutes: 5,
		seconds: 0,
	},
	longBreak: {
		minutes: 10,
		seconds: 0,
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
