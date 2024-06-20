"use client";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button,
} from "@nextui-org/react";
import { PageProgress } from "../PageProgress";
import { useState } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher";

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuItems = ["Home", "About Me", "Interests", "Experience", "Skills"];

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<PageProgress />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{menuItems.map((item, _) => (
					<NavbarItem key={`${item}`}>
						<Link color="foreground" href={`#${item}`}>
							{item}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Contact Me
					</Button>
				</NavbarItem>
				<NavbarItem>
					<ThemeSwitcher />
				</NavbarItem>
			</NavbarContent>
			{/* // ? Hides the scrollbar in the menu during the animation */}
			<NavbarMenu className="overflow-hidden">
				{menuItems.map((item, _) => (
					<NavbarMenuItem key={`${item}`}>
						<Link
							color="primary"
							className="w-full"
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
