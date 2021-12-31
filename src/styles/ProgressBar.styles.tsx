import styled from "styled-components";

export const SVG = styled.svg`
	width: 250px;
	height: 250px;
	background-color: var(--darkerBackground);
	border-radius: 50%;
	transform: rotate(-90deg);
	& circle {
		transition: all 1s ease-in-out;
	}
`;
