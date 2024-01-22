import express from "express";
import { Unit } from "../models/unitModel.js";

const router = express.Router();

//create new unit
router.post("/", async (request, response) => {
  try {
    if (!request.body.name || !request.body.cost) {
      return response.status(400).send({
        message: "Send all required fields: name, cost",
      });
    }
    const newUnit = {
      name: request.body.name,
      cost: request.body.cost,
      movement: request.body.movement,
      toughness: request.body.toughness,
      wounds: request.body.toughness,
      unitSave: request.body.unitSave,
      unitAbility: request.body.unitAbility,
    };
    const unit = await Unit.create(newUnit);

    return response.status(201).send(unit);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//get all units
router.get("/", async (request, response) => {
  try {
    const units = await Unit.find({});
    return response.status(200).json(units);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Get one unit by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const unit = await Unit.findById(id);
    return response.status(200).json(unit);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//update unit
router.put("/:id", async (request, response) => {
  try {
    if (!request.body.name || !request.body.cost) {
      return response.status(400).send({
        message: "Send all required fields: name, cost",
      });
    }

    const { id } = request.params;
    const result = await Unit.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(400).json({ message: "Unit not found" });
    }

    return response.status(200).send({ message: "Unit updated succesfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//delete unit
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Unit.findByIdAndDelete(id, request.body);

    if (!result) {
      return response.status(400).json({ message: "Unit not found" });
    }

    return response.status(200).send({ message: "Unit deleted succesfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
