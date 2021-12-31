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

export const Button = styled.button`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 15%;
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	font-family: sans-serif;
	font-weight: bold;
	font-size: clamp(1rem, 1.1rem, 1.2rem);
	color: var(--fontColor);
	letter-spacing: 7px;
	text-align: center;
	outline: none;
	cursor: pointer;
	background-color: transparent;
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
