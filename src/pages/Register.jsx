import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const RegisterPage = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    register,
    success,
    confirmPassword,
    setConfirmPassword,
  } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="p-3">
          <label>Contraseña:</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="p-3">
          <label>Confirmar Contraseña:</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit">Registrar</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
