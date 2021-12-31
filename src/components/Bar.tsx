import { FC } from "react";
import { Mode } from "../hooks/usePomodoro";

type Props = {
	currentMode: Mode;
};

export const Bar: FC<Props> = ({ currentMode }) => {
	return (
		<section>
			<article
				data-currentMode={`${
					currentMode === Mode.pomodoro && "current"
				}`}
			>
				pomodoro
			</article>
			<article
				data-currentMode={`${
					currentMode === Mode.shortBreak && "current"
				}`}
			>
				short break
			</article>
			<article
				data-currentMode={`${
					currentMode === Mode.longBreak && "current"
				}`}
			>
				long break
			</article>
		</section>
	);
};
