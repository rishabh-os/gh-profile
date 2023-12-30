import React, { useEffect } from "react";
import { HiArrowRight, HiDocumentText, HiChartSquareBar } from "react-icons/hi";
const Experience = () => {
  // TODO Add Deloitte experience
  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-explist");
          }
          // ? Use this part if you want to redo the animation each time instead of only once
          // else {
          //   entry.target.classList.remove("animate-explist");
          // }
        });
      });
      const expElements = document.querySelectorAll(".animated");
      expElements.forEach((el) => observer.observe(el));
    }
  });

  function ExpInfo(
    time: string,
    title: string,
    description: string,
    buttons: Array<React.ReactNode> = []
  ) {
    return (
      <li className="explist" key={title}>
        <div className="topdiv"></div>
        <div className="animated">
          <time className="time">{time}</time>
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          {buttons}
        </div>
      </li>
    );
  }

  return (
    <div className="mx-auto max-w-[38rem]">
      <section id="Work Experience">
        <div className="h-fit flex-col content-center items-center justify-center md:flex">
          <h2 className="sectionheading sm:mx-0">Work Experience</h2>
          <ol className="line">
            {[
              ExpInfo(
                "September 2023 - Current",
                "Data Scientist, Fondazione Bruno Kessler, Italy",
                "Working with large scale state of the art deep learning models for analyzing time series data to enable precise predictions."
              ),
              ExpInfo(
                "June 2022 - June 2023",
                "Associate Solution Advisor, Deloitte, India",
                "Engaged in thorough analysis and validation of financial models for banks. Conducted assessments, used statistical methods, and collaborated with teams to improve accuracy and performance."
              ),
            ]}
          </ol>
        </div>
      </section>
      <section id="Experience">
        <div className="h-fit flex-col content-center items-center justify-center md:flex">
          <h2 className="sectionheading">Project Experience</h2>
          <ol className="line">
            {[
              ExpInfo(
                "June 2021 - May 2022",
                "Anomaly Detection in CCTV Footage, under Aniruddha Pant, AlgoAnalytics, Pune",
                "An advanced system using unsupervised anomaly and outlier detection techniques was developed to enhance security for customers through real-time reporting of incidents.",
                [
                  <a
                    href="/output_print.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    key="ThesisLink"
                    className="exp-button"
                  >
                    <HiDocumentText className="mr-2 h-5 w-5" />
                    Thesis
                    <HiArrowRight className="ml-2" />
                  </a>,
                  <a
                    href="https://thesis-presentation.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    key="PresentationLink"
                    className="exp-button"
                  >
                    <HiChartSquareBar className="mr-2 h-5 w-5" />
                    Defense Presentation
                    <HiArrowRight className="ml-2" />
                  </a>,
                ]
              ),
              ExpInfo(
                "August 2020 - May 2021",
                "Analysis of Gravitational Wave Data using Machine Learning, under Anupreeta More, IUCAA, Pune",
                "LIGO data was analyzed using unsupervised machine learning algorithms to identify and classify diverse signals, utilizing bicoherence maps as input data"
              ),
              ExpInfo(
                "December 2019 - June 2020",
                "Applicaitions of Machine Learning in quantum Information, under T. S. Mahesh, IISER, Pune",
                "A multi-qubit system was simulated to gain greater insight into the practical value of quantum discord and other quantum correlations, utilizing a Restricted Boltzmann machine."
              ),
              ExpInfo(
                "December 2018",
                "Stellar Signal Analysis, under C. V. Dharmadhikari, IISER, Pune",
                "Worked on setting up and eliminating noise from antennas to record radiation from the night sky, using a Lecher Wire as the basis."
              ),
              ExpInfo(
                "May 2018 - July 2018",
                "N-Body Simulations and Analysis, under Najam Hassan, University of Osmania, Hyderabad",
                "Stellar interaction modeling in clusters was performed through simulations using Python and Fortran with Sverre Aarseth's highly regarded n-body simulation programs."
              ),
            ]}
          </ol>
        </div>
      </section>
      <section id="Education">
        <div className="h-fit flex-col content-center items-center justify-center md:flex">
          <h2 className="sectionheading sm:mx-0">Education</h2>
          <ol className="line">
            {ExpInfo(
              "August 2017 - May 2022",
              "BS-MS Dual Degree in Physics, IISER, Pune",
              "There isn't much to say academically here, so instead I'll just say a few words about the experiences I've had at IISER. I'm extremely grateful to all my friends for the best 5 years of my life. IISER was an unforgettable adventure, and one that I will cherish for the rest of my life."
            )}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Experience;
