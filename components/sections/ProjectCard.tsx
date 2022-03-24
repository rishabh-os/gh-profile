import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";

function ProjectCard(
  link: string,
  img: any,
  title: string,
  description: string
) {
  return (
    <div className="md:max-w-sm">
      <div className="mx-4 my-4 rounded-lg border border-gray-200 bg-white px-2 py-2 shadow-md dark:border-gray-700 dark:bg-gray-800">
        <div className="max-w-60 relative mx-auto w-60 overflow-clip rounded-xl ">
          <Image src={img} layout="responsive"></Image>
        </div>
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
