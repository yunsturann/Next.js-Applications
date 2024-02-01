import { API_URL } from "@/services/movie";
import SlickCarousel from "./SlickCarousel";

const getGenres = async () => {
  try {
    const res = await fetch(
      `${API_URL}/genre/movie/list?language=en&api_key=${process.env.API_KEY}`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const Genres = async () => {
  const { genres } = await getGenres();

  return (
    <section>
      {/*Slick slider */}
      <SlickCarousel genres={genres} />
    </section>
  );
};

export default Genres;
