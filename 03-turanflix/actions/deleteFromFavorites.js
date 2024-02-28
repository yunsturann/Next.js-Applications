"use server";

import connectToDb from "@/lib/database";
import Movie from "@/models/Movie";

export const deleteFromFavorites = async (prevState, formData) => {
  const { movieId } = Object.fromEntries(formData);

  try {
    await connectToDb();
    await Movie.findByIdAndDelete(movieId);
    return { success: true }; // revalidatePath already returns a promise
  } catch (error) {
    return { error: "Failed to remove movie from favorites" };
  }
};
