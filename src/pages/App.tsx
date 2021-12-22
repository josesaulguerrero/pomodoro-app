import React from "react";
import { Timer } from "../components/Timer";

export type Config = {
	minutes: number;
	seconds: number;
};

export const App: React.FC = () => {
	const config: Config = {
		minutes: 1,
		seconds: 5,
	};
	return (
		<div className="App">
			<Timer config={config} />
		</div>
	);
};
