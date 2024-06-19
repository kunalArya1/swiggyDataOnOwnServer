import HeaderItem from "../models/HeaderItem.model.js";
import RestrauntItem from "../models/RestrauntItem.model.js";
import RestrauntMenu from "../models/RestrauntMenu.model.js";

export const serverHealth = (req, res) => {
  res.status(200).json({
    success: true,
    messsage: "Server is up and Running",
  });
};

export const headerItem = async (req, res) => {
  try {
    const headerItem = await HeaderItem.find();
    res.status(200).json({
      message: "Header Item Data fetched Successfully",
      headerItem,
    });
  } catch (error) {
    res.status(500).send("Error storing data");
  }
};

export const RestutantItem = async (req, res) => {
  try {
    const resData = await RestrauntItem.find();
    res.status(200).json({
      message: "Restraunt Item Fetched Successfully",
      resData,
    });
  } catch (error) {
    res.status(500).send("Error storing data");
  }
};

export const restrauntMenu = async (req, res) => {
  try {
    const resMenu = await RestrauntMenu.find().limit(2);
    res.status(200).json({
      message: "Restraunt Menu Item Fetched Successfully",
      resMenu,
    });
  } catch (error) {
    res.status(500).send("Error storing data");
  }
};

export const RestrauntMenuDetails = async (req, res) => {
  try {
    const r_id = req.params.resid;
    const resMenuDetails = await RestrauntMenu.find({ resid: `${r_id}` });
    res.status(200).json({
      message: "Restraunt Menu Item Details Fetched Successfully",
      resMenuDetails,
    });
  } catch (error) {
    res.status(500).send("Error storing data");
  }
};
