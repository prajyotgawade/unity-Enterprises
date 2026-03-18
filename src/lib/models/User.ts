import mongoose, { Schema, models, model } from "mongoose";

export interface IUser extends mongoose.Document {
  name?: string;
  email: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    lastLoginAt: { type: Date },
  },
  { timestamps: true }
);

export default models.User || model<IUser>("User", UserSchema);


