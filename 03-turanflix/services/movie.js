export const API_URL = "https://api.themoviedb.org/3";

export const getGenres = async () => {
  try {
    const res = await fetch(
      `${API_URL}/genre/movie/list?language=en&api_key=${process.env.API_KEY}`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getTopRated = async (page) => {
  try {
    const res = await fetch(
      `${API_URL}/movie/top_rated?language=en-US&api_key=${process.env.API_KEY}&page=${page}`
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getPopularMovies = async (page) => {
  try {
    const res = await fetch(
      `${API_URL}/movie/popular?language=en-US&api_key=${process.env.API_KEY}&page=${page}`
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getUpcomingMovies = async (page) => {
  try {
    const res = await fetch(
      `${API_URL}/movie/upcoming?language=en-US&api_key=${process.env.API_KEY}&page=${page}`
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getSignleMovie = async (movieId) => {
  try {
    const res = await fetch(
      `${API_URL}/movie/${movieId}?language=en-US&api_key=${process.env.API_KEY}`
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async (movieId) => {
  try {
    const res = await fetch(
      `${API_URL}/movie/${movieId}/reviews?language=en-US&api_key=${process.env.API_KEY}`
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getWithGenre = async (genreId) => {
  try {
    const res = await fetch(
      `${API_URL}/discover/movie?api_key=${process.env.API_KEY}&language=en-US&with_genres=${genreId}&page=1`
    );
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
