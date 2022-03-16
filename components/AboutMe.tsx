import Image from "next/image";
const pp = require("../assets/PXL_20220111_082227181.jpg");
const AboutMe = () => {
  return (
    <section id="AboutMe" className="">
      <h2 className="sectionheading">About Me</h2>
      <div className="flex items-center justify-center">
        <Image
          className=" inline-block h-6 w-6 rounded-full object-cover text-center ring-2 ring-white"
          src={pp}
          alt="Profile image"
          height={144}
          width={144}
        />
      </div>
      <p className="txt">
        Hi, my name&apos;s Rishabh Wanjari. I&apos;m a 5th year student at
        IISER, Pune.
      </p>
    </section>
  );
};

export default AboutMe;
