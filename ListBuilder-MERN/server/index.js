import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Unit } from "./models/unitModel.js";
import unitRoute from "./routes/unitRoute.js";
import unitTotalRoute from "./routes/unitTotalRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

//defualt cors
app.use(cors());

// cors;
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.use("/units", unitRoute);
app.use("/total", unitTotalRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
