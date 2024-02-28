import Image from "next/image";
import Link from "next/link";
import HeartButton from "@/components/ui/HeartButton";

const HeroItem = ({ movie, index }) => {
  return (
    <article className="h-full flex items-end justify-end relative">
      {/*Image & Overlay */}
      <Image
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt="bg-image-hero"
        fill
        className="-z-20 object-cover"
        priority={index < 2 ? true : false}
      />
      {/*bottom overlay gradient */}
      <div className="absolute bottom-0 -z-10 h-2/3 w-full bg-gradient-to-t from-black to-transparent"></div>
      {/*Content */}
      <div className="container text-white space-y-4 h-1/2 flex flex-col justify-center ">
        {/*About Movie */}
        <div className="space-y-6">
          <h2 className="heading_one md:w-2/3 mb-4">{movie?.title}</h2>
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
            <HeartButton movie={movie} classes={"h-14 w-14 lg:h-16 lg:w-16"} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default HeroItem;
