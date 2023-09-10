import { FC } from "react";
import { Switch, SwitchProps } from "@nextui-org/switch";
import { useTheme } from "next-themes";

import { SunFilledIcon, MoonFilledIcon } from "./materials/icons";

export interface ThemeSwitchProps {
	className?: string;
	classNames?: SwitchProps["classNames"];
}

const ThemeSwitch: FC<ThemeSwitchProps> = () => {
	const { theme, setTheme } = useTheme();
	return (
		<Switch
			defaultSelected
			onChange={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
			size="lg"
			color="secondary"
			startContent={<MoonFilledIcon />}
			endContent={<SunFilledIcon />}
		/>
	);
};
export default ThemeSwitch;
