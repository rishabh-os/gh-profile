import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";

function ProjectCard(
  link: string,
  linktext: string,
  img: any,
  title: string,
  description: string
) {
  return (
    <div className="max-w-sm">
      <div className="mx-4 my-4 rounded-lg border border-gray-200 bg-white px-2 py-2 shadow-md dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto h-auto max-h-60 w-80 overflow-clip rounded-xl ">
          <Image src={img} layout="responsive" alt="Project Picture"></Image>
        </div>
        <div className="p-5">
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h4>

          <p className="mb-3 h-20 max-w-fit overflow-hidden font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {linktext} <HiArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
