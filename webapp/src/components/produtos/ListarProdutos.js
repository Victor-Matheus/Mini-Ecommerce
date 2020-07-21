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

    const render = () => {
        <Card 
            style={{width = '18rem', margin = '10px', float = 'left'}}>
            <Card.Img variant="top" src={img} />
        </Card>


    }

    return render();
}

export default ListarProdutos;