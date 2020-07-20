const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
    
    listarTarefaId,
    listarTarefas,
    cadastrarTarefa,
    atualizarTarefa,
    removerTarefa,
    concluirTarefa
} = require('./controllers/GerenciadorTarefas.js');

const {finalizarCompra, obterCidadesPorEstado} = require('./controllers/MiniEcommerce')

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
app.post('/gerenciador-tarefas', cadastrarTarefa);
//Atualizar uma tarefa --> put
app.put('/gerenciador-tarefas/:id', atualizarTarefa);
//Remover uma tarefa --> delete
app.delete('/gerenciador-tarefas/:id',removerTarefa);
//Concluir uma tarefa --> put
app.put('/gerenciador-tarefas/:id/concluir', concluirTarefa);

//mini-ecommerce

//Atribuir o status de compra finalizada -> post
app.post('/mini-ecommerce/checkout/finalizar-compra', finalizarCompra);
//Obter cidades de um determinado estado -> get
app.get('/mini-ecommerce/estado/:siglaEstado/cidades',obterCidadesPorEstado);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}.`));