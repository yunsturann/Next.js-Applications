import CategoryContainer from "@/components/CategoryContainer";
import { getWithGenre } from "@/services/movie";

const Genre = async ({ params, searchParams }) => {
  const { id } = params;
  const { genre } = searchParams;

  const { results } = await getWithGenre(id);

  return (
    <>
      <CategoryContainer title={genre} movies={results} />
    </>
  );
};

export default Genre;
