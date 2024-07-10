"use client";
import { Button, Input } from "@nextui-org/react";
import { type FormEvent, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { ToastContainer, toast } from "react-toastify";
import { IoSend } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const emailSuccess = () =>
		toast.success("Message sent successfully!", {
			position: "bottom-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
	const emailError = () =>
		toast.error(
			"Something went wrong. Please check your internet connection. If all else fails, open an issue on GitHub.",
			{
				position: "bottom-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			},
		);
	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		const endpoint: string = process.env.NEXT_PUBLIC_EMAIL_API ?? "";
		const body = JSON.stringify({
			senderEmail: email,
			message: message,
		});
		const requestOptions = {
			method: "POST",
			body,
		};
		console.log(endpoint);

		const res = await fetch(endpoint, requestOptions)
			.then((response) => {
				if (!response.ok) throw new Error("Error in fetch");
				return response.json();
			})
			.then((response) => {
				console.log("Email sent successfully!");
				emailSuccess();
				setEmail("");
				setMessage("");
			})
			.catch((error) => {
				console.log(error);
				emailError();
			});
	};
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
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
				If you don&apos;t prefer the above links, feel free to contact me
				through the form below!
			</p>

			<div className="flex flex-col gap-3 space-y-4 max-w-xl mx-auto pb-4">
				<Input
					style={{
						all: "inherit",
					}}
					labelPlacement="outside"
					size="lg"
					type="email"
					errorMessage="Please enter a valid email"
					label="Email"
					value={email}
					onValueChange={setEmail}
				/>
				<Input
					style={{
						all: "inherit",
					}}
					labelPlacement="outside"
					size="lg"
					label="Message"
					value={message}
					onValueChange={setMessage}
				/>
				<Button
					className="mx-auto bg-gradient-to-tr from-primary to-secondary"
					type="submit"
					onClick={(e) => handleSubmit(e)}
					endContent={
						<IoSend className="group-hover:animate-pulse transition-all" />
					}
				>
					Send
				</Button>
			</div>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</section>
	);
};

export default Contact;
