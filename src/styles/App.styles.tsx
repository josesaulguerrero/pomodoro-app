import styled from "styled-components";

export const StyledApp = styled.section`
	width: 100%;
	min-width: 100%;
	height: 100vh;
	min-height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--backgroundColor);
	overflow: hidden;
`;

export const Wrapper = styled.section`
	width: 100%;
	max-width: 400px;
	height: 100%;
	max-height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 60px 40px;
	border: rebeccapurple 1px solid;
`;
