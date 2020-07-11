const uuidv4 = require('uuid/v4');

let tarefas = [
    {
        id : '1',
        nome : 'Pesquisar',
        concluida : true
    },
    {
        id : '2',
        nome : 'Estudar padrões',
        concluida : false,
    },
    {
        id : '3',
        nome : 'Atualizar agenda',
        concluida : false,
    },
    {
        id : '4',
        nome : 'Ministrar aulas',
        concluida : true,
    }
];

//listagem de tarefa em função de um ID.
const listarTarefaId = (req , res) => { 
    //recebe ID do usuário.
    const id = req.params.id;
    //interação com o array 'tarefas' (representando um DB) para validação do ID recebido do usuário. 
    const tarefa = tarefas.filter(tarefa => tarefa.id === id);
    //tratamento para casos de ID inválidos ou tarefas inexistentes.
    tarefa.length === 0 ? res.status(404).json({erro : 'tarefa não encontrada'})
        : res.json(tarefa[0]);
}

const listarTarefas = (req , res) => {
    
    //escolha de páginação. Caso não haja uma escolha, o default é 1.
    const pagina = req.query['pag'] || 1;
    //ordem de ascendência ou descendência. O default é não ter asc ou desc.
    const ordem = req.query['ordem']; //asc, desc 
    //filtro de tarefas. O default é não possuir filtro.
    const filtroTarefa = req.query['filtro-tarefa'];
    //quantidade de intens por página. O default são 3.
    const itensPorPagina = req.query['itens-por-pagina'] || 3;
    //faz uma cópia do array de tarefas para futuras manipulações.
    let retornaTarefas = tarefas.slice(0);

    /////////////////////////////////////////////////////////////////

    //filtrar
        if(filtroTarefa){
            //retorna true caso 0 ou false caso diferente.
            retornaTarefas=retornaTarefas.filter(
                t => t.nome.toLowerCase().indexOf(filtroTarefa.toLowerCase()) === 0);
        }
    //ordenar
        //ordenamento segundo a tabela Unicode.
        if(ordem === 'ASC'){
            //caso 1, a ordem será de 'a' é maior que 'b'.
            retornaTarefas.sort((t1, t2) => (t1.nome.toLowerCase() < t2.nome.toLowerCase()) ? 1 : -1)
        }else if(ordem === "DESC"){
            //caso -1,  a ordem será de 'b' é maior que 'a'.
            retornaTarefas.sort((t1, t2) => (t1.nome.toLowerCase() > t2.nome.toLowerCase()) ? 1 : -1)
        }
    //retornar
    
    res.json({
        totalItens : retornaTarefas.length,
        tarefas : retornaTarefas.slice(0).splice((pagina-1) * itensPorPagina, itensPorPagina),
        pagina : pagina
    })
}


module.exports = {
    listarTarefaId,
    listarTarefas
}