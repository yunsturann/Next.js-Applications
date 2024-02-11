import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import Genres from "./Genres";

const HeroSection = ({ movie }) => {
  return (
    <section className="h-screen relative flex justify-center items-end">
      {/*Image & Overlay */}
      <Image
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt="bg-image-hero"
        fill
        className="-z-20 object-cover"
      />
      {/*bottom overlay gradient */}
      <div className="absolute bottom-0 -z-10 h-2/3 w-full bg-gradient-to-t from-black to-transparent"></div>
      {/*Content */}
      <div className="container text-white space-y-4 h-1/2 flex flex-col justify-between mb-16">
        {/*About Movie */}
        <div className="space-y-6">
          <h1 className="text-4xlxl md:text-5xl lg:text-7xl font-bold md:w-2/3 mb-4">
            {movie?.title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl md:w-2/3 font-semibold line-clamp-2">
            {movie?.overview}
          </p>
          {/*Buttons*/}
          <div className="flex flex-wrap items-stretch gap-6 text-lg md:text-xl lg:text-2xl font-semibold ">
            <Link
              href={"/movies/" + movie.id + "?watch=true"}
              className="py-3 px-12 md:px-24 bg-white hover:bg-gray-300 rounded-full text-neutral-800 tracking-wider flex items-center  transition duration-300"
            >
              Play
            </Link>
            <button
              type="button"
              className="border-2 rounded-full h-14 w-14 lg:h-16 lg:w-16 flex justify-center items-center text-white hover:text-rose-500 hover:border-red-400 transition duration-300 "
            >
              <FaHeart />
            </button>
          </div>
        </div>
        {/*genres / categories */}
        <Genres />
      </div>
    </section>
  );
};

export default HeroSection;
