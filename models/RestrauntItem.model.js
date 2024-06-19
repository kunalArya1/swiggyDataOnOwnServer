import mongoose from "mongoose";

const RestrauntItem = mongoose.model(
  "RestrauntItem",
  new mongoose.Schema({}, { strict: false })
);

export default RestrauntItem;
