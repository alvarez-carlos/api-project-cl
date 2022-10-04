import { Schema, model } from "mongoose";

const StoresSchema = Schema(
  {
    title: { type: String, required: true, trim: true, unique: true },    
    cellphone: {
      type: Schema.Types.String,
    },
    address: {
      type: Schema.Types.String,
    },
    coordenatesX: {
      type: Schema.Types.String
    },
    coordenatesY: {
      type: Schema.Types.String
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Store", StoresSchema);