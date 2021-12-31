// libraries and hooks
import { FC } from "react";
// types
import { Mode } from "../hooks/usePomodoro";
// styled components
import { BarContainer, BarItem } from "../styles/Bar.styles";

type Props = {
	currentMode: Mode;
};

export const Bar: FC<Props> = ({ currentMode }) => {
	return (
		<BarContainer>
			<BarItem
				data-currentmode={`${
					currentMode === Mode.pomodoro && "current"
				}`}
			>
				pomodoro
			</BarItem>
			<BarItem
				data-currentmode={`${
					currentMode === Mode.shortBreak && "current"
				}`}
			>
				short break
			</BarItem>
			<BarItem
				data-currentMode={`${
					currentMode === Mode.longBreak && "current"
				}`}
			>
				long break
			</BarItem>
		</BarContainer>
	);
};
