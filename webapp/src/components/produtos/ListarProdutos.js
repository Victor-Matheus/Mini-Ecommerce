import React from 'react';
import img from '../../images/286x180.png';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/Button';

function ListarProdutos () {

    const produtos = [
        {nome : "Negócios", preco: "R$ 99,90"},
        {nome : "ReactJS", preco : "R$ 49,90"},
        {nome : "TDD", preco : "R$ 39,90"},
        {nome : "Curso SOLID", preco : "R$ 46,90"},
        {nome : "Produtividade", preco : "R$ 64,90"},
        {nome : "Design Paterns", preco : "R$ 39,90"},
        {nome : "Start-up", preco : "R$  99,90"},
        {nome : "TypeScript", preco : "R$ 49,90"},
    ];

    function handleComprar (event, produto) {

    }

    const render = () => {
        let key = 1;
        const cards = produtos.map(produto => 

            <Card 
                key={key}
                data-testId={'card' + key++}
                style={{width: '18rem', margin: '10px', float: 'left'}}>
                <Card.Img variant="top" src={img} />
                <Card.Body className="text-center">
                    <Card.Title style={{height: '40px'}}>
                        {produto.nome}
                    </Card.Title>
                    <Card.text>
                        Descrição do produto..
                    </Card.text>
                    <Button variant="success" style={{width: '100%'}} onClick={(event) => handleComprar(event, produto)}>
                        Comprar ({produto.preco})
                    </Button>
                </Card.Body>
            </Card>
        );

        return cards;

    }

    return render();
}

export default ListarProdutos;