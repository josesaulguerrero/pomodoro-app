// libraries and hooks
import React, { useContext } from "react";
// components
import { Timer } from "../components/Timer";
// styled components
import { GlobalStyle } from "../styles/global.styles";
import { StyledApp, Wrapper } from "../styles/App.styles";
import { TimerConfigContext } from "../context/timerConfig";

export const App: React.FC = () => {
	const {
		config: { Styles },
	} = useContext(TimerConfigContext);

	return (
		<StyledApp>
			<GlobalStyle
				ColorVariant={Styles.color}
				FontVariant={Styles.font}
			/>
			<Wrapper>
				<Timer />
			</Wrapper>
		</StyledApp>
	);
};
