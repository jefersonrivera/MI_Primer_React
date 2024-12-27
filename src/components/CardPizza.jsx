import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ pizza }) => {
  const { pizzaCount, setPizzaCount } = useContext(CartContext);
  const { setTotalCart } = useContext(CartContext);
  const { pizzas } = useContext(CartContext);

  function incrementCount(id) {
    const existingPizza = pizzaCount.find((item) => item.id === id);

    if (existingPizza) {
      const updatedCart = pizzaCount.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
      setPizzaCount(updatedCart);
      calculateTotal(updatedCart);
    } else {
      const pizzaToAdd = { ...pizza, count: 1 }; // Agrega la pizza con cantidad inicial
      const updatedCart = [...pizzaCount, pizzaToAdd];
      setPizzaCount(updatedCart);
      calculateTotal(updatedCart);
    }
  }

  function calculateTotal(updatedCart) {
    const total = updatedCart.reduce(
      (sum, pizza) => sum + pizza.price * pizza.count,
      0
    );
    setTotalCart(total);
  }
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
        <button className="btn btn-primary">Ver más</button>
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
