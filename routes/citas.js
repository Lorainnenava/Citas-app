const express = require("express");
const verifyToken = require("../middleware/middleware");
const citas = express.Router();
const CitasSchema = require("../model/modeloCitas");
const UsuarioSchema = require("../model/modeloUsuario");

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
//OBTENER CITA
citas.get("/", verifyToken, async (req, res) => {
  const { _id } = req.headers;

  try {
    const usuario = await UsuarioSchema.findOne({ _id: _id });
    const rolUsuario = usuario.role;
    if (rolUsuario === "Admi") {
      CitasSchema.find({})
        .populate({
          path: "_idUser",
          populate: {
            path: "_idtypeOfDocument",
            select: "typeOfDocument",
          },
        })
        .populate({
          path: "specialty",
          populate: {
            path: "specialty",
            select: "",
          },
        })
        .populate({
          path: "doctor",
          populate: {
            path: "name",
            select: "",
          },
        })
        .exec()
        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          res.json({ msg: error });
        });
    } else {
      CitasSchema.find({ _idUser: `${_id}` })
        .then((data) => res.json(data))
        .catch((error) => res.json({ msg: error }));
    }
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener el usuario" });
  }
});
//aCTUALIZAR ESTADO CITA
citas.put("/state/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  const { _id } = req.headers;
  const { state } = req.body;
  try {
    const usuario = await UsuarioSchema.findOne({ _id: _id });
    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }
    const rolUsuario = usuario.role;
    if (rolUsuario === "Admi") {
      await CitasSchema.updateOne({ _id: id }, { $set: { state } });
      res.json({
        msg: `El estado de la cita se actualizó a ${
          state ? "ACTIVA" : "INACTIVA"
        }`,
      });
    } else {
      res
        .status(403)
        .json({ msg: "No tienes permisos para realizar esta acción" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener el usuario", error });
  }
});
//ELIMINAR CITA
citas.delete("/:id", verifyToken, async (req, res) => {
  const { id } = req.headers;
  CitasSchema.remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));
});

module.exports = citas;
