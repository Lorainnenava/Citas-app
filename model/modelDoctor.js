const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const especialidadSchema = require("./modelEspecialidad");

const doctorSchema = new Schema({
  name: String,
  specialty: { type: Schema.ObjectId, ref: especialidadSchema },
});

module.exports = mongoose.model("doctors", doctorSchema);
