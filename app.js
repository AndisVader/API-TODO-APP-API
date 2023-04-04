import { Console } from "console";
import express from "express";
const app = express ();
const port = 3000;

app.get ('/', (req, res) => 
    res.send('<h1>Rota ativada com GET e recurtso Página principal: Valores de página principal devem ser retornadads </h1>')
)

app.get('/tarefas', (req, res) =>
res.send ('Rota ativada com GET e recurso Tarefas: Valores de Tarefas devem ser retornados')
);

app.get('/pessoas', (req, res) =>
res.send('Rota ativada com GET e recurso Pessoas: Valores de Pessoas devem ser retornados')
);

app.get('/diasdasemana', (req,res) =>
res.send('Rota ativada com GET e recurso Dias da Semana: Valores de Dia da Semana devem ser retornados')
);

app.listen (`${port}`, () =>
console.log(`Servidor inciado na porta ${port}`)
);
