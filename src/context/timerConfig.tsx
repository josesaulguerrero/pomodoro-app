import React, { createContext, useState } from "react";

export type Time = {
	minutes: number;
	seconds: number;
};

type TimerConfig = {
	sessionTime: Time;
	shortBreak: Time;
	longBreak: Time;
	readonly sessions: number;
	sessionsLeft: number;
};

export const timerConfigContext: React.Context<TimerConfig | {}> =
	createContext({});

export const TimerConfigProvider: React.FC = ({ children }) => {
	const [timerConfig, setTimerConfig] = useState({
		sessionTime: {
			minutes: 1,
			seconds: 5,
		},
		shortBreak: {
			minutes: 0,
			seconds: 5,
		},
		longBreak: {
			minutes: 0,
			seconds: 15,
		},
		sessions: 4,
		sessionsLeft: 4,
	});

	return (
		<timerConfigContext.Provider
			value={{ timerConfig, changeConfig: setTimerConfig }}
		>
			{children}
		</timerConfigContext.Provider>
	);
};
