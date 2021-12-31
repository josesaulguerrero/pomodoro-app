// libraries and hooks
import { FC } from "react";
// styled components
import { SVG } from "../styles/ProgressBar.styles";

type Props = {
	percentage: number;
};

export const ProgressBar: FC<Props> = ({ percentage }) => {
	const strokeDashArray = 503;
	return (
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
					strokeDashArray - (strokeDashArray * percentage) / 100 ||
					strokeDashArray
				}
				strokeLinecap="round"
			></circle>
		</SVG>
	);
};
