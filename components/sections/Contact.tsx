"use client";
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import { SocialIcon } from "react-social-icons";
import { IoSend } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	return (
		<section id="Contact" className="h-fit">
			<h2 className="sectionheading">Contact Details</h2>
			<p className="txt -my-5">
				Here are some links to my accounts across the Internet:
			</p>
			<p className="prose mx-auto px-4 py-4 dark:prose-invert" />
			<div className="flex items-center justify-center space-x-4">
				<div className="rounded-full border-2 bg-white">
					<SocialIcon
						url="https://github.com/rishabh-os"
						target="_blank"
						rel="noopener noreferrer"
					/>
				</div>
				<div className="rounded-full border-2 bg-white">
					<SocialIcon
						url="https://www.linkedin.com/in/rishabh-wanjari/"
						target="_blank"
						rel="noopener noreferrer"
					/>
				</div>
			</div>
			<p className="txt">
				If you don&apos;t prefer the above links, feel free to contact me via
				email!
				<div className="flex items-center justify-center">
					<Card className="w-fit animated-gradient m-4 underline decoration-2 font-bold">
						<CardBody>rishabhwanjari1@gmail.com</CardBody>
					</Card>
				</div>
			</p>
		</section>
	);
};

export default Contact;
