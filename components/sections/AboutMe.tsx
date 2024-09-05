import pp from "../../assets/PXL_20220111_082227181.jpg";
import {
	Card,
	CardBody,
	Image,
	CardHeader,
	CardFooter,
} from "@nextui-org/react";
const AboutMe = () => {
	return (
		<div className="mx-auto flex items-center justify-center" id="About Me">
			<Card className="max-w-lg shadow-secondary-300 shadow-xl border-2 border-secondary-200">
				<CardHeader className="pb-0 pt-2 px-4">
					<h2 className="sectionheading">About Me</h2>
				</CardHeader>
				<CardBody>
					<div className="flex items-center justify-center">
						<Image
							className=" h-52 w-52 rounded-full object-cover"
							src={pp.src}
							alt="Profile image"
						/>
					</div>
				</CardBody>
				<CardFooter>
					<p className="txt">
						Hi, my name&apos;s Rishabh Wanjari. I completed my BS-MS at IISER,
						Pune. I currently work at Fondazione Bruno Kessler, Italy.
						<br />
						And no, I&apos;m still not over my college life ending.
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default AboutMe;
