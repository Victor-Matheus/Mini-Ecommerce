const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
    
    listarTarefaId,
    listarTarefas
} = require('./controllers/GerenciadorTarefas.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

//GET, PUT, POST, DELETE

const naoImplementado = (req , res ) => {
    res.status(501).json({erro : 'não implememtado.'})
}
       
//Listar todas as tarefas --> get
app.get('/gerenciador-tarefas', listarTarefas);
//Listar uma tarefa por ID --> get
app.get('/gerenciador-tarefas/:id', listarTarefaId);
//Cadastrar uma tarefa --> post
app.post('/gerenciador-tarefas', naoImplementado);
//Atualizar uma tarefa --> put
app.put('/gerenciador-tarefas/:id', naoImplementado);
//Remover uma tarefa --> delete
app.delete('/gerenciador-tarefas/:id',naoImplementado);
//Concluir uma tarefa --> put
app.put('/gerenciador-tarefas/:id/concluir', naoImplementado);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}.`));