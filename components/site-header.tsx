import LightDarkModeToggle from "./light-dark-mode-toggle";

export default function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-[100vw]">
			<div className="flex h-14 items-center">
				<div className="ml-auto p-4">
					<LightDarkModeToggle />
				</div>
			</div>
		</header>
	);
}
