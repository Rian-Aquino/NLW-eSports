import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Teste" },
    { id: 1, name: "Teste" },
    { id: 1, name: "Teste" },
    { id: 1, name: "Teste" },
  ]);
});

app.listen(3333);
