const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const especialidadSchema = new Schema({
  specialty: String,
});
module.exports = mongoose.model("especialidades", especialidadSchema);
