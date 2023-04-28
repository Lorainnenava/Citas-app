const express = require("express");
const documento = express.Router();
const TipoDocumentoSchema = require("../model/tipoDocumento");

//CREAR TIPO DE DOCUMENTO
documento.post("/", async (req, res) => {
  const { TipoDocumento } = req.body;
  if (!TipoDocumento) return res.json({ msg: "Ingrese algun valor" });
  try {
    const existed = await TipoDocumentoSchema.findOne({ TipoDocumento });
    if (existed) return res.json({ msg: "ya existe este tipo de documento" });
    const newDocumento = new TipoDocumentoSchema({
      TipoDocumento,
    });
    await newDocumento.save();
    res.json({ msg: "documento creado con exito" });
  } catch (error) {
    res.status(500).json({ msg: "error" });
  }
});

//VER TIPO DE DOCUMENTO
documento.get("/", async (req, res) => {
  TipoDocumentoSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));
});
//VER TIPO DE DOCUMENTO
documento.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  TipoDocumentoSchema.deleteOne({ _id: _id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));
});

module.exports = documento;
