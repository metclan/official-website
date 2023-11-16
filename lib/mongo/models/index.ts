import { timeStamp } from "console";
import { Schema, model } from "mongoose";
const serviceSchema = new Schema(
  {
    titile: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);
export const Service = model("Service", serviceSchema);
