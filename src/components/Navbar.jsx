import "./Style.css";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="container-fluid p-0 navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">
        🍕 Pizzería Mamma Mía
      </a>
      <div className="ms-auto d-flex align-items-center">
        <button className="btn btn-outline-light mx-1">🍕 Home</button>
        {token ? (
          <>
            <button className="btn btn-outline-light mx-1">🔓 Profile</button>
            <button className="btn btn-outline-danger mx-1">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-success mx-1">🔐 Login</button>
            <button className="btn btn-outline-info mx-1">🔐 Register</button>
          </>
        )}
        <button className="btn btn-warning mx-1">
          🛒 Total: ${total.toLocaleString()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
