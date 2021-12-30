// libraries and hooks
import React from "react";
// components
import { Timer } from "../components/Timer";
// styled components
import { GlobalStyle } from "../styles/global.styles";

export const App: React.FC = () => {
	return (
		<div className="App">
			<GlobalStyle />
			<Timer />
		</div>
	);
};
