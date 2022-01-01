import React, { FC, useEffect } from "react";
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

export const SettingsModal: FC<Props> = ({ setIsOpen, changeConfig }) => {
	useEffect(() => {
		changeConfig({
			Timer: {
				Pomodoro: {
					minutes: 25,
					seconds: 0,
				},
				shortBreak: {
					minutes: 10,
					seconds: 0,
				},
				longBreak: {
					minutes: 15,
					seconds: 0,
				},
				pomodorosBeforeLongBreak: 4,
			},
			Styles: {
				color: "tertiary",
				font: "tertiary",
			},
		});
	}, []);

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
