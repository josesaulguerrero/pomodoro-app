import { FC } from "react";
// images
import SettingsLogo from "../assets/images/settings.svg";

export const Settings: FC = () => {
	return (
		<article>
			<img
				width="40px"
				height="40px"
				src={SettingsLogo}
				alt="settings logo"
			/>
		</article>
	);
};
