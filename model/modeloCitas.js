const mongoose = require("mongoose");
const usuario = require("./modeloUsuario");
const Schema = mongoose.Schema;
const doctor = require("./modelDoctor");
const specialty = require("./modelEspecialidad");

const CitasSchema = new Schema({
  _idUser: { type: Schema.ObjectId, ref: usuario },
  date: Date,
  doctor: { type: Schema.ObjectId, ref: doctor },
  specialty: { type: Schema.ObjectId, ref: specialty },
  state: { type: Boolean, default: false },
});

module.exports = mongoose.model("citas", CitasSchema);
