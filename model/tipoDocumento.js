const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TipoDocumentoSchema = new Schema({
  TipoDocumento: String,
});

module.exports = mongoose.model("tipodocumentos", TipoDocumentoSchema);
