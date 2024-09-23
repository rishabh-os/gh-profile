"use client";
import {
	Navbar,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button,
} from "@nextui-org/react";
import { useState } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuItems = ["Home", "About Me", "Interests", "Experience", "Skills"];

	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			isMenuOpen={isMenuOpen}
			isBlurred={false}
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{menuItems.map((item, _) => (
					<NavbarItem key={`${item}`}>
						<Link
							color="foreground"
							className="text-lg scale-100 hover:text-primary transition-all duration-300"
							href={`#${item}`}
						>
							{item}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				{/* <NavbarItem>
					<ThemeSwitcher />
				</NavbarItem> */}
				<NavbarItem>
					<Button
						as={Link}
						color="primary"
						className="animated-gradient"
						href="#Contact"
					>
						Contact Me
					</Button>
				</NavbarItem>
			</NavbarContent>
			{/* // ? Hides the scrollbar in the menu during the animation */}
			<NavbarMenu className="overflow-hidden">
				{menuItems.map((item, _) => (
					<NavbarMenuItem key={`${item}`}>
						<Link
							color="primary"
							className="w-full flex items-center justify-center text-lg"
							href={`#${item}`}
							size="lg"
							onPressStart={() => setIsMenuOpen(false)}
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};

export default Navigation;
