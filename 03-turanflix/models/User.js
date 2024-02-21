import { Schema, models, model } from "mongoose";

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
  },
  { timestamps: true }
);

export default models.User || model("User", UserSchema);
