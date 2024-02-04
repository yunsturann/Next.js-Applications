import React from "react";
import HeroSection from "./(components)/HeroSection";
import MoviesSection from "../components/MoviesSection";
import {
  getPopularMovies,
  getTopRated,
  getUpcomingMovies,
} from "@/services/movie";

const Home = async () => {
  const { results: topRatedMovies } = await getTopRated(1);
  const { results: popularMovies } = await getPopularMovies(1);
  const { results: upcomingMovies } = await getUpcomingMovies(1);

  // const randomIndex = Math.floor(Math.random() * popularMovies.length);
  // console.log(popularMovies[randomIndex]);

  topRatedMovies.splice(6);
  popularMovies.splice(6);
  upcomingMovies.splice(6);

  return (
    <main className="h-full">
      <HeroSection movie={popularMovies[1]} />

      <div className="bg-gray-950 text-white py-12 sm:py-16 space-y-12 ">
        <MoviesSection
          title={"Top Rated"}
          showAll={false}
          movies={topRatedMovies}
        />
        <MoviesSection
          title={"Popular Movies"}
          showAll={false}
          movies={popularMovies}
        />
        <MoviesSection
          title={"Upcoming Movies"}
          showAll={false}
          movies={upcomingMovies}
        />
      </div>
    </main>
  );
};

export default Home;
