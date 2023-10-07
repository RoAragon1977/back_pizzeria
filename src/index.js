import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo</h1>");
});

app.listen(2500, () => {
  console.log("Escuchando el puerto 2500");
});