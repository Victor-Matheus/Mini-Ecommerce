const cidadesEstados = require('../cidades-estados.json');

const finalizarCompra = (req , res) => {
    console.log(req.body);
    res.send('Compra finalizada com sucesso!')
}

const obterCidadesPorEstado = (req,res) => {
    const siglaEstado = req.params['siglaEstado'].toUpperCase();
    const dadosEstado = cidadesEstados.estados.filter(estado => estado.sigla === siglaEstado);

    if(dadosEstado.length === 0){
        res.status(404).json({erro : `${siglaEstado} não é um estado válido.`});
    }

    res.json(dadosEstado[0].cidades);
}

module.exports = {
    finalizarCompra,
    obterCidadesPorEstado
}