"use client";

import { motion, AnimatePresence } from "framer-motion";
import { type ReactNode, useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

interface ExpInfoProps {
	time: string;
	title: string;
	description: string;
	// ? Explicitly indicate that these can be null
	details?: string;
	buttons?: Array<ReactNode>;
}

export function ExpInfo({
	time,
	title,
	description,
	details,
	buttons = [],
}: ExpInfoProps) {
	const [isOpen, setIsOpen] = useState(false);
	const shouldAnimate = isOpen && details != null;
	return (
		<li className="explist" key={title}>
			<div className="topdiv" />
			<div className="animated">
				<time className="time">{time}</time>
				<div
					className="flex flex-col w-full px-3 py-2 mt-1 rounded-lg border-2 border-gray-200 dark:border-gray-700 shadow-md"
					onMouseDown={() => setIsOpen((prev) => !prev)}
					onKeyDown={() => setIsOpen((prev) => !prev)}
				>
					<button
						type="button"
						aria-controls={title}
						aria-expanded={shouldAnimate}
						className={`grid grid-cols-12 justify-between text-left items-center ${
							details ? "cursor-auto" : "cursor-default"
						} `}
					>
						<div className="title col-span-11 pb-2">{title}</div>
						{details ? (
							<AnimatePresence initial={false} mode="wait">
								<motion.div
									className="text-gray-700 dark:text-gray-200 col-span-1 mx-auto"
									key={shouldAnimate ? "minus" : "plus"}
									initial={{
										rotate: shouldAnimate ? -90 : 90,
									}}
									animate={{
										rotate: 0,
										transition: {
											type: "tween",
											duration: 0.15,
											ease: "circOut",
										},
									}}
									exit={{
										rotate: shouldAnimate ? -90 : 90,
										transition: {
											type: "tween",
											duration: 0.15,
											ease: "circIn",
										},
									}}
								>
									{shouldAnimate ? (
										<HiMinus className="h-5 w-5" />
									) : (
										<HiPlus className="h-5 w-5" />
									)}
								</motion.div>
							</AnimatePresence>
						) : (
							<div />
						)}
						<div className="description col-span-full">{description}</div>
					</button>
					<motion.div
						className="description"
						id={title}
						initial={false}
						animate={
							shouldAnimate
								? {
										height: "auto",
										opacity: 1,
										display: "block",
										transition: {
											height: {
												duration: 0.4,
												ease: "circInOut",
											},
											opacity: {
												duration: 0.4,
												delay: 0.15,
												ease: "circInOut",
											},
										},
								  }
								: {
										height: 0,
										opacity: 0,
										transition: {
											height: {
												duration: 0.4,
												ease: "circInOut",
											},
											opacity: {
												duration: 0.4,
												delay: -0.15,
												ease: "circInOut",
											},
										},
										transitionEnd: {
											display: "none",
										},
								  }
						}
					>
						<div className="p-2 mt-2 bg-gray-200 dark:bg-gray-700 rounded-2xl">
							{details}
						</div>
					</motion.div>
				</div>
				{buttons}
			</div>
		</li>
	);
}
