import { FC, useState } from "react";
// images
import SettingsLogo from "../assets/images/settings.svg";
// styled components
import { OpenModal, SettingsContainer } from "../styles/Settings.styles";
import { SettingsModal } from "./SettingsModal";

export const Settings: FC = () => {
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
			{isOpen && <SettingsModal setIsOpen={setIsOpen} />}
		</SettingsContainer>
	);
};
