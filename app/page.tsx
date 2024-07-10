import type { NextPage } from "next";
import Navigation from "../components/sections/Navigation";
import AboutMe from "../components/sections/AboutMe";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Interests from "../components/sections/Interests";
import Contact from "../components/sections/Contact";
import Parallax from "../components/Parallax";
import MotionDiv from "../components/MotionDiv";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
const Home: NextPage = () => {
	const date = new Date(process.env.NEXT_PUBLIC_LASTMOD ?? "2023-12-01");
	const month = date.toLocaleString("default", { month: "long" });
	const displayDate = `${month} ${date.getFullYear().toString()}`;
	return (
		// ? This gets rid of the horizontal scrollbar in animations
		<NextUIProvider>
			<ThemeProvider attribute="class" defaultTheme="dark">
				<div id="Home" className="overflow-clip">
					<Navigation />
					<section className="hero flex h-[47vh] items-center justify-center">
						<MotionDiv
							initial="hidden"
							animate="visible"
							variants={{
								hidden: {
									scale: 0.5,
									opacity: 0,
								},
								visible: {
									scale: 1,
									opacity: 1,
									transition: {
										type: "spring",
										bounce: 1,
										stiffness: 100,
										damping: 10,
										restSpeed: 0.5,
										delay: 0.5,
										duration: 1,
									},
								},
							}}
						>
							<h1 className="mx-2 mt-48 justify-center text-center font-victormono text-7xl font-bold text-slate-800">
								Welcome to my
								<br />
								website!
							</h1>
						</MotionDiv>
					</section>
					<div className="layer1" />
					<Parallax>
						<AboutMe />
					</Parallax>
					<Interests />
					<Experience />
					<Skills />
					<Contact />
					<footer className="footer flex justify-center bg-gray-700 p-4 text-center text-white">
						<p>
							{displayDate} <br /> If you like the monospace font, check out{" "}
							<a
								href="https://github.com/rubjo/victor-mono"
								target="_blank"
								rel="noopener noreferrer"
								className=" underline decoration-blue-500 decoration-2 underline-offset-2 transition-all hover:bg-blue-500"
							>
								Victor Mono
							</a>
						</p>
					</footer>
				</div>
			</ThemeProvider>
		</NextUIProvider>
	);
};

export default Home;
