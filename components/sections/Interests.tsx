const sidekickSS = require("../../assets/list.png");
const dotfiles = require("../../assets/dotfiles.png");
const mimamsa = require("../../assets/image10.png");
const website = require("../../assets/website.png");
import ProjectCard from "../ProjectCard";
const Interests = () => {
  return (
    <section id="Interests">
      <h2 className="sectionheading">Interests</h2>
      <p className="txt">
        Although I&apos;m a physics graduate on paper, what I&apos;m truly
        passionate about is anything related to computers and coding. I&apos;m
        very interested in machine learning and AI. I love to develop
        applications for other people.
        <br />
        I also happen to be a Linux and FOSS enthusiast.
        <br />
      </p>
      <h3 className="txt ">
        Here are some of my personal projects that I have worked on.
      </h3>
      <div className="flex flex-col flex-wrap items-center justify-center md:flex-row ">
        {ProjectCard(
          "https://github.com/rishabh-os/dnd_sidekick",
          "GitHub",
          sidekickSS,
          "Sidekick",
          "A DnD companion app made in Flutter"
        )}
        {ProjectCard(
          "https://github.com/rishabh-os/Dot-Files",
          "GitHub",
          dotfiles,
          "Dot Files",
          "A collection of all my dot files for the (objectively) best desktop experience"
        )}
        {ProjectCard(
          "https://gist.github.com/rishabh-os/41aed05521d2e207d7208b4159edec6a",
          "Gist",
          mimamsa,
          "Mimamsa Buzzers",
          "An app for handling the final Mains event for Mimamsa, a national level quiz competition for undergraduates"
        )}
        {ProjectCard(
          "https://github.com/rishabh-os/gh-profile",
          "GitHub",
          website,
          "This website!",
          "My personal profile on the web, made with React, Next.js and TailwindCSS"
        )}
      </div>
    </section>
  );
};

export default Interests;
