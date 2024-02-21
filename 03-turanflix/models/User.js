import { Schema, models, model } from "mongoose";
import { movieSchema } from "./Movie";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: [true, "Email already exists"],
    },
    username: {
      type: String,
      required: [true, "Please provide a username"],
    },
    image: {
      type: String,
    },
    // favorites:[movieSchema], daha verimli olurdu fakat populate etmek için bu şekilde kullanmadım. zaten kaç kişi kullancak
  },
  { timestamps: true }
);

export default models.User || model("User", UserSchema);
