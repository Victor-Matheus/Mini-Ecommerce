import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";

function Menu() {
  return (
    <div className="menu">
      <h1>Menu</h1>
      <div className="search">
        <SearchIcon fontSize="large" />
        <div>
          <input st/>
        </div>
      </div>
      <div className="cart">
        <ShoppingCartOutlinedIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Menu;
