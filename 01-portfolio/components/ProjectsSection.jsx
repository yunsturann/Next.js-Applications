import { projectsData } from "@/mocks/projectsData";
import Image from "next/image";
import Link from "next/link";

// icons
import { FaCode, FaArrowRight } from "react-icons/fa6";

const ProjectsSection = () => {
  return (
    <section className="py-6 md:py-16">
      <div className="container mx-auto space-y-6 md:space-y-12">
        {/* Section title */}
        <h2 className="section-title">My Projects</h2>
        {/* Section Content*/}

        <div className="flex flex-wrap gap-4  justify-center">
          {/* Projects */}
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="group w-[14rem] h-[20rem]  sm:w-[18rem] sm:h-[24rem]  flex flex-col  justify-between rounded-md  relative overflow-hidden"
            >
              {/* Project Image */}
              <Image
                src={project.img}
                alt={project.title}
                fill
                className=" group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all duration-500 "
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
                      className="p-2 hover:text-gega-melon"
                      target="_blank"
                    >
                      {item.name === "Webpage" ? <FaArrowRight /> : <FaCode />}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
