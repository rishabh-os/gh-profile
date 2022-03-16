import type { NextPage } from "next";
import { useState } from "react";
import Navbar from "../components/navbar";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import Head from "next/head";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rishabh&apos;s Profile</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" /> */}
        <meta name="msapplication-TileColor" content="#23a6d5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      <section className=" hero flex h-[70vh] items-center justify-center">
        <h1 className="mx-2 justify-center text-center text-7xl font-bold text-gray-800 dark:text-gray-100">
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
      <Contact />
      <footer className="footer flex justify-center bg-gray-700 p-4 text-white">
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Home;
