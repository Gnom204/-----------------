import mongoose from "mongoose";
import { type } from "os";

const clientSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  fatheName: {
    type: String,
    required: true,
  },
  dateOfBithday: {
    type: String,
    required: true,
  },
  INN: {
    type: String,
    required: true,
  },
  fullNameAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  authorName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Не в работе",
  },
});

export default mongoose.model("Client", clientSchema);
