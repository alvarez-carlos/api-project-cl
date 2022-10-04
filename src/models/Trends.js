import { Schema, model } from "mongoose";

const TrendsSchema = Schema(
  {
    title: { type: String, required: true, trim: true, unique: true },
    description: {
      type: String,
      trim: true,
    },
    link: {
      type: Schema.Types.String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Trend", TrendsSchema);