import React from "react";

import "./Style.css";
const Header = () => {
  return (
    <header
      className="text-white text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
      }}
    >
      <h1 className="display-4 text-shadow">
        ¡Bienvenidos a Pizzería Mamma Mía!
      </h1>
      <p className="lead text-shadow">
        Las mejores pizzas al alcance de un clic. ¡Prueba nuestros sabores
        únicos!
      </p>
    </header>
  );
};

export default Header;
