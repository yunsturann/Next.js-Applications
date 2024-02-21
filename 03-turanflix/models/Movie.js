import mongoose, { Schema } from "mongoose";

export const movieSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    genre_ids: {
      type: [Number],
    },
    poster_path: {
      type: String,
    },
    title: {
      type: String,
    },
    vote_average: {
      type: Number,
    },
    release_date: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

export default Movie;
