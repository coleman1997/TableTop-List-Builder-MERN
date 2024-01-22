import mongoose from "mongoose";

const unitSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    movement: {
      type: Number,
      required: true,
    },
    toughness: {
      type: Number,
      required: true,
    },
    wounds: {
      type: Number,
      required: true,
    },
    unitSave: {
      type: String,
      required: true,
    },
    unitAbility: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Unit = mongoose.model("Unit", unitSchema);
