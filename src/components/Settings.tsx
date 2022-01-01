import React, { FC, useState } from "react";
// images
import SettingsLogo from "../assets/images/settings.svg";
// types
import { AppConfig } from "../context/timerConfig";
// styled components
import { OpenModal, SettingsContainer } from "../styles/Settings.styles";
import { SettingsModal } from "./SettingsModal";

type Props = {
	changeConfig(newConfig: AppConfig): void;
};

export const Settings: FC<Props> = ({ changeConfig }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<SettingsContainer>
			<OpenModal
				onClick={() => {
					setIsOpen(true);
				}}
			>
				<img
					width="40px"
					height="40px"
					src={SettingsLogo}
					alt="settings logo"
				/>
			</OpenModal>
			{isOpen && (
				<SettingsModal
					setIsOpen={setIsOpen}
					changeConfig={changeConfig}
				/>
			)}
		</SettingsContainer>
	);
};
