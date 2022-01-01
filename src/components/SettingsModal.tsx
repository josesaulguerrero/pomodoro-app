import React, { FC } from "react";
// types
import { AppConfig } from "../context/timerConfig";
// styled components
import {
	CloseModal,
	Modal,
	ModalBody,
	ModalHeader,
	ModalOverlay,
	ModalTitle,
} from "../styles/SettingsModal.styles";

type Props = {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	changeConfig(newConfig: AppConfig): void;
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
				<ModalBody></ModalBody>
			</Modal>
		</ModalOverlay>
	);
};
