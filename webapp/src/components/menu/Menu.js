import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Menu() {
  return (
    <div className="menu">
      <h2 style={{paddingTop: "0.5rem", color: "#D9D9D9"}}>Ecommerce</h2>
      <div className="search">
        <SearchIcon fontSize="large" style={{color: "#D9D9D9"}}/>      
        <input className="input" placeholder="Buscar" style={{borderRadius: "0.5rem", border: "1.5px solid #D9D9D9", height: "2rem"}}/>
      </div>
      <div className="person-icon">
          <PersonOutlineIcon fontSize="large" />
      </div>
      <div className="cart">
        <ShoppingCartOutlinedIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Menu;
