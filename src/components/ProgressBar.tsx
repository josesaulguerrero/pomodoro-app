// libraries and hooks
import { FC } from "react";
// styled components
import { Container, SVG, Time } from "../styles/ProgressBar.styles";

type Props = {
	percentage: number;
	time: string;
};

export const ProgressBar: FC<Props> = ({ percentage, time }) => {
	const strokeDashArray = 502;
	return (
		<Container>
			<SVG viewBox="0 0 180 180">
				<circle
					cx="90"
					cy="90"
					r="80"
					fill="none"
					strokeWidth="7"
					stroke="rebeccapurple"
					strokeDasharray={strokeDashArray}
					strokeDashoffset={
						strokeDashArray -
							(strokeDashArray * percentage) / 100 || 505
					}
					strokeLinecap="round"
				></circle>
			</SVG>
			<Time>{time}</Time>
		</Container>
	);
};
