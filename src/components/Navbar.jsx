import { Link } from "react-router-dom";
import "./Style.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { totalCart } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="container-fluid p-0 navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">
        🍕 Pizzería Mamma Mía
      </a>

      <div className="ms-auto d-flex align-items-center">
        <Link to="/" className="btn btn-outline-light mx-1">
          🍕 Home
        </Link>
        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light mx-1">
              🔓 Profile
            </Link>
            <Link
              variant="outline-light"
              className="btn btn-sm m-1 bg-dark text-decoration-none text-light border-light"
              onClick={logout}
            >
              🔒 Logout
            </Link>
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
          🛒 Total: ${totalCart.toLocaleString()}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
