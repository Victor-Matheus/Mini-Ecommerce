import React from 'react';
import './mini-ecommerce.css';
import Menu from './components/menu/Menu';
import Produtos from './components/produtos/Produtos';
import Checkout from './components/checkout/Checkout';
import { checkPropTypes } from 'prop-types';
import ListarProduto from './components/produtos/ListarProdutos';
 
function MiniEcommerce() {

  const [carrinho, setCarrinho] = React.useState({Produtos : []});
  const [exibirProdutos, setExibirProdutos] = React.useState(true);
  const [exibirCheckOut, setExibirCheckOut] = React.useState(false);
  const [valorTotal, setValorTotal] = React.useState('0,00');


  function adicionarProduto(produto){
    // Fazer a cópia do carrinho
    const objCarrinho = Object.assign({}, carrinho); /*Juntando um objeto vazio ao carrinho == criando 
                                                       uma cópia do carrinho para alteração segura*/
    // Atualizar o carrinho
    let novoProduto = true;
    objCarrinho.Produtos.forEach((prod, index) => {
      if(prod.nome === produto.nome){
        objCarrinho.Produtos[index].quantidade++;
        novoProduto=false;
      }
    });

    // Adicionar novo produto ao carrinho
      if(novoProduto) {
        objCarrinho.Produtos.push({
          nome: produto.nome,
          preco: produto.preco,
          quantidade: 1
        })
      }
    setCarrinho(objCarrinho);
    console.log(carrinho)
  }


  return (
    <div className="content">
      <Menu />
      <Produtos 
      visivel={exibirProdutos}
      adicionarProduto={adicionarProduto}/>
      <Checkout />
    </div>
  );
}

export default MiniEcommerce;
