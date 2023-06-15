const express = require("express");
const usuarios = express.Router();
const UsuarioSchema = require("../model/modeloUsuario");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/middleware");
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
     res.status(400).json({ msg: "Rellenar todos los campos" });
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

//VER USUARIOS
usuarios.get("/", verifyToken,async (req, res) => {
  const { _id } = req.headers;
  try {
    const usuario = await UsuarioSchema.findOne({ _id: _id });
    const rolUsuario = usuario.role;
    if(rolUsuario === "Admi"){
    UsuarioSchema.find({})
    .populate({
          path: "_idtypeOfDocument",
          populate: {
            path: "typeOfDocument",
            select: "",
          },
        })
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
    }else{
        UsuarioSchema.find({ _idUser: `${_id}` })
        .then((data) => res.json(data))
        .catch((error) => res.json(error));
    }
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener el usuario" });
  }
});
module.exports = usuarios;
