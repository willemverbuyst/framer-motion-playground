import SiteHeader from "@/components/site-header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type React from "react";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Random Numbers",
	description: "Generate random numbers with the click of a button",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(poppins.className, "light")}>
				<div className="flex min-h-screen flex-col items-center">
					<SiteHeader />
					{children}
				</div>
			</body>
		</html>
	);
}
