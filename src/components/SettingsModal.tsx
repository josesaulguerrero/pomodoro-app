import React, { FC, useContext, useEffect } from "react";
// types
import { TimerConfigContext } from "../context/timerConfig";
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
};

export const SettingsModal: FC<Props> = ({ setIsOpen }) => {
	const { changeConfig } = useContext(TimerConfigContext);
	useEffect(() => {
		changeConfig({
			Timer: {
				Pomodoro: {
					minutes: 20,
					seconds: 0,
				},
				shortBreak: {
					minutes: 5,
					seconds: 0,
				},
				longBreak: {
					minutes: 10,
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
