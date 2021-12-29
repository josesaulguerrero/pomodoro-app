import { ActionTypes } from "../types";

interface UpdatePomodoroTime {
	type: ActionTypes.UPDATE_POMODORO_TIME;
	payload: number;
}

interface UpdateShortBreakTime {
	type: ActionTypes.UPDATE_SHORT_BREAK_TIME;
	payload: number;
}

interface UpdateLongBreakTime {
	type: ActionTypes.UPDATE_LONG_BREAK_TIME;
	payload: number;
}

export type Action =
	| UpdatePomodoroTime
	| UpdateShortBreakTime
	| UpdateLongBreakTime;
