import express from "express";
import { List } from "../models/listModel.js";
import { Unit } from "../models/unitModel.js";

const router = express.Router();

//add unit to list
router.post("/", async (request, response) => {
  try {
    if (!request.body.unitProfile) {
      return response.status(400).send({
        message: "Send all required fields: unit",
      });
    }
    const newUnit = {
      unitProfile: request.body.unitProfile,
    };
    const list = await List.create(newUnit);

    return response.status(201).send(list);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//get specific unit
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const unit = await List.findById(id);
    const unitProfile = await Unit.findById(unit.unitProfile);
    return response.status(200).json(unitProfile);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//get all units
router.get("/", async (request, response) => {
    try {
      const list = await List.find({})
        .populate('unitProfile');
      return response.status(200).json(list);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

export default router;
