import { FC } from "react";

type Props = {
	percentage: number;
	time: string;
};

export const ProgressBar: FC<Props> = ({ percentage, time }) => {
	return (
		<article>
			<svg>
				<circle
					cx="70"
					cy="70"
					r="70"
					fill="none"
					strokeWidth="8"
					stroke="rebeccapurple"
					strokeDasharray="440"
					strokeDashoffset={440 - (440 * percentage) / 100}
					strokeLinecap="round"
				></circle>
			</svg>
			<h2>{time}</h2>
		</article>
	);
};
