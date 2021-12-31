import { FC, useState } from "react";
// images
import SettingsLogo from "../assets/images/settings.svg";
// styled components
import {
	Modal,
	ModalOverlay,
	OpenModal,
	SettingsContainer,
} from "../styles/Settings";

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
			{isOpen && (
				<ModalOverlay>
					<Modal>
						<button onClick={() => setIsOpen(false)}>
							&#10799;
						</button>
					</Modal>
				</ModalOverlay>
			)}
		</SettingsContainer>
	);
};
