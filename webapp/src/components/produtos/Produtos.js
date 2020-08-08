import React from "react";
import ListarProdutos from "./ListarProdutos";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

function Produtos(props) {
  const [showMsg, setShowMsg] = React.useState(false);
  const [produto, setProduto] = React.useState("");

  function visivel() {
    return props.visivel ? null : "hidden";
  }

  function exibirMensagem(produto) {
    setShowMsg(true);
    setProduto(produto.nome);
    setTimeout(() => {
      setShowMsg(false);
    }, 3000);
  }

  return (
    <div className={visivel()} style={{marginLeft: "3.5rem", marginTop: "5rem"}}>
      <Alert variant="success" style={{ position: "fixed", zIndex: "2", backgroundColor: "green", color: "white"}} show={showMsg}>
        <b>{produto}</b> foi adicionado ao carrinho.
      </Alert>
      <ListarProdutos
        exibirMensagem={exibirMensagem}
        adicionarProduto={props.adicionarProduto}
      />
    </div>
  );
}

Produtos.propTypes = {
  visivel: PropTypes.bool.isRequired,
  adicionarProduto: PropTypes.func.isRequired,
};

export default Produtos;
