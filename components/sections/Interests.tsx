const react = require("../../assets/Moon Warrior title.jpg");
import ProjectCard from "./ProjectCard";
const Interests = () => {
  return (
    <section id="Interests">
      <h2 className="sectionheading">Interests</h2>
      <p className="txt">
        {" "}
        Although I&apos;m a physics graduate on paper, what I&apos;m truly
        passionate about is any related to computers and coding. I&apos;m very
        interested in machine learning and AI. I also love to develop
        applications for other people. <br /> I&apos;m also a Linux and FOSS
        enthusiast. I use Arch BTW &#40;&#58;
      </p>
      <h3 className="txt ">
        Here are some of my personal projects that I have worked on.
      </h3>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center ">
        {ProjectCard(
          "https://github.com/rishabh-os/dnd_sidekick",
          react,
          "Sidekick",
          "A DnD companion app made in Flutter"
        )}
        {ProjectCard(
          "https://github.com/rishabh-os/",
          react,
          "SpeedTimer",
          "A timer for speed solving Rubik's cubes and other twisty puzzles"
          // "A DnD companion app made in Flutter"
        )}
      </div>
    </section>
  );
};

export default Interests;
