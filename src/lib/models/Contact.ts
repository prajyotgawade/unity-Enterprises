import mongoose, { Schema, models, model } from "mongoose";

export interface IContact extends mongoose.Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  status: "new" | "in-progress" | "resolved";
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    subject: {
      type: String,
      default: "General Inquiry",
      trim: true
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      minlength: [10, "Message must be at least 10 characters"]
    },
    status: {
      type: String,
      enum: ["new", "in-progress", "resolved"],
      default: "new"
    }
  },
  { timestamps: true }
);

export default models.Contact || model<IContact>("Contact", ContactSchema);
