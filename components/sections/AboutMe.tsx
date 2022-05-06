import Image from "next/image";
const pp = require("../../assets/PXL_20220111_082227181.jpg");

const AboutMe = () => {
  const img_size = 200;
  return (
    <div className="mx-auto flex items-center justify-center">
      <section
        id="AboutMe"
        className="mx-4 my-2 max-w-lg rounded-3xl border-2 border-slate-700 bg-white px-4 shadow-2xl shadow-teal-400 dark:bg-gray-800"
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
    </div>
  );
};

export default AboutMe;
