import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  fullName: string;
  username: string;
  password: string;
  active: boolean;
  createdAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Check if the model is already compiled
export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
