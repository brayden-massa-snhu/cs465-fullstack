const mongoose = require("mongoose");
const Trip = require("../models/travlr");
const Model = mongoose.model("trips");

// GET trips
const getTrips = async (req, res) => {
  const q = await Model.find({}).exec();
  console.log(q);
  if (!q) {
    return res.status(404).json({ error: "Error getting trips" });
  } else {
    return res.status(200).json(q);
  }
};

const getTripByCode = async (req, res) => {
  const q = await Model.find({ code: req.params.tripCode }).exec();
  if (!q) {
    return res.status(404).json(err);
  } else {
    return res.status(200).json(q);
  }
};

const addTrip = async (req, res) => {
  const { code, name, length, start, resort, perPerson, image, description } =
    req.body;
  const newTrip = new Trip({
    code,
    name,
    length,
    start,
    resort,
    perPerson,
    image,
    description,
  });
  const q = await newTrip.save();
  if (!q) {
    return res.status(400).json(err);
  } else {
    return res.status(201).json(q);
  }
};

const updateTrip = async (req, res) => {
  const { code, name, length, start, resort, perPerson, image, description } =
    req.body;
  const q = await Model.findOneAndUpdate(
    { code: req.params.tripCode },
    {
      code,
      name,
      length,
      start,
      resort,
      perPerson,
      image,
      description,
    }
  ).exec();
  if (!q) {
    return res.status(400).json(err);
  } else {
    return res.status(201).json(q);
  }
};

module.exports = { getTrips, getTripByCode, addTrip, updateTrip };
