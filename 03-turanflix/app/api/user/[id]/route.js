import connectToDb from "@/lib/database";
import Movie from "@/models/Movie";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id: userId } = params;

  try {
    await connectToDb();
    const movies = await Movie.find({ userId });

    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
