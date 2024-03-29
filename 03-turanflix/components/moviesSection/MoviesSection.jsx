import MovieCard from "@/components/moviesSection/MovieCard";
import Link from "next/link";
import React from "react";

const MoviesSection = ({ title, movies, showAll }) => {
  return (
    <section className="container space-y-4 sm:space-y-6">
      {/*header of the section */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl sm:text-3xl font-semibold  tracking-wider uppercase">
          {title}
        </h2>
        {!showAll && (
          <Link
            href={`/category/${title}`}
            className="text-lg hover:text-red-400 hover:underline underline-offset-8 transition duration-300"
          >
            View all
          </Link>
        )}
      </div>
      {/*Movie cards container*/}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-x-4 gap-y-8">
        {movies.map((movie, index) => {
          // to set animation delay
          let indexTime = index % 20;

          return (
            <MovieCard
              key={index}
              movie={movie}
              prefetch={showAll ? false : true}
              index={indexTime}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MoviesSection;
