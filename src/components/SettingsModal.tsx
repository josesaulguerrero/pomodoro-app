import React, { FC } from "react";
// styled components
import {
	CloseModal,
	Modal,
	ModalHeader,
	ModalOverlay,
	ModalTitle,
} from "../styles/SettingsModal.styles";

type Props = {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SettingsModal: FC<Props> = ({ setIsOpen }) => {
	return (
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
	);
};
