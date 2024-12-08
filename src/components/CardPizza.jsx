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
        <button className="btn btn-primary">Ver más</button>
        <button className="btn btn-success mx-2">Añadir</button>
      </div>
    </div>
  );
};
export default CardPizza;
