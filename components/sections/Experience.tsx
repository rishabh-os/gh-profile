import { HiArrowRight, HiDocumentText, HiChartSquareBar } from "react-icons/hi";
const Experience = () => {
  return (
    <div className="mx-auto max-w-[38rem]">
      <section id="Experience">
        <div className="h-fit flex-col content-center items-center justify-center md:flex">
          <h2 className="sectionheading">Experience</h2>
          <ol className="line">
            <li className="explist">
              <div className="topdiv"></div>
              <time className="time">June 2021 - May 2022</time>
              <h3 className="title">
                Anomaly Detection in CCTV Footage, under Aniruddha Pant,
                AlgoAnalytics, Pune
              </h3>
              <p className="description">
                Utilizing unsupervised anomaly and outlier detection techniques
                to develop an automated system that reports incidents in
                real-time to bolster security for customers.
              </p>
              <a
                href="/output_print.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 mt-2 inline-flex items-center rounded-lg border border-gray-200 py-2 px-4 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-400"
              >
                <HiDocumentText className="mr-2 h-5 w-5" /> Thesis{" "}
                <HiArrowRight className="ml-2" />
              </a>
              <a
                href="https://thesis-presentation.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 mt-2 inline-flex items-center rounded-lg border border-gray-200 py-2 px-4 text-sm text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-400"
              >
                <HiChartSquareBar className="mr-2 h-5 w-5" />
                Defense Presentation <HiArrowRight className="ml-2" />
              </a>
            </li>
            <li className="explist">
              <div className="topdiv"></div>
              <time className="time">August 2020 - May 2021</time>
              <h3 className="title">
                Analysis of Gravitational Wave Data using Machine Learning,
                under Anupreeta More, IUCAA, Pune
              </h3>
              <p className="description">
                Using unsupervised machine learning algorithms to identify and
                classify different types of signals in LIGO data using
                bicoherence maps of the signals as the input.
              </p>
            </li>
            <li className="explist">
              <div className="topdiv"></div>
              <time className="time">December 2019 - June 2020</time>
              <h3 className="title">
                Applicaitions of Machine Learning in quantum Information, under
                T. S. Mahesh, IISER, Pune
              </h3>
              <p className="description">
                Simulation of multi-qubit systems to better understand the
                usefulness of quantum discord and other quantum correlations,
                using a Restricted Boltzmann Machine network.
              </p>
            </li>
            <li className="explist">
              <div className="topdiv"></div>
              <time className="time">December 2018</time>
              <h3 className="title">
                Stellar Signal Analysis, under C. V. Dharmadhikari, IISER, Pune
              </h3>
              <p className="description">
                Worked on setting up and eliminating noise from antennas to
                record radiation from the night sky. This was done by using the
                Lecher Wire as a basis.
              </p>
            </li>
            <li className="explist">
              <div className="topdiv"></div>
              <time className="time">May 2018 - July 2018</time>
              <h3 className="title">
                N-Body Simulations and Analysis, under Najam Hassan, University
                of Osmania
              </h3>
              <p className="description">
                Simulations were performed using Python and Fortran with Sverre
                Aarseth&apos;s n-body simulation programs to model stellar
                interactions in clusters.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section id="Education">
        <div className="h-fit flex-col content-center items-center justify-center md:flex">
          <h2 className="sectionheading sm:mx-0">Education</h2>
          <ol className="line">
            <li className="explist">
              <div className="topdiv"></div>
              <time className="time">AUGUST 2017 - May 2022</time>
              <h3 className="title">
                BS-MS Dual Degree in Physics, IISER, Pune
              </h3>
              <p className="description">
                There isn&apos;t much to say academically here, so instead
                I&apos;ll just say a few words about the experiences I&apos;ve
                had at IISER. I&apos;m extremely grateful to all my friends for
                the best 5 years of my life. IISER was an unforgettable
                adventure, and one that I will cherish for the rest of my life.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Experience;
