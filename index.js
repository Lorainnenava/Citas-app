const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8900;
const usuarios = require("./routes/usuario");
const citas = require("./routes/citas");
const documento = require("./routes/documento");
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use("/usuario", usuarios);
app.use("/citas", citas);
app.use("/documento", documento);

app.get("/", function (req, res) {
  res.json("Bienvenido");
});

//CONEXION
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});

module.exports = app;
