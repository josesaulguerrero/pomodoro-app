import styled, { keyframes } from "styled-components";

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
	max-height: 350px;
	background-color: whitesmoke;
	border-radius: 15px;
`;

export const ModalHeader = styled.header`
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	border-bottom: 1px solid #e1dada;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

export const ModalTitle = styled.h3`
	font-size: 2rem;
`;

export const CloseModal = styled.button`
	width: 30px;
	height: 30px;
	border: none;
	outline: none;
	font-size: 2rem;
	background-color: transparent;
	cursor: pointer;
`;

export const ModalBody = styled.section`
	width: 100%;
	height: 200px;
	border: red 1px solid;
`;
