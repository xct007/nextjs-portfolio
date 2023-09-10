import "./globals.css";
import { Metadata } from "next";
import Providers from "./providers";
import NavBar from "@/components/NavBar";
import { siteConfig } from "@/configs/sites";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body>
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<NavBar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
