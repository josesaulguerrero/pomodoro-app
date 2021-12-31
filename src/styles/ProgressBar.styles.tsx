import styled from "styled-components";

export const Container = styled.article`
	width: fit-content;
	height: fit-content;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 15px;
	background-image: linear-gradient(
		to right bottom,
		var(--darkerBackground) 30%,
		var(--lighterBackground)
	);
	box-shadow: -20px -20px 30px #22264d, 30px 30px 40px #131734;
	border-radius: 50%;
`;

export const SVG = styled.svg`
	width: 180px;
	height: 180px;
	background-color: var(--darkerBackground);
	border-radius: 50%;
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
	font-size: 5rem;
	font-family: sans-serif;
	color: var(--fontColor);
`;
