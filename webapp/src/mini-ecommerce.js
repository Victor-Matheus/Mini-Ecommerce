import React from 'react';
import './mini-ecommerce.css';
import Menu from './components/menu/Menu';
import Produtos from './components/produtos/Produtos';
import Checkout from './components/checkout/Checkout';
import { checkPropTypes } from 'prop-types';
import ListarProduto from './components/produtos/ListarProdutos';
 
function MiniEcommerce() {

  const [carriho, setCarrinho] = React.useState({products : []});
  const [exibirProdutos, setExibirProdutos] = React.useState(true);
  const [exibirCheckOut, setExibirCheckOut] = React.useState(false);
  const [valorTotal, setValorTotal] = React.useState('0,00');

  return (
    <div>
      <Menu />
      <Produtos />
      <Checkout />
    </div>
  );
}

export default MiniEcommerce;
