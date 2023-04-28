const mongoose = require("mongoose");
const usuario = require("./modeloUsuario");
const Schema = mongoose.Schema;

const CitasSchema = new Schema({
  _idUsuario: { type: Schema.ObjectId, ref: usuario },
  fecha: Date,
  doctor: String,
  especialidad: String,
  estado: { type: Boolean, default: false },
});
module.exports = mongoose.model("citas", CitasSchema);
