const finalizarCompra = (req , res) => {
    console.log(req.body);
    res.send('Compra finalizada com sucesso!')
}

module.exports = {
    finalizarCompra
}