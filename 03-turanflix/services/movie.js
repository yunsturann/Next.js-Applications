export const API_URL = "https://api.themoviedb.org/3";

export const getGenres = async () => {
  try {
    const res = await fetch(
      `${API_URL}/genre/movie/list?language=en&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { cache: "force-cache" } // default
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getTopRated = async (page) => {
  try {
    const res = await fetch(
      `${API_URL}/movie/top_rated?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`,
      { next: { revalidate: 3600 } } // revalidate every 1 hour
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getPopularMovies = async (page) => {
  try {
    const res = await fetch(
      `${API_URL}/movie/popular?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`,
      { next: { revalidate: 3600 } } // revalidate every 1 hour
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getUpcomingMovies = async (page) => {
  try {
    const res = await fetch(
      `${API_URL}/movie/upcoming?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`,
      { next: { revalidate: 3600 } } // revalidate every 1 hour
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getSignleMovie = async (movieId) => {
  try {
    const res = await fetch(
      `${API_URL}/movie/${movieId}?language=en-US&api_key=${process.env.API_KEY}&append_to_response=videos`,
      { next: { revalidate: 3600 } } // revalidate every 1 hour
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async (movieId) => {
  try {
    const res = await fetch(
      `${API_URL}/movie/${movieId}/reviews?language=en-US&api_key=${process.env.API_KEY}`,
      { next: { revalidate: 3600 } } // revalidate every 1 hour
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getWithGenre = async (genreId, page = 1) => {
  try {
    const res = await fetch(
      `${API_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&with_genres=${genreId}&page=${page}`,
      { next: { revalidate: 3600 } }
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getSearchResults = async (searchTerm) => {
  try {
    if (!searchTerm) return;

    const res = await fetch(
      `${API_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchTerm}&language=en-US`
    );

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
