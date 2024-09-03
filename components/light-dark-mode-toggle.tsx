"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

export default function LightDarkModeToggle() {
	const [isDarkMode, setIsDarkMode] = useState(true);

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					onClick={() => {
						setIsDarkMode((prev) => !prev);
						document.body.classList.toggle("dark");
					}}
				>
					{isDarkMode ? <MoonIcon /> : <SunIcon />}
				</TooltipTrigger>
				<TooltipContent>
					{isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
