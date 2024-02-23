"use server";

import connectToDb from "@/lib/database";
import Movie from "@/models/Movie";
import { revalidatePath } from "next/cache";

export const deleteFromFavorites = async (prevState, formData) => {
  const movieId = formData.get("movieId");

  try {
    await connectToDb();
    await Movie.findByIdAndDelete(movieId);
    revalidatePath("/profile");
    return { success: "Movie removed from favorites" };
  } catch (error) {
    return { error: "Failed to remove movie from favorites" };
  }
};
