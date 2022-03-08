import type { NextPage } from "next";
import { useState } from "react";
import Navbar from "../components/navbar";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <section id="hero" className="flex h-[70vh] items-center justify-center">
        <h1 className="mx-2 justify-center text-center font-sans text-7xl font-bold text-gray-800 dark:text-gray-100">
          Welcome to my
          <br />
          website!
        </h1>
      </section>
      <AboutMe />
      <Interests />
      <Experience />
      <section id="Projects">
        <div className="divider"></div>
      </section>
      <Skills />
      <footer className="footer flex justify-center bg-gray-700 p-4 text-white">
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Home;
