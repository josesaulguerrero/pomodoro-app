import styled from "styled-components";

export const BarContainer = styled.section`
	width: 300px;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 50px;
	padding: 5px;
	border-radius: 25px;
	background-color: var(--darkerBackground);
	box-sizing: border-box;
`;

export const BarItem = styled.article`
	flex: 1;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	font-weight: bold;
	color: var(--lighterFontColor);
	border-radius: 25px;
	box-sizing: border-box;
	transform: all 1s ease;
	&:not(:last-of-type) {
		margin-right: 10px;
	}

	&[data-currentmode="current"] {
		color: var(--darkerBackground);
		background-color: rebeccapurple;
	}
`;
