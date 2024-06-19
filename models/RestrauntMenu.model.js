import mongoose from "mongoose";

const RestrauntMenu = mongoose.model(
  "RestrauntMenu",
  new mongoose.Schema({}, { strict: false })
);

export default RestrauntMenu;
