import React from "react";
import HeroSection from "@/components/heroSection/HeroSection";
import MoviesSection from "@/components/MoviesSection";
import {
  getPopularMovies,
  getTopRated,
  getUpcomingMovies,
} from "@/services/movie";

const Home = async () => {
  // const { results: topRatedMovies } = await getTopRated(1);
  // const { results: popularMovies } = await getPopularMovies(1);
  // const { results: upcomingMovies } = await getUpcomingMovies(1);

  //! parallel data fetching is more efficent
  //.allSettled is another option to wait for all promises to resolve also, it will return all promises whether they are resolved or rejected
  const [topRatedPromise, popularPromise, upcomingPromise] = await Promise.all([
    getTopRated(1),
    getPopularMovies(1),
    getUpcomingMovies(1),
  ]);

  const { results: topRatedMovies } = topRatedPromise;
  const { results: popularMovies } = popularPromise;
  const { results: upcomingMovies } = upcomingPromise;

  const populars = Array.from(popularMovies);

  topRatedMovies.splice(6);
  popularMovies.splice(6);
  upcomingMovies.splice(6);

  return (
    <main className="h-full">
      <HeroSection movies={populars} />

      <div className="bg-gray-900 text-white py-12 sm:py-16 space-y-12 ">
        <MoviesSection
          title={"top rated"}
          showAll={false}
          movies={topRatedMovies}
        />
        <MoviesSection
          title={"popular movies"}
          showAll={false}
          movies={popularMovies}
        />
        <MoviesSection
          title={"upcoming movies"}
          showAll={false}
          movies={upcomingMovies}
        />
      </div>
    </main>
  );
};

export default Home;
