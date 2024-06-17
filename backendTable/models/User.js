import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    clients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
