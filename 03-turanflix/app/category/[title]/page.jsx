import CategoryContainer from "@/components/CategoryContainer";
import {
  getPopularMovies,
  getTopRated,
  getUpcomingMovies,
} from "@/services/movie";

const Category = async ({ params }) => {
  const { title } = params;
  let newTitle = title.split("%")[0];

  let movies = [];

  if (newTitle === "top") {
    newTitle += " rated";
    movies = (await getTopRated(1)).results;
  } else if (newTitle === "popular") {
    movies = (await getPopularMovies(1)).results;
  } else {
    movies = (await getUpcomingMovies(1)).results;
  }
  newTitle += " movies";

  return (
    <>
      <CategoryContainer title={newTitle} movies={movies} />
    </>
  );
};

export default Category;

export const generateMetadata = ({ params }) => {
  const { title } = params;
  let newTitle = title.split("%")[0];
  return {
    title: newTitle.at(0).toUpperCase() + newTitle.slice(1) + " Movies",
    desc: "Movies in the category of " + newTitle + " movies",
  };
};
