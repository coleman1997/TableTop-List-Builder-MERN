import mongoose from "mongoose";

const listSchema = mongoose.Schema({
  unitProfile: { type: mongoose.Schema.Types.ObjectId, ref: "Unit" },
});

export const List = mongoose.model("List", listSchema);
