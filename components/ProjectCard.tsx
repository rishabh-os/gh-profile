import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";

function ProjectCard(
  link: string,
  img: any,
  title: string,
  description: string
) {
  return (
    <div className=" md:flex md:h-[670px] md:max-w-sm">
      <div className="mx-4 my-4 rounded-lg border border-gray-200 bg-white px-2 py-2 shadow-md dark:border-gray-700 dark:bg-gray-800">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            className="inline-block h-10 w-10 scale-150 object-cover text-center ring-2 ring-white transition-all hover:scale-100"
            src={img}
            alt="Profile image"
            layout="intrinsic"
          />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            GitHub <HiArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
