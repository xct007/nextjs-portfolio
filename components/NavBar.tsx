"use client";

import React from "react";
import {
	Navbar as NextUINavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Link,
} from "@nextui-org/react";
import NextLink from "next/link";
import ThemeSwitch from "./ThemeSwitcher";

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const navBarItems = [
		{
			title: "Home",
			href: "/",
		},
		{
			title: "About",
			href: "/about",
		},
		{
			title: "Projects",
			href: "/projects",
		},
		{
			title: "Contact",
			href: "/contact",
		},
	];
	return (
		<NextUINavbar
			maxWidth="2xl"
			shouldHideOnScroll
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<p className="font-bold text-inherit">SD</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{navBarItems.map((item, index) => (
					<NavbarItem key={`${item.title}-${index}`}>
						<Link color="foreground" href={item.href} size="md" as={NextLink}>
							{item.title}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent className="basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="basis-15 sm:flex gap-2">
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{navBarItems.map((item, index) => (
					<NavbarMenuItem key={`${item.title}-${index}`}>
						<Link
							color="foreground"
							className="w-full"
							href={item.href}
							size="lg"
							as={NextLink}
							onPress={() => setIsMenuOpen(false)}
						>
							{item.title}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</NextUINavbar>
	);
}
