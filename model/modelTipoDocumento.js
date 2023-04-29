const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TipoDocumentoSchema = new Schema({
  typeOfDocument: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("tipodocumentos", TipoDocumentoSchema);
