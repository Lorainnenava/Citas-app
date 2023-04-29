const express = require("express");
const documento = express.Router();
const TipoDocumentoSchema = require("../model/modelTipoDocumento");

//CREAR TIPO DE DOCUMENTO
documento.post("/", async (req, res) => {
  const { typeOfDocument } = req.body;
  if (!typeOfDocument) {
    return res.status(400).json({ msg: "Ingrese algun valor" });
  }
  try {
    const existed = await TipoDocumentoSchema.findOne({
      typeOfDocument,
    });
    if (existed)
      return res.status(409).json({ msg: "ya existe este tipo de documento" });
    const newDocumento = new TipoDocumentoSchema({
      typeOfDocument,
    });
    await newDocumento.save();
    res.json({ msg: "documento creado con exito" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error" });
  }
});

//VER TIPO DE DOCUMENTO
documento.get("/", async (req, res) => {
  TipoDocumentoSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));
});

//VER TIPO DE DOCUMENTO POR ID
documento.get("/:_id", async (req, res) => {
  const { _id } = req.params;
  TipoDocumentoSchema.findOne({ _id: _id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));
});

//ELIMINAR DOCUMENTO
documento.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  TipoDocumentoSchema.deleteOne({ _id: _id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));
});

module.exports = documento;
