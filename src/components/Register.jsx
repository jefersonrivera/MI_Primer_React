import React, { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }
    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    setMessage("¡Registro exitoso!");
  };

  return (
    <div className="d-flex pt-5  flex-column align-items-center">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-3">
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="p-3">
          <label>Contraseña:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="p-3">
          <label>Confirmar Contraseña:</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit">Registrar</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegisterPage;
