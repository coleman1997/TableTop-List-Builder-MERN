import express from "express";
import { Unit } from "../models/unitModel.js";

const router = express.Router();

//get total cost
router.get("/", async (request, response) => {
  try {
    const totalCost = await Unit.aggregate([
      {
        $group: { _id: null, total: { $sum: "$cost" } },
      },
    ]);
    return response.status(200).json(totalCost);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
