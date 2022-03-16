const react = require("../assets/Moon Warrior title.jpg");
import ProjectCard from "./ProjectCard";
const Interests = () => {
  return (
    <section id="Interests">
      <h2 className="sectionheading">Interests</h2>
      <p className="txt"> Some of my interests</p>
      <h3 className="txt ">Here are some of my personal passion projects</h3>
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
