import React from "react";
import ReactDOM from "react-dom";
import { TimerConfigProvider } from "./context/timerConfig";
import { App } from "./pages/App";

ReactDOM.render(
	<React.StrictMode>
		<TimerConfigProvider>
			<App />
		</TimerConfigProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
