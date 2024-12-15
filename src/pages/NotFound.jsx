import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center">
      <h1 className="display-3 text-danger">404</h1>
      <h2 className="mb-4">Página no encontrada</h2>
      <p className="mb-4 text-muted">
        La página que estás buscando no existe o ha sido movida.
      </p>
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
