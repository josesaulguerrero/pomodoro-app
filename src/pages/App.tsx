import React, { useState } from "react";
import { Timer } from "../components/Timer";

export enum Mode {
	focus = "focus",
	break = "break",
}

export type Config = {
	focusMinutes: number;
	focusSeconds: number;
	breakMinutes: number;
	breakSeconds: number;
	mode: Mode;
};

export const App: React.FC = () => {
	const [mode, setTimerMode] = useState<Mode>(Mode.focus);

	const toggleMode = (): void => {
		setTimerMode(
			(currentState: Mode): Mode =>
				currentState === Mode.focus ? Mode.break : Mode.focus
		);
	};

	const config: Config = {
		focusMinutes: 0,
		focusSeconds: 10,
		breakMinutes: 0,
		breakSeconds: 5,
		mode: mode,
	};
	return (
		<div className="App">
			<Timer config={config} toggleMode={toggleMode} />
		</div>
	);
};
