const express = require("express");
const doctor = express.Router();
const doctorSchema = require("../model/modelDoctor");

//CREAR DOCTORES
doctor.post("/", async (req, res) => {
  const doctors = doctorSchema(req.body);
  if (!doctors.name || !doctors.specialty)
    return res.json({ msg: "Rellenar todos los campos" });
  try {
    const existedDoctor = await doctorSchema.findOne({ name: doctors.name });
    if (existedDoctor)
      return res.status(404).json({ msg: "Este doctor ya existe" });
    const newDoctor = new doctorSchema({
      name: doctors.name,
      specialty: doctors.specialty,
    });
    await newDoctor.save();
    res.json({ msg: "Doctor creado con exito" });
  } catch (error) {
    return res.status(500).json({ msg: "error" });
  }
});

//VER DOCTORES
doctor.get("/", async (req, res) => {
  doctorSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));
});

//VER DOCTORES POR SU ID
doctor.get("/:_id", async (req, res) => {
  const { _id } = req.params;
  doctorSchema
    .findOne({ _id: _id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));
});

module.exports = doctor;
