import React from "react";
import ReactDOM from "react-dom";
import { TimerConfigContextProvider } from "./config/context/timerConfig";
import { App } from "./pages/App";

ReactDOM.render(
	<React.StrictMode>
		<TimerConfigContextProvider>
			<App />
		</TimerConfigContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
