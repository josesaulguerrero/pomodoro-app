import styled from "styled-components";

export const SettingsContainer = styled.section`
	margin-top: 80px;
`;

export const OpenModal = styled.button`
	width: 40px;
	height: 40px;
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;
	transform-origin: center center;
	transition: transform 0.5s ease-in;

	@media (hover: hover) {
		&:hover {
			transform: rotateZ(180deg);
		}
	}
`;
