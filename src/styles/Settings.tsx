import styled, { keyframes } from "styled-components";

export const SettingsContainer = styled.section`
	margin-top: 80px;
`;

export const OpenModal = styled.button`
	width: fit-content;
	height: fit-content;
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;
`;

const FadeIn = keyframes`
	from {
		opacity: 0;
		visibility: hidden;
	} to {
		opacity: 1;
		visibility: visible;
	}
`;

export const ModalOverlay = styled.section`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 30px 20px;
	box-sizing: border-box;
	background-color: rgba(0, 0, 0, 0.4);
	animation: ${FadeIn} 0.4s alternate ease-in-out;
`;

export const Modal = styled.section`
	width: 100%;
	max-width: 400px;
	height: 100%;
	max-height: 450px;
	background-color: whitesmoke;
	border-radius: 15px;
`;
