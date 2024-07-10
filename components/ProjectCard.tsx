"use client";

import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import type { StaticImageData } from "next/image";
import { confirmAlert } from "react-confirm-alert";
import { useEffect } from "react";
import {
	Card,
	CardFooter,
	Image,
	Button,
	Link,
	CardBody,
} from "@nextui-org/react";

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
					<div className="mx-4 my-4 max-h-screen min-w-min max-w-3xl overflow-y-scroll rounded-lg border-gray-200 bg-white px-2 py-2 dark:border-gray-700 dark:bg-slate-800 dark:text-white">
						{link}
						<div className="py-2">
							<button
								type="button"
								onMouseDown={onClose}
								className="click-button"
							>
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
				}
			});
			const expElements = document.querySelectorAll(".anim");

			for (const el of expElements) {
				observer.observe(el);
			}
		}
	});
	return (
		<Card radius="lg" shadow="lg" className="anim border-none m-4 w-96">
			<div className="p-0">
				<Image
					radius="lg"
					src={img.src}
					width="100%"
					className="w-full object-cover object-top max-h-64"
					alt="Project Picture"
				/>
			</div>
			<CardBody>
				<h4 className="my-2 text-2xl font-bold tracking-tight">{title}</h4>
				<p className="h-20 max-w-fit">{description}</p>
			</CardBody>
			<CardFooter className="justify-center">
				{typeof link === "string" ? (
					<Button
						href={link}
						isExternal
						as={Link}
						variant="ghost"
						color="primary"
						showAnchorIcon
						disableRipple
						anchorIcon={<HiArrowRight />}
					>
						{linktext}
					</Button>
				) : (
					<div>
						<Button
							isExternal
							as={Link}
							variant="ghost"
							color="primary"
							showAnchorIcon
							disableRipple
							anchorIcon={<HiArrowRight />}
							onPress={submit}
						>
							{linktext}
						</Button>
					</div>
				)}
			</CardFooter>
		</Card>
	);
}

export default ProjectCard;
