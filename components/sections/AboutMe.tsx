import Image from "next/image";
import pp from "../../assets/PXL_20220111_082227181.jpg";

const AboutMe = () => {
	return (
		<div className="mx-auto flex items-center justify-center">
			<section
				id="About Me"
				className="mx-4 my-2 max-w-lg rounded-3xl border-2 border-slate-700 bg-white px-4 shadow-2xl shadow-teal-400 dark:bg-slate-800"
			>
				<h2 className="sectionheading">About Me</h2>
				<div className="flex items-center justify-center">
					<Image
						className=" inline-block h-52 w-52 rounded-full object-cover text-center"
						src={pp}
						alt="Profile image"
						sizes="(max-width: 768px) 30vw,
              (max-width: 1200px) 30vw,
              30vw"
					/>
				</div>
				<p className="txt">
					Hi, my name&apos;s Rishabh Wanjari. I completed my BS-MS at IISER,
					Pune. I currently work at Fondazione Bruno Kessler, Italy.
					<br />
					And no, I&apos;m still not over my college life ending.
				</p>
			</section>
		</div>
	);
};

export default AboutMe;
