import Movie from "@/models/Movie";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { movie, userId } = await req.json();

  if (movie.genres) {
    movie.genre_ids = movie.genres.map((genre) => genre.id);
  }

  const newMovie = {
    id: movie.id,
    genre_ids: movie.genre_ids,
    poster_path: movie.poster_path,
    title: movie.title,
    vote_average: movie.vote_average,
    release_date: movie.release_date,
    userId,
  };

  try {
    //Check if movie already exists
    const existingMovie = await Movie.findOne({ id: movie.id, userId });
    if (existingMovie)
      return NextResponse.json(
        { success: false, message: "Movie already exists" },
        { status: 400 }
      );
    // Create new movie if it doesn't exist
    await Movie.create({ ...newMovie });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
