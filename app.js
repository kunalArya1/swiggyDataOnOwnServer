import express from "express";
import connect from "./config/db.connection.js";
import cors from "cors";
import dotenv from "dotenv";
import ResRouter from "./routes/Restraunt.route.js";

dotenv.config({ path: ".env" });

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.use(express.json());

// Routes
app.use("/", ResRouter);

/**
 *
 

app.post("/store", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    await GenericModel.create(data);
    res.status(201).send("Data stored successfully");
  } catch (error) {
    res.status(500).send("Error storing data");
  }
});

app.post("/store/resData", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    await RestrauntItem.create(data);
    res.status(201).send("Data stored successfully");
  } catch (error) {
    res.status(500).send("Error storing data");
  }
});

app.post("/store/resMenu", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    await RestrauntMenu.create(data);
    res.status(201).send("Data stored successfully");
  } catch (error) {
    res.status(500).send("Error storing data");
  }
});
 */
connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });
