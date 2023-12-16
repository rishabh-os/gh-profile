import sidekickSS from "../../assets/list.png";
import dotfiles from "../../assets/dotfiles.png";
import mimamsa from "../../assets/image10.png";
import website from "../../assets/website.png";
import temtem from "../../assets/temtem_preview.jpg";
import flowchart from "../../assets/flowchart.png";
import ProjectCard from "../ProjectCard";
import FlowchartDetails from "./FlowchartDetails";
import nowcasting from "../../assets/nowcasting-fbk.png";

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
        <div className="font-pinyon text-3xl tracking-wide">I use Arch BTW</div>
      </div>
      <h3 className="txt">
        Here are some of the projects that I have worked on.
      </h3>
      <div className="flex flex-col flex-wrap items-center justify-center md:flex-row xl:mx-auto xl:max-w-7xl">
        {/* //? The xl: arguments limit the items to 3 columns on larger displays */}
        <ProjectCard
          link="https://nowcasting.fbk.eu/"
          linktext="Website"
          img={nowcasting}
          title="Nowcasting FBK"
          description="A web app to accurately predict the next hour of weather all across Italy."
        />

        <ProjectCard
          link={<FlowchartDetails />}
          linktext="More Info"
          img={flowchart}
          title="React Flowchart Project"
          description="A 3 month freelance project, taken from conceptual idea to execution."
        />
        <ProjectCard
          link="https://github.com/rishabh-os/dnd_sidekick"
          linktext="GitHub"
          img={sidekickSS}
          title="Sidekick"
          description="A DnD companion app made with Flutter"
        />
        <ProjectCard
          link="https://gist.github.com/rishabh-os/41aed05521d2e207d7208b4159edec6a"
          linktext="Gist"
          img={mimamsa}
          title="Mimamsa Buzzers"
          description="An app for handling the final Mains event for Mimamsa, a national level quiz competition for undergraduates"
        />
        <ProjectCard
          link="https://github.com/rishabh-os/Temdex"
          linktext="GitHub"
          img={temtem}
          title="Temdex"
          description="A comprehensive and up-to-date encyclopedia for the game Temtem."
        />
        <ProjectCard
          link="https://github.com/rishabh-os/gh-profile"
          linktext="GitHub"
          img={website}
          title="This website!"
          description="My personal profile on the web, made with React, Next.js and TailwindCSS"
        />

        <ProjectCard
          link="https://github.com/rishabh-os/Dot-Files"
          linktext="GitHub"
          img={dotfiles}
          title="Dot Files"
          description="A collection of all my dot files for the (objectively) best desktop experience"
        />
      </div>
    </section>
  );
};

export default Interests;
