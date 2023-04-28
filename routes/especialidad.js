const express = require("express");
const especialidad = express.Router();
const especialidadSchema = require("../model/modelEspecialidad");

//CREAR ESPECIALIDAD
especialidad.post("/", async (req, res) => {
  const { specialty } = req.body;
  if (!specialty) return res.json({ msg: "Rellenar todos los campos" });
  try {
    const existedEspecialidad = await especialidadSchema.findOne({
      specialty,
    });
    if (existedEspecialidad)
      return res.json({ msg: "Esta especialidad ya existe" });
    const newEspecialidad = new especialidadSchema({
      specialty,
    });
    await newEspecialidad.save();
    res.status(400).json({ msg: "Especialidad creada correctamente" });
  } catch (error) {
    return res.status(500).json({ msg: "error" });
  }
});

//VER ESPECIALIDADES
especialidad.get("/", async (req, res) => {
  especialidadSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));
});

//VER ESPECIALIDAD POR ID
especialidad.get("/:_id", async (req, res) => {
  const { _id } = req.params;
  especialidadSchema
    .findOne({ _id: _id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));
});

//ELIMINAR ESPECIALIDAD
especialidad.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  especialidadSchema
    .deleteOne({ _id: _id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));
});

module.exports = especialidad;
