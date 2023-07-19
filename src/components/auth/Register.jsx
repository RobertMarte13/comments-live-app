import { useState } from "react";
import { registerService } from "../../services/services";
import { Link } from "react-router-dom";

import imgLogo from "../../assets/logo.png";

// Estilos
import "../../styles/autenticacion.css";

const Register = ({ isValidation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    registerService(username, password);
  };
  return (
    <div className="box-autenticated">
      <form className="form-autenticated" onSubmit={handleSubmit}>
        <img
          src={imgLogo}
          alt="Logo de la pagina"
          width="100px"
          height="100px"
          style={{ borderRadius: "10%" }}
        />
        <h1 className="title-autenticated" style={{textAlign: 'center'}}>Register In To Comments Live</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="input-autenticated txt"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="input-autenticated 
          pswd"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-autenticated">Create User</button>
        {isValidation ? null : (
          <Link className="links-autenticated" to="/login">
            login
          </Link>
        )}
      </form>
    </div>
  );
};

export default Register;
