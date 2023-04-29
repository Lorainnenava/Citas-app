const express = require("express");
const verifyToken = require("../middleware/middleware");
const citas = express.Router();
const CitasSchema = require("../model/modeloCitas");

//CREAR CITA
citas.post("/", verifyToken, async (req, res) => {
  const cita = CitasSchema(req.body);
  if (!cita.date || !cita.doctor || !cita.specialty)
    res.json({ msg: "Rellene todos los campos" });
  try {
    const newCita = await CitasSchema({
      _idUser: cita._idUser,
      doctor: cita.doctor,
      specialty: cita.specialty,
      date: cita.date,
    });
    await newCita.save();
    res.json({ msg: "Cita creada con exito" });
  } catch (error) {
    res.status(500).json({ msg: "error" });
  }
});

//MOSTRAR CITAS
citas.get("/", verifyToken, async (req, res) => {
  const { _id } = req.headers;
  CitasSchema.find({ _idUser: `${_id}` })
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));
});

//ELIMINAR CITA
citas.delete("/:id", verifyToken, async (req, res) => {
  const { id } = req.headers;
  CitasSchema.remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));
});

module.exports = citas;
