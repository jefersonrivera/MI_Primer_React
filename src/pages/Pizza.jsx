import React, { useContext, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

const Pizza = () => {
  const [pizza, setPizza] = useState({});
  const { id } = useParams();
  const { incrementCount } = useContext(CartContext);
  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
      });
  });

  return (
    <div className="m-2 border rounded d-flex flex-column">
      <div className="d-flex container-fluid justify-content-around p-4 align-items-center">
        <div>
          <img src={pizza.img} alt={pizza.id} width={300} />
        </div>
        <div className="ps-4">
          <h3>{pizza.name}</h3>
          <p>
            Precio: <strong>${pizza.price}</strong>
          </p>
          <p>
            Ingredientes:{" "}
            {pizza.ingredients?.join(", ") || "No ingredients listed."}
          </p>
          <p>{pizza.desc}</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <Button
          variant="dark"
          size="md"
          onClick={() => incrementCount(pizza.id)}
        >
          Añadir al carrito
        </Button>
      </div>
    </div>
  );
};

export default Pizza;
