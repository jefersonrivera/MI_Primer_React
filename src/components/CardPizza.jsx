import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CardPizza = ({ pizza, index }) => {
  const { incrementCount } = useContext(CartContext);

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
        <Link to={`/pizza/${pizza.id}`} className="btn bg-light text-dark">
          {" "}
          Ver Más
        </Link>
        <button
          onClick={() => incrementCount(pizza.id)}
          className="btn btn-success mx-2"
        >
          Añadir
        </button>
      </div>
    </div>
  );
};
export default CardPizza;
