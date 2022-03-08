import Image from "next/image";
const pp = require("../assets/PXL_20210925_185308234.jpg");
const AboutMe = () => {
  return (
    <section id="AboutMe" className="h-fit text-center">
      <h2 className="sectionheading">About Me</h2>
      <Image
        className="mr-2 inline h-16 w-16 rounded-full object-cover"
        src={pp}
        alt="Profile image"
        height={144}
        width={144}
      />
      <p className="prose mx-auto py-4 px-4 dark:prose-invert">
        Hi, my name&apos;s Rishabh Wanjari. I&apos;m a Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Unde eligendi porro ab vel quos
        reiciendis, odit debitis ex? Placeat eligendi voluptas quidem fugit, aut
        nobis animi sed iste id reiciendis.
      </p>
    </section>
  );
};

export default AboutMe;
