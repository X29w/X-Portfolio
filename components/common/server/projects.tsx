import { PROJECTS } from "@/constant/config";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const Projects: FC<unknown> = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          <Link
            key={project.link}
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={1000}
              className="w-full object-contain"
            />

            <div className="relative p-4">
              <h1 className="text-2xl font-semibold text-white">
                {project.title}
              </h1>
              <p className="mt-2 text-gray-300">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
