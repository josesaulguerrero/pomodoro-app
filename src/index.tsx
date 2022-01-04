import React from "react";
import ReactDOM from "react-dom";
import { TimerConfigContextProvider } from "./context/timerConfig";
import { App } from "./pages/App";
import { registerServiceWorker } from "./SWRegister";

ReactDOM.render(
	<React.StrictMode>
		<TimerConfigContextProvider>
			<App />
		</TimerConfigContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

registerServiceWorker();
