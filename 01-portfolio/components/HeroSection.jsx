import Link from "next/link";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const HeroSection = ({ params }) => {
  return (
    <section className="group h-[32rem] md:h-[36rem] lg:h-screen bg-black">
      {/*Hero Container*/}
      <div className="container h-full mx-auto flex justify-center items-center relative">
        {/*Hero Content*/}
        <div className="text-gega-grey text-center space-y-2 lg:space-y-4 cursor-default">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-widest font-bold ">
            {params.title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl tracking-wider font-semibold uppercase ">
            {params.subtitle}
          </p>
        </div>
        {/*Bottom Links */}
        <div className="absolute bottom-10 left-10 flex space-x-8 text-gega-grey opacity-0 group-hover:opacity-100  transition duration-1000">
          {/* Github */}
          <Link
            target="_blank"
            href="https://github.com/yunsturann"
            className="flex items-center space-x-2 lg:space-x-3 lg:text-xl uppercase"
            aria-label="github"
          >
            <p className=" hover:text-gega-melon tracking-wide">github</p>
            <div className="w-5 h-5 lg:w-8 lg:h-8 flex justify-center items-center bg-gega-red rounded-full">
              <FaGithubAlt />
            </div>
          </Link>
          {/* LinkedIn */}
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/yunus-turan-bb256a1b6/"
            className="flex items-center space-x-2 lg:space-x-3 lg:text-xl uppercase"
            aria-label="linkedin"
          >
            <p className=" hover:text-gega-melon tracking-wide">linkedin</p>
            <div className="w-5 h-5 lg:w-8 lg:h-8 flex justify-center items-center bg-gega-red rounded-full">
              <FaLinkedinIn />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
