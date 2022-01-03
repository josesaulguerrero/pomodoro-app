import styled, { css, keyframes } from "styled-components";

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
	max-height: 420px;
	background-color: whitesmoke;
	border-radius: 15px;

	@media (min-width: 400px) {
		max-height: 320px;
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
	height: calc(100% - 71px);
	position: relative;

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
	background-color: var(--lightGray);
	border-radius: 5px;
	font-weight: bold;

	&:focus {
		outline: 2px solid var(--backgroundColor);
	}
`;

// these styles are shared by FontSection and ColorSection:
const sharedStyles = css`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px 20px 15px;

	& > section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 10px;
	}

	@media screen and (min-width: 400px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		& > section {
			margin-top: 0px;
		}
	}
`;

export const FontSection = styled.section`
	${sharedStyles}
`;

export const FontType = styled.button`
	width: 30px;
	height: 30px;
	font-size: 1.3rem;
	font-weight: bold;
	color: var(--lighterFontColor);
	border: none;
	background-color: var(--lightGray);
	border-radius: 50%;
	transition: all 0.3s ease-in-out;
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
		background-color: var(--backgroundColor);
		color: var(--fontColor);
	}

	&:not(:last-of-type) {
		margin-right: 10px;
	}
`;

export const ColorSection = styled.section`
	${sharedStyles}
`;

export const ColorType = styled.button`
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 50%;
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

	&:not(:last-of-type) {
		margin-right: 10px;
	}
`;

export const Submit = styled.button`
	position: absolute;
	top: calc(100% - 20px);
	left: calc(50% - 50px);
	width: 100px;
	height: 40px;
	border: none;
	font-weight: bold;
	background-color: var(--mainColor);
	border-radius: 20px;
	will-change: transform;
	transition: transform 0.3s ease-in-out;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			transform: scale(1.1);
		}
	}
`;
