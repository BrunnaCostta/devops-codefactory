const express = require("express");

const app = express();

app.use(express.json());

const tarefas = [
  {
    id: 1,
    titulo: "Configurar projeto DevOps",
    concluida: false,
  },
];

app.get("/", (req, res) => {
  res.json({
    mensagem: "CodeFactory DevOps API funcionando",
  });
});

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

app.post("/tarefas", (req, res) => {
  const novaTarefa = {
    id: tarefas.length + 1,
    titulo: req.body.titulo,
    concluida: false,
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});
