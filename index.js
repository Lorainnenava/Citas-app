const express = require("express");
const app = express();
const port = 8900;
require("dotenv").config();

app.get("/", function (req, res) {
  res.json("holis");
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
