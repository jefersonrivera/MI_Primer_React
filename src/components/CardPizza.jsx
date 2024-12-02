import React from "react";
import { Button, Card } from "react-bootstrap";

const CardPizza = ({ pizza }) => {
  return (
    <div className="card mx-2 my-3" style={{ width: "18rem" }}>
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.desc}</p>
        <p className="card-text">
          <strong>Ingredientes:</strong>{" "}
          {pizza.ingredients.map((ingredients, index) => {
            return <li className="fw-light">{ingredients}</li>;
          })}
        </p>
        <p>
          <strong>Precio:</strong> ${pizza.price.toLocaleString()}
        </p>
        <Button variant="light">Ver mas</Button>
        <Button variant="dark">Añadir</Button>
      </div>
    </div>
  );
};

export default CardPizza;
