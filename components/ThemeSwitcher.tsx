"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div>
			<DarkModeSwitch
				// ? stroke-none makes the icons a bit thinner
				className="stroke-none"
				sunColor="black"
				moonColor="white"
				onChange={(e) => setTheme(theme === "dark" ? "light" : "dark")}
				size={30}
				checked={theme === "dark"}
			/>
		</div>
	);
}
