"use client";
import { projectsData } from "@/mocks/projectsData";
import Image from "next/image";
import Link from "next/link";

// icons
import { FaCode, FaArrowRight } from "react-icons/fa6";

const ProjectsSection = ({ viewAll = false }) => {
  const filteredData = viewAll ? projectsData : projectsData.slice(0, 6);

  return (
    <section className="py-6 md:py-16">
      <div className="container mx-auto space-y-6 md:space-y-12">
        {/* Section title */}
        <h2 className="section-title">My Projects</h2>

        {/* Section Content*/}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Projects */}
          {filteredData.map((project, index) => (
            <Link
              key={index}
              href={project.links[0].url}
              target="_blank"
              className="group w-[14rem] h-[20rem] sm:w-[18rem] sm:h-[24rem] flex flex-col justify-between rounded-md relative overflow-hidden shadow-md shadow-gray-200"
            >
              {/* Project Image */}
              <Image
                src={project.img}
                alt={project.title}
                width={384}
                height={288}
                placeholder="blur"
                className="h-full group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all duration-500 "
              />
              {/* Project bottom overlay*/}
              <div className="absolute bottom-0  w-full h-3/4 bg-gradient-to-t from-black to-transparent"></div>
              {/* Project Info */}
              <div className="absolute bottom-4 left-4 w-full text-gega-white text-lg">
                {/* Project Title */}
                <h3 className="text-2xl font-bold group-hover:text-gega-melon group-hover:mb-2  transition-all duration-500">
                  {project.title}
                </h3>
                {/* Project Description */}
                <p className="w-3/4 opacity-0  group-hover:opacity-100  group-hover:mb-2  transition-all duration-500  ">
                  {project.description}
                </p>
                {/* Project Links*/}
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 group-hover:mb-2  transition-all duration-500">
                  {project.links.map((item, index) => (
                    <Link
                      key={index}
                      href={item.url}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 hover:text-gega-melon"
                      target="_blank"
                      aria-label={project.title + " " + item.name}
                    >
                      {item.name === "Webpage" ? <FaArrowRight /> : <FaCode />}
                    </Link>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Show More */}
        {!viewAll && (
          <div className="flex justify-center">
            <Link
              href={"/projects"}
              className="my_button bg-gray-950 hover:bg-gray-800 text-white"
            >
              Show More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
