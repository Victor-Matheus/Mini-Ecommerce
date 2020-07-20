import React from 'react';
import './mini-ecommerce.css';
import Menu from './components/menu/Menu';

function MiniEcommerce() {

  const [carriho, setCarrinho] = React.useState({products : []});
  const [exibirProdutos, setExibirProdutos] = React.useState(true);
  const [exibirCheckOut, setExibirCheckOut] = React.useState(true);
  const [valorTotal, setValorTotal] = React.useState('0,00');

  return (
    <div>
      <Menu />
    </div>
  );
}

export default MiniEcommerce;
