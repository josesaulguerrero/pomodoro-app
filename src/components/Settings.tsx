import { FC, useState } from "react";
// images
import SettingsLogo from "../assets/images/settings.svg";
// styled components
import {
	CloseModal,
	Modal,
	ModalHeader,
	ModalOverlay,
	ModalTitle,
	OpenModal,
	SettingsContainer,
} from "../styles/Settings.styles";

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
						<ModalHeader>
							<ModalTitle>Settings</ModalTitle>
							<CloseModal onClick={() => setIsOpen(false)}>
								&#10799;
							</CloseModal>
						</ModalHeader>
					</Modal>
				</ModalOverlay>
			)}
		</SettingsContainer>
	);
};
