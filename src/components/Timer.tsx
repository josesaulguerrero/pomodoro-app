/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Time, useTimer } from "../hooks/useTimer";

type TimerConfig = {
	sessionTime: Time;
	shortBreak: Time;
	longBreak: Time;
	sessions: number;
	sessionsLeft: number;
};

enum Mode {
	sprint = "Session",
	shortBreak = "Short Break",
	longBreak = "Long Break",
}

export const Timer: React.FC = () => {
	return (
		<article className="Timer">
			<div></div>
		</article>
	);
};
