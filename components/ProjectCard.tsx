"use client";

import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Image, { type StaticImageData } from "next/image";
import { confirmAlert } from "react-confirm-alert";
import { useEffect } from "react";
// ? Need to define interface so that I can use it as a JSX element
interface ProjectProps {
	link: string | JSX.Element;
	linktext: string;
	img: StaticImageData;
	title: string;
	description: string;
}
function ProjectCard({
	link,
	linktext,
	img,
	title,
	description,
}: ProjectProps) {
	function submit() {
		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className="mx-4 my-4 max-h-screen min-w-min max-w-3xl overflow-y-scroll rounded-lg border-gray-200 bg-white px-2 py-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
						{link}
						<div className="py-2">
							<button type="button" onClick={onClose} className="click-button">
								<HiArrowLeft className="mr-2" /> Back
							</button>
						</div>
					</div>
				);
			},
		});
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			const observer = new IntersectionObserver((entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate-project");
					}
					// ? Use this part if you want to redo the animation each time instead of only once
					// else {
					//   entry.target.classList.remove("animate-project");
					// }
				}
			});
			const expElements = document.querySelectorAll(".anim");

			for (const el of expElements) {
				observer.observe(el);
			}
		}
	});
	return (
		<div className="anim max-w-sm">
			<div className="mx-4 my-4 rounded-xl border border-gray-200 bg-white px-2 py-2 shadow-lg dark:border-gray-700 dark:bg-gray-800">
				<div className="mx-auto h-auto max-h-60 w-80 overflow-clip rounded-xl mt-[7px]">
					<Image src={img} alt="Project Picture" />
				</div>
				<div className="p-5">
					<h4 className="mb-2 font-inter text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title}
					</h4>

					<p className="mb-3 h-20 max-w-fit overflow-hidden font-inter text-gray-700 dark:text-gray-400">
						{description}
					</p>
					{typeof link === "string" ? (
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="click-button"
						>
							{linktext}
							<HiArrowRight className="ml-2" />
						</a>
					) : (
						<div>
							<button type="button" onClick={submit} className="click-button">
								{linktext} <HiArrowRight className="ml-2" />
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
