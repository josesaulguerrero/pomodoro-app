import styled from "styled-components";

export const Container = styled.article`
	width: fit-content;
	height: fit-content;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: lightblue;
	border-radius: 50%;
`;

export const SVG = styled.svg`
	width: 200px;
	height: 200px;
	transform: rotate(-90deg);
`;

export const Time = styled.h2`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
