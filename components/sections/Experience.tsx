"use client";
import { useEffect } from "react";
import { HiArrowRight, HiDocumentText, HiChartSquareBar } from "react-icons/hi";
import { ExpInfo } from "../ExpInfo";
import { Button, Link } from "@nextui-org/react";
const Experience = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			const observer = new IntersectionObserver((entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate-explist");
					}
				}
			});
			const expElements = document.querySelectorAll(".animated");
			for (const el of expElements) {
				observer.observe(el);
			}
		}
	});

	return (
		<div className="mx-auto max-w-2xl">
			<section id="Experience">
				<div className="h-fit flex-col content-center items-center justify-center md:flex">
					<h2 className="sectionheading sm:mx-0">Experience</h2>
					<p className="txt -mt-8">
						Wherever you see a plus icon, click to expand the tile and learn
						more!
					</p>
					<h3 className="subsectionheading sm:mx-0">Work</h3>
					<ol className="line">
						<ExpInfo
							time="September 2023 - Current"
							title="Data Scientist, Fondazione Bruno Kessler, Italy"
							description="Working with large scale state of the art deep learning models for analyzing spatio-temporal data to enable precise predictions."
							details="I'm working on it!"
						/>
						<ExpInfo
							time="June 2022 - June 2023"
							title="Associate Solution Advisor, Deloitte, India"
							description="Engaged in thorough analysis and validation of financial models for banks. Conducted assessments, used statistical methods, and collaborated with teams to improve accuracy and performance."
							details="Confidentiality agreements forbid me from going into more detail. Suffice to say, the clients we worked with were large MNCs that greatly benefited from the work we did together."
						/>
					</ol>
				</div>
				<div className="h-fit flex-col content-center items-center justify-center md:flex">
					<h2 className="subsectionheading">Projects</h2>
					<ol className="line">
						<ExpInfo
							time="June 2021 - May 2022"
							title="Anomaly Detection in CCTV Footage, under Aniruddha Pant, AlgoAnalytics, Pune"
							description="An advanced system using unsupervised anomaly and outlier detection techniques was developed to enhance security for customers through real-time reporting of incidents."
							details="I've included a link to my final presentation as well as my entire thesis. What more detail do you want?"
							buttons={[
								<Button
									as={Link}
									isExternal
									href="/output_print.pdf"
									key="ThesisLink"
									variant="ghost"
									className="font-medium m-1"
								>
									<HiDocumentText className="mr-2 h-5 w-5" />
									Thesis
									<HiArrowRight className="ml-2" />
								</Button>,
								<Button
									as={Link}
									isExternal
									href="https://thesis-presentation.vercel.app"
									key="PresentationLink"
									variant="ghost"
									className="font-medium m-1"
								>
									<HiChartSquareBar className="mr-2 h-5 w-5" />
									Defense Presentation
									<HiArrowRight className="ml-2" />
								</Button>,
							]}
						/>

						<ExpInfo
							time="August 2020 - May 2021"
							title="Analysis of Gravitational Wave Data using Machine Learning, under Anupreeta More, IUCAA, Pune"
							description="LIGO data was analyzed using unsupervised machine learning algorithms to identify and classify diverse signals, utilizing bicoherence maps as input data."
							details="In total, the dataset consisted of around 40,000 images of size 576x576. We employed a miriad of techniques to analyse this data. We tried PCA and t-SNE for dimensionality reduction. K-Means, DBSCAN, and OPTICS were used to cluster the data before moving on to a deep learning approach that utilized convolutional autoencoders."
						/>
						<ExpInfo
							time="December 2019 - June 2020"
							title="Applicaitions of Machine Learning in Quantum Information, under T. S. Mahesh, IISER, Pune"
							description="A multi-qubit system was simulated to gain greater insight into the practical value of quantum discord and other quantum correlations, utilizing a Restricted Boltzmann machine."
							details="RBMs excel at learning probability distributions. This behaviour is exactly what we needed to test and validate the results we obtained from real qubit systems in the lab. The results from this model could then be used to scale up the number of qubits simulated much further than possible in the lab, overcoming physical and economical limitations."
						/>
						<ExpInfo
							time="December 2018"
							title="Stellar Signal Analysis, under C. V. Dharmadhikari, IISER, Pune"
							description="Worked on setting up and eliminating noise from antennas to record radiation from the night sky, using a Lecher Wire as the basis."
						/>
						<ExpInfo
							time="May 2018 - July 2018"
							title="N-Body Simulations and Analysis, under Najam Hassan, University of Osmania, Hyderabad"
							description="Stellar interaction modeling in clusters was performed through simulations using Python and Fortran with Sverre Aarseth's highly regarded n-body simulation programs."
							details="Stellar dynamics, especially in clusters, can be quite intricate. These interactions were modelled in highly performant Fortran code. The results were exported and analysed using a more modern approach in Python. A heavy focus was placed on building this entire pipeline."
						/>
					</ol>
				</div>
			</section>
			<section id="Education">
				<div className="h-fit flex-col content-center items-center justify-center md:flex">
					<h2 className="subsectionheading sm:mx-0">Education</h2>
					<ol className="line">
						{
							<ExpInfo
								time="August 2017 - May 2022"
								title="BS-MS Dual Degree in Physics, IISER, Pune"
								description="There isn't much to say academically here, so instead I'll just say a few words about the experiences I've had at IISER. I'm extremely grateful to all my friends for the best 5 years of my life. IISER was an unforgettable adventure, and one that I will cherish for the rest of my life."
							/>
						}
					</ol>
				</div>
			</section>
		</div>
	);
};

export default Experience;
