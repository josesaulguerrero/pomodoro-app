// libraries and hooks
import { FC } from "react";
// styled components
import { Circle, Container, SVG, Time } from "../styles/ProgressBar.styles";

type Props = {
	percentage: number;
	time: string;
};

export const ProgressBar: FC<Props> = ({ percentage, time }) => {
	console.log(percentage);
	return (
		<Container>
			<SVG>
				<Circle
					cx="70"
					cy="70"
					r="70"
					fill="none"
					strokeWidth="8"
					stroke="rebeccapurple"
					strokeDasharray="440"
					strokeDashoffset={440 - (440 * percentage) / 100}
					strokeLinecap="round"
				></Circle>
			</SVG>
			<Time>{time}</Time>
		</Container>
	);
};
