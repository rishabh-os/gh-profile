import Image from "next/image";
const pp = require("../../assets/PXL_20220111_082227181.jpg");

const AboutMe = () => {
  const img_size = 200;
  return (
    <section
      id="AboutMe"
      className="mx-auto my-2 max-w-lg rounded-3xl border-2 border-slate-700 shadow-2xl shadow-teal-400"
    >
      <h2 className="sectionheading">About Me</h2>
      <div className="flex items-center justify-center">
        <Image
          className=" inline-block h-10 w-10 rounded-full object-cover text-center"
          src={pp}
          alt="Profile image"
          height={img_size}
          width={img_size}
        />
      </div>
      <p className="txt">
        Hi, my name&apos;s Rishabh Wanjari. I&apos;m currently a 5th year
        student at IISER, Pune.
      </p>
    </section>
  );
};

export default AboutMe;
