const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const TipoDocumentoSchema = require("./tipoDocumento");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  typeOfDocument: { type: Schema.ObjectId, ref: TipoDocumentoSchema },
  identification: { type: Number, required: true },
  mobileNumber: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

UsuarioSchema.statics.encryptPassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
UsuarioSchema.statics.comparePassword = async (password, passwordReceived) => {
  return await bcrypt.compare(password, passwordReceived);
};
module.exports = mongoose.model("usuarios", UsuarioSchema);
