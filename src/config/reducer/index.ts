import { Action } from "../actions/index";
import { AppConfig } from "../context/timerConfig";

export const reducer = (
	state: AppConfig = null!,
	{ type, payload }: Action
) => {
	switch (type) {
		default:
			return state;
	}
};
