import React from "react";
import Image from "next/image";
import allGenres from "@/contants/genres";
import Link from "next/link";
import { MotionDiv } from "./MotionDiv";
import HeartBrokenButton from "./ui/HeartBrokenButton";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const MovieCard = ({ movie, prefetch = true, index }) => {
  // to set genre name
  let genreName = "";
  // api has lots of movies so that we need to check if the movie has a genre_id or not
  // less error prone
  if (movie.genre_ids.length !== 0) {
    // this condition is to check if the movie has a genre.
    // if the movie has a genre
    const genre = allGenres.genres.find(
      (genre) => genre.id === movie.genre_ids[0]
    );
    genreName = genre.name;
  }

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.2,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="flex flex-col justify-between space-y-2 hover:scale-105 transition-transform duration-300"
    >
      <article className="group space-y-2 h-full relative flex flex-col justify-start ">
        <Link
          href={`/movies/${movie.id}`}
          style={{ display: "contents" }}
          prefetch={prefetch}
          className="space-y-3 cursor-pointer"
        >
          {/*Image */}
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="movie-img"
              height={380}
              width={300}
              className="rounded-xl md:min-h-[350px] "
            />
          ) : (
            <Image
              src={"/images/404.jpg"}
              alt="movie-img"
              height={380}
              width={300}
              className="rounded-xl object-cover h-full md:min-h-[350px]"
            />
          )}

          {/*About movie*/}
          <div className="space-y-1 ">
            <div className="flex justify-between items-start gap-2 ">
              <h3 className="text-lg font-semibold leading-6 line-clamp-2">
                {movie.title}
              </h3>
              <p className="bg-amber-800 px-1 py-0.5 rounded-md ">
                {movie.vote_average.toFixed(1)}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-2 text-gray-400">
              <p className="group-hover:text-red-500 hover:text-white">
                {genreName}
              </p>
              &diams;
              <p>{movie.release_date.slice(0, 4)}</p>
            </div>
          </div>
        </Link>
      </article>
      {/* movie._id means user is in the profile page, so that show the button */}
      {movie._id && <HeartBrokenButton movieId={movie._id} />}
    </MotionDiv>
  );
};

export default MovieCard;
