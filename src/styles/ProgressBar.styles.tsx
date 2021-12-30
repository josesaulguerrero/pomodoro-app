import styled from "styled-components";

export const Container = styled.article`
	width: 200px;
	height: 300px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: lightblue;
`;

export const SVG = styled.svg`
	width: 150px;
	height: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
`;

export const Circle = styled.circle`
	width: 150px;
	height: 150px;
	transform: translate(5px, 5px);
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
