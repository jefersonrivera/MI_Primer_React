import React, { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Validaciones
    if (!email || !password) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }
    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setMessage("¡Inicio de sesión exitoso!");
  };

  return (
    <div className="d-flex pt-5  flex-column align-items-center ">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div
          className="p-2
        "
        >
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <label>Contraseña:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginPage;
