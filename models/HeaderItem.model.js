import mongoose from "mongoose";

const HeaderItem = mongoose.model(
  "HeaderItem",
  new mongoose.Schema({}, { strict: false })
);

export default HeaderItem;
