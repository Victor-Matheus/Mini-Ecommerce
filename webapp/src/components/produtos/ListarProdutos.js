import React from 'react';
import img from '../../images/286x180.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from  'prop-types';

function ListarProdutos (props) {

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

    const [addProduto, setAddProduto] = React.useState({});

    function handleComprar (event, produto) {
      event.preventDefault();
      // Adicionar o prduto
      props.adicionarProduto(produto);
      // Exibir mensagem
      props.exibirMensagem(produto);
    }

    const render = () => {
        let key = 1;
        const cards = produtos.map(produto => 

            <Card 
                key={key}
                data-testid={'card' + key++}
                style={{width: '18rem', margin: '10px', float: 'left'}}>
                <Card.Img variant="top" src={img} />
                <Card.Body className="text-center">
                    <Card.Title style={{height: '40px'}}>
                        {produto.nome}
                    </Card.Title>
                    <Card.Text>
                        Descrição do produto..
                    </Card.Text>
                    <Button variant="success" style={{width: '100%', justifyContent: 'center'}} onClick={(event) => handleComprar(event, produto)}>
                        Comprar ({produto.preco})
                    </Button>
                </Card.Body>
            </Card>
        );
         
        return cards;
    }
    
    return render();
}

ListarProdutos.protoTypes = {
    adicionarProduto: PropTypes.func.isRequired,
    exibirMensagem: PropTypes.func.isRequired
}

export default ListarProdutos;