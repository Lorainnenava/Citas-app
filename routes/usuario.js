const express = require("express");
const usuarios = express.Router();
const UsuarioSchema = require("../model/modeloUsuario");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//CREAR USUARIO
usuarios.post("/", async (req, res) => {
  const usuario = UsuarioSchema(req.body);
  if (
    !usuario.name ||
    !usuario._idtypeOfDocument ||
    !usuario.identification ||
    !usuario.mobileNumber ||
    !usuario.password ||
    !usuario.email ||
    !usuario.role
  )
    return res.status(400).json({ msg: "Rellenar todos los campos" });
  try {
    const exitedUser = await UsuarioSchema.findOne({ email: usuario.email });
    if (exitedUser)
      return res
        .status(404)
        .json({ msg: "Ya existe un correo con este nombre" });
    const newUser = new UsuarioSchema({
      name: usuario.name,
      _idtypeOfDocument: usuario._idtypeOfDocument,
      identification: usuario.identification,
      mobileNumber: usuario.mobileNumber,
      email: usuario.email,
      role: usuario.role,
      password: await UsuarioSchema.encryptPassword(usuario.password),
    });
    await newUser.save();
    res.json({ msg: "usuario creado con exito" });
  } catch (error) {
    res.status(500).json({ msg: "ha ocurrido un error" });
  }
});

// LOGEAR USUARIO

usuarios.patch("/", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) res.json({ msg: "Rellene los campos" });
  try {
    const user = await UsuarioSchema.findOne({
      email: email,
    });
    if (!user) return res.status(404).json({ msg: "usuario no encontrado" });
    const passwordCorrect = await UsuarioSchema.comparePassword(
      req.body.password,
      user.password
    );
    if (!passwordCorrect)
      res.status(404).json({ token: null, msg: "contraseña incorrecta" });
    const token = jwt.sign({ user }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60,
    });
    res.json({ user, msg: "Iniciastes sesion", token });
  } catch (error) {
    console.log(error);
    res.json({ msg: error });
  }
});

//VER USUARIOS
usuarios.get("/", async (req, res) => {
  UsuarioSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});
module.exports = usuarios;
