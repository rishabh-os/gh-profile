import sidekickSS from "../../assets/list.png";
import dotfiles from "../../assets/dotfiles.png";
import mimamsa from "../../assets/image10.png";
import website from "../../assets/website.png";
import temtem from "../../assets/temtem_preview.jpg";
import flowchart from "../../assets/flowchart.png";
import ProjectCard from "../ProjectCard";
const Interests = () => {
  return (
    <section id="Interests">
      <h2 className="sectionheading">Interests</h2>
      <div className="txt">
        Although I&apos;m a physics graduate on paper, what I&apos;m truly
        passionate about is anything related to computers and coding. I&apos;m
        very interested in machine learning and AI. I love to develop
        applications for other people.
        <br />I also happen to be a Linux and FOSS enthusiast.
        <div className="font-Pinyon text-3xl tracking-wide">I use Arch BTW</div>
      </div>
      <h3 className="txt ">
        Here are some of my personal projects that I have worked on.
      </h3>
      <div className="flex flex-col flex-wrap items-center justify-center md:flex-row xl:mx-auto xl:max-w-7xl">
        {/* //? The xl: arguments limit the items to 3 columns on larger displays */}
        {ProjectCard(
          <div>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            dicta inventore non provident qui officia sapiente ducimus. Saepe,
            reiciendis ipsam quas incidunt delectus natus nostrum, cum adipisci
            aut ut quo?
          </div>,
          "More Info",
          flowchart,
          "React Flowchart Project",
          "A 3 month freelance project, taken from conceptual idea to execution."
        )}
        {ProjectCard(
          "https://github.com/rishabh-os/dnd_sidekick",
          "GitHub",
          sidekickSS,
          "Sidekick",
          "A DnD companion app made with Flutter"
        )}
        {ProjectCard(
          "https://gist.github.com/rishabh-os/41aed05521d2e207d7208b4159edec6a",
          "Gist",
          mimamsa,
          "Mimamsa Buzzers",
          "An app for handling the final Mains event for Mimamsa, a national level quiz competition for undergraduates"
        )}
        {ProjectCard(
          "https://github.com/rishabh-os/Temdex",
          "GitHub",
          temtem,
          "Temdex",
          "A comprehensive and up-to-date encyclopedia for the game Temtem."
        )}
        {ProjectCard(
          "https://github.com/rishabh-os/gh-profile",
          "GitHub",
          website,
          "This website!",
          "My personal profile on the web, made with React, Next.js and TailwindCSS"
        )}

        {ProjectCard(
          "https://github.com/rishabh-os/Dot-Files",
          "GitHub",
          dotfiles,
          "Dot Files",
          "A collection of all my dot files for the (objectively) best desktop experience"
        )}
      </div>
    </section>
  );
};

export default Interests;
