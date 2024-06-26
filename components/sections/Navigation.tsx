"use client";
import { useState } from "react";
import useDarkMode from "../useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { PageProgress } from "../PageProgress";

const Navbar = () => {
	const { scrollYProgress } = useScroll();
	const [topshadow, setTopshadow] = useState("");
	const [menuOpen, setMenuOpen] = useState("h-0 overflow-hidden");
	const [, setTheme] = useDarkMode();
	const genericHamburgerLine =
		"h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300 bg-slate-800";
	function toggleMenu() {
		setMenuOpen(menuOpen === "h-fit" ? "h-0 overflow-hidden" : "h-fit");
	}
	const x = typeof window !== "undefined" ? localStorage.theme : "light";
	const [isDark, setIsDark] = useState(x === "dark");
	function toggleDarkModeButton(e: boolean) {
		e ? setTheme("dark") : setTheme("light");
		setIsDark(e);
	}
	useMotionValueEvent(scrollYProgress, "change", (v) => {
		setTopshadow(v > 0.001 ? "shadow-lg" : "");
	});
	return (
		<nav
			className={`hero fixed top-0 z-50 w-full transition-shadow duration-1000 ${topshadow}`}
		>
			<PageProgress />
			<div className=" px-2 py-2 lg:flex lg:justify-end">
				<div className="flex flex-row">
					<DarkModeSwitch
						// ? stroke-none gets rid of the weird outline in the moon
						className="ml-auto mt-1 lg:mt-[14px] stroke-none"
						sunColor="white"
						moonColor="#1f2937"
						onChange={(e) => toggleDarkModeButton(e)}
						size={30}
						checked={isDark}
					/>
					{/* <!-- Mobile menu button --> */}
					<div className="scale-75 focus:outline-none lg:hidden ">
						<button
							type="button"
							aria-label="Expand menu button"
							className="group flex h-10 w-10 flex-col items-center rounded"
							onMouseDown={toggleMenu}
						>
							<div
								className={`${genericHamburgerLine} ${
									menuOpen === "h-fit" ? "translate-y-3 rotate-45" : ""
								}`}
							/>
							<div
								className={`${genericHamburgerLine} ${
									menuOpen === "h-fit" ? "opacity-0" : ""
								}`}
							/>
							<div
								className={`${genericHamburgerLine} ${
									menuOpen === "h-fit" ? "-translate-y-3 -rotate-45 " : ""
								}`}
							/>
						</button>
					</div>
				</div>
				<div className={` ml-2  ${menuOpen} flex justify-center lg:h-fit`}>
					{/* //? These have to be onClick otherwise the links don't work */}
					<div className="flex flex-col lg:mx-2 lg:flex-row">
						<button type="button" onClick={toggleMenu} className="navButton">
							<a href="# ">Home</a>
						</button>
						<button type="button" onClick={toggleMenu} className="navButton">
							<a href="#AboutMe">About Me</a>
						</button>
						<button type="button" onClick={toggleMenu} className="navButton">
							<a href="#Interests">Interests</a>
						</button>
						<button type="button" onClick={toggleMenu} className="navButton">
							<a href="#Experience">Experience</a>
						</button>
						<button type="button" onClick={toggleMenu} className="navButton">
							<a href="#Skills">Skills</a>
						</button>

						{/*//? Contact me button */}

						<button
							type="button"
							onMouseDown={toggleMenu}
							className="group my-1 mr-2 w-40 items-center justify-center overflow-hidden whitespace-nowrap rounded-lg
                bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-white hover:text-black dark:text-white lg:ml-2"
						>
							<span
								className="relative inline-flex w-full items-center justify-center rounded-md px-5 py-2.5 font-manrope text-lg font-bold tracking-wider transition-all
                 duration-150 ease-in group-hover:bg-gray-200 group-hover:bg-opacity-100 dark:group-hover:bg-slate-800 dark:group-hover:text-white"
							>
								<a href="#Contact">Contact me!</a>
							</span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
