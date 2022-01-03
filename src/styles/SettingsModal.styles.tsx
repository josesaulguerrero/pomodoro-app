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
	max-height: 400px;
	background-color: whitesmoke;
	border-radius: 15px;

	@media (min-width: 400px) {
		max-height: 350px;
	}
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
export const ModalBody = styled.form`
	width: 100%;
	height: 200px;
	border: red 1px solid;

	& h5 {
		font-size: clamp(1.1rem, 1.2rem, 1.3rem);
	}
`;

export const TimeSection = styled.section`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px 20px;

	& > section {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
	}

	@media screen and (min-width: 400px) {
		align-items: flex-start;
		& > section {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
	}
`;

export const Label = styled.label`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--lighterFontColor);
	font-weight: bold;
	font-size: 1.2rem;
	margin-bottom: 5px;

	@media screen and (min-width: 400px) {
		flex: 1;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 0;
	}
`;

export const NumberInput = styled.input`
	width: 90px;
	max-width: 90px;
	border: none;
	padding: 5px;
	box-sizing: border-box;
	background-color: #c6dbfab1;
	border-radius: 5px;
	font-weight: bold;
`;

export const FontType = styled.button`
	font-size: 2rem;
	background-color: gray;
	&[data-option="first"] {
		font-family: var(--primaryFont);
	}
	&[data-option="second"] {
		font-family: var(--secondaryFont);
	}
	&[data-option="third"] {
		font-family: var(--tertiaryFont);
	}
	&[data-current="true"] {
		background-color: red;
	}
`;

export const ColorType = styled.button`
	svg {
		opacity: 0;
		transition: opacity 0.1s ease-in-out;
	}
	&[data-option="first"] {
		background-color: var(--primaryColor);
	}
	&[data-option="second"] {
		background-color: var(--secondaryColor);
	}
	&[data-option="third"] {
		background-color: var(--tertiaryColor);
	}
	&[data-current="true"] svg {
		opacity: 1;
	}
`;
