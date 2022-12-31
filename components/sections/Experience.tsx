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
      <li className="explist">
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
      <section id="Experience">
        <div className="h-fit flex-col content-center items-center justify-center md:flex">
          <h2 className="sectionheading">Experience</h2>
          <ol className="line">
            {[
              ExpInfo(
                "June 2021 - May 2022",
                "Anomaly Detection in CCTV Footage, under Aniruddha Pant, AlgoAnalytics, Pune",
                "Utilizing unsupervised anomaly and outlier detection techniques to develop an automated system that reports incidents in real-time to bolster security for customers.",
                [
                  <a
                    href="/output_print.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    key="ThesisLink"
                    className="mr-2 mt-2 inline-flex items-center rounded-lg border border-gray-200 py-2 px-4 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                  >
                    <HiDocumentText className="mr-2 h-5 w-5" /> Thesis{" "}
                    <HiArrowRight className="ml-2" />
                  </a>,
                  <a
                    href="https://thesis-presentation.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    key="PresentationLink"
                    className="mr-2 mt-2 inline-flex items-center rounded-lg border border-gray-200 py-2 px-4 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                  >
                    <HiChartSquareBar className="mr-2 h-5 w-5" />
                    Defense Presentation <HiArrowRight className="ml-2" />
                  </a>,
                ]
              ),
              ExpInfo(
                "August 2020 - May 2021",
                "Analysis of Gravitational Wave Data using Machine Learning, under Anupreeta More, IUCAA, Pune",
                "Using unsupervised machine learning algorithms to identify and classify different types of signals in LIGO data using bicoherence maps of the signals as the input."
              ),
              ExpInfo(
                "December 2019 - June 2020",
                "Applicaitions of Machine Learning in quantum Information, under T. S. Mahesh, IISER, Pune",
                "Simulation of multi-qubit systems to better understand the usefulness of quantum discord and other quantum correlations, using a Restricted Boltzmann Machine network."
              ),
              ExpInfo(
                "December 2018",
                "Stellar Signal Analysis, under C. V. Dharmadhikari, IISER, Pune",
                "Worked on setting up and eliminating noise from antennas to record radiation from the night sky. This was done by using the Lecher Wire as a basis."
              ),
              ExpInfo(
                "May 2018 - July 2018",
                "N-Body Simulations and Analysis, under Najam Hassan, University of Osmania",
                "Simulations were performed using Python and Fortran with Sverre Aarseth's n-body simulation programs to model stellar interactions in clusters."
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
