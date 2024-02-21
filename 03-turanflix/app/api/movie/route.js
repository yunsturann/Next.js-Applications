import Movie from "@/models/Movie";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { movie, userId } = await req.json();
  if (!movie || !userId) {
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }

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
    //Save movie to database
    await Movie.create({ ...newMovie });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
