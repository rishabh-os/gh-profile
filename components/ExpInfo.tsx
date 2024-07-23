import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { Accordion, AccordionItem, Card } from "@nextui-org/react";
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
	return (
		<li className="explist" key={title}>
			<div className="topdiv" />
			<div className="animated">
				<time className="time">{time}</time>
				<Card className="w-full py-1 px-3 mt-1">
					{details ? (
						<Accordion>
							<AccordionItem
								disabled
								title={<div className="title pb-2">{title}</div>}
								subtitle={<div className="description">{description}</div>}
								textValue={details}
								indicator={({ isOpen }) => (
									<motion.div
										initial={{
											rotate: isOpen ? -90 : 90,
											opacity: 1,
										}}
										animate={{
											rotate: isOpen ? -90 : 0,
											transition: {
												type: "tween",
												duration: 0.15,
												ease: "easeInOut",
											},
										}}
										exit={{
											rotate: isOpen ? -90 : 90,
											opacity: 0,
											transition: {
												type: "tween",
												duration: 0.15,
												ease: "easeInOut",
											},
										}}
									>
										{isOpen ? (
											<HiMinus className="h-5 w-5" />
										) : (
											<HiPlus className="h-5 w-5" />
										)}
									</motion.div>
								)}
							>
								<div className="description bg-default-100 rounded-xl p-4">
									{details}
								</div>
							</AccordionItem>
						</Accordion>
					) : (
						<div className="py-4 px-3">
							<div className="title pb-2">{title}</div>
							<div className="description">{description}</div>
						</div>
					)}
				</Card>
				{buttons.length > 0 && <div className="flex gap-2 mt-3">{buttons}</div>}
			</div>
		</li>
	);
}
