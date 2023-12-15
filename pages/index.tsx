import { PageProgress } from "./../components/PageProgress";
import type { NextPage } from "next";
import Navbar from "../components/sections/Navigation";
import AboutMe from "../components/sections/AboutMe";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Interests from "../components/sections/Interests";
import Contact from "../components/sections/Contact";
import { motion } from "framer-motion";
import Parallax from "../components/Parallax";
const Home: NextPage = () => {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const displayDate = month + " " + date.getFullYear().toString();
  return (
    // ? This gets rid of the horizontal scrollbar in animations
    <div className="overflow-clip">
      <Navbar />

      <section className="fade-bottom hero relative flex h-[47vh] items-center justify-center ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.5,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 1,
                stiffness: 100,
                damping: 10,
                restSpeed: 0.5,
                delay: 0.5,
                duration: 1,
              },
            },
          }}
        >
          <h1 className="mx-2 mt-48 justify-center text-center font-victormono text-7xl font-bold text-gray-800 ">
            Welcome to my
            <br />
            website!
          </h1>
        </motion.div>
      </section>
      <div className="layer1"></div>

      <Parallax>
        <AboutMe />
      </Parallax>

      <Interests />

      <Experience />
      <section id="Projects">
        <div className="divider"></div>
      </section>
      <Skills />
      <Contact />
      <footer className="footer flex justify-center bg-gray-700 p-4 text-center text-white">
        <p>
          {displayDate} <br /> If you like the monospace font, check out{" "}
          <a
            href="https://github.com/rubjo/victor-mono"
            target="_blank"
            rel="noopener noreferrer"
            className=" underline decoration-blue-500 decoration-2 underline-offset-2 transition-all hover:bg-blue-500"
          >
            Victor Mono
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
