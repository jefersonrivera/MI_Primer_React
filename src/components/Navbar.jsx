import "./Style.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="container-fluid p-0 navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">
        🍕 Pizzería Mamma Mía
      </a>
      <Link to="/profile" className="btn btn-outline-light mx-1">
        Profile
      </Link>
      <div className="ms-auto d-flex align-items-center">
        <Link to="/" className="btn btn-outline-light mx-1">
          🍕 Home
        </Link>
        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light mx-1">
              🔓 Profile
            </Link>
            <button className="btn btn-outline-danger mx-1">🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-success mx-1">
              🔐 Login
            </Link>
            <Link to="/register" className="btn btn-outline-info mx-1">
              🔐 Register
            </Link>
          </>
        )}
        <Link to="/cart" className="btn btn-warning mx-1">
          🛒 Total: ${total.toLocaleString()}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
