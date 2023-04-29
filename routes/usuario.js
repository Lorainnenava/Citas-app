const express = require("express");
const usuarios = express.Router();
const UsuarioSchema = require("../model/modeloUsuario");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//CREAR USUARIO
usuarios.post("/", async (req, res) => {
  const usuario = req.body;
  if (
    !usuario.name ||
    !usuario.lastName ||
    !usuario.typeOfDocument ||
    !usuario.identification ||
    !usuario.mobileNumber ||
    !usuario.password ||
    !usuario.email
  )
     res.status(400).json({ msg: "Rellenar todos los campos" });
  try {
    const exitedUser = await UsuarioSchema.findOne({ email: usuario.email });
    if (exitedUser)
      return res
        .status(404)
        .json({ msg: "Ya existe un correo con este nombre" });
    const newUser = new UsuarioSchema({
      name: usuario.name,
      lastName: usuario.lastName,
      typeOfDocument: usuario.typeOfDocument,
      identification: usuario.identification,
      mobileNumber: usuario.mobileNumber,
      email: usuario.email,
      password: await UsuarioSchema.encryptPassword(usuario.password),
    });
    await newUser.save();
    res.json({ msg: "usuario creado con éxito" });
  } catch (error) {
    res.status(500).json({ msg: "ha ocurrido un error" });
  }
});

// LOGEAR USUARIO

usuarios.patch("/", async (req, res) => {
  const { body } = req;
  const { email, password } = body;
  if (!email || !password) return res.json({ msg: "Rellene los campos" });
  try {
    const user = await UsuarioSchema.findOne({
      email: email,
    });
    if (!user) return res.status(404).json({ msg: "usuario no encontrado" });
    const passwordCorrect = await UsuarioSchema.comparePassword(
      req.body.password,
      user.password
    );
    if (!passwordCorrect | !user)
      return res
        .status(404)
        .json({ token: null, msg: "Usuario no encontrado" });
    const token = jwt.sign({ user }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60,
    });
    return res.json({ user, msg: "Iniciaste sesión", token });
  } catch (error) {
    return res.json({ msg: error });
  }
});

module.exports = usuarios;
