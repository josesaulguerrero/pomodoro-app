/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FC, useContext, useRef, useState } from "react";
// types
import { TimerConfigContext } from "../context/timerConfig";
// styled components
import {
	CloseModal,
	ColorType,
	FontType,
	Label,
	Modal,
	ModalBody,
	ModalHeader,
	ModalOverlay,
	ModalTitle,
	NumberInput,
	TimeSection,
} from "../styles/SettingsModal.styles";
import { CheckedTick } from "./CheckedTick";

type Props = {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

enum inputNames {
	pomodoro = "Pomodoro",
	shortBreak = "shortBreak",
	longBreak = "longBreak",
}

export const SettingsModal: FC<Props> = ({ setIsOpen }) => {
	const {
		changeConfig,
		config: { Timer, Styles },
	} = useContext(TimerConfigContext);

	const TimerConfig = useRef(Timer);
	const [StylesConfig, setStylesConfig] = useState(Styles);

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.name);
		const name = event.target.name as inputNames;
		TimerConfig.current[name] = {
			minutes: parseInt(event.target.value),
			seconds: 0,
		};
		console.log(TimerConfig);
	};

	const onPickFont = (type: string) => {
		setStylesConfig((currentState) => {
			return {
				...currentState,
				font: type,
			};
		});
	};

	const onPickColor = (type: string) => {
		setStylesConfig((currentState) => {
			return {
				...currentState,
				color: type,
			};
		});
	};

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		changeConfig({
			Timer: TimerConfig.current,
			Styles: StylesConfig,
		});
		setIsOpen(false);
	};

	return (
		<ModalOverlay>
			<Modal>
				<ModalHeader>
					<ModalTitle>Settings</ModalTitle>
					<CloseModal onClick={() => setIsOpen(false)}>
						&#10799;
					</CloseModal>
				</ModalHeader>
				<ModalBody onSubmit={onSubmit}>
					<TimeSection>
						<h5>TIME (MINUTES)</h5>
						<section>
							<Label>
								Pomodoro
								<NumberInput
									name={inputNames.pomodoro}
									type="number"
									min="20"
									max="35"
									defaultValue={Timer.Pomodoro.minutes}
									onChange={handleOnChange}
								/>
							</Label>
							<Label>
								Short Break
								<NumberInput
									name={inputNames.shortBreak}
									type="number"
									min="5"
									max="10"
									defaultValue={Timer.shortBreak.minutes}
									onChange={handleOnChange}
								/>
							</Label>
							<Label>
								Long Break
								<NumberInput
									name={inputNames.longBreak}
									type="number"
									min="10"
									max="20"
									defaultValue={Timer.longBreak.minutes}
									onChange={handleOnChange}
								/>
							</Label>
						</section>
					</TimeSection>
					<section>
						<h5>FONT</h5>
						<FontType
							type="button"
							data-current={
								StylesConfig.font === "primary" && "true"
							}
							data-option="first"
							onClick={() => onPickFont("primary")}
						>
							Aa
						</FontType>
						<FontType
							type="button"
							data-current={
								StylesConfig.font === "secondary" && "true"
							}
							data-option="second"
							onClick={() => onPickFont("secondary")}
						>
							Aa
						</FontType>
						<FontType
							type="button"
							data-current={
								StylesConfig.font === "tertiary" && "true"
							}
							data-option="third"
							onClick={() => onPickFont("tertiary")}
						>
							Aa
						</FontType>
					</section>
					<section>
						<h5>COLOR</h5>
						<ColorType
							type="button"
							data-option="first"
							data-current={
								StylesConfig.color === "primary" && "true"
							}
							onClick={() => onPickColor("primary")}
						>
							<CheckedTick />
						</ColorType>
						<ColorType
							type="button"
							data-option="second"
							data-current={
								StylesConfig.color === "secondary" && "true"
							}
							onClick={() => onPickColor("secondary")}
						>
							<CheckedTick />
						</ColorType>
						<ColorType
							type="button"
							data-option="third"
							data-current={
								StylesConfig.color === "tertiary" && "true"
							}
							onClick={() => onPickColor("tertiary")}
						>
							<CheckedTick />
						</ColorType>
					</section>
					<button type="submit">Apply</button>
				</ModalBody>
			</Modal>
		</ModalOverlay>
	);
};
