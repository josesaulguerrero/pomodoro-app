import { Action } from "../actions/index";
import { TimerConfig } from "../context/timerConfig";

export const reducer = (
	state: TimerConfig = null!,
	{ type, payload }: Action
) => {
	switch (type) {
		default:
			return state;
	}
};
