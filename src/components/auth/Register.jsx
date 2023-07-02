import { useState } from "react";
import { registerService } from "../../services/services";
import { Link } from "react-router-dom";

// Estilos
import "../../styles/autenticacion.css";

// eslint-disable-next-line react/prop-types
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
        <h1 className="title-autenticated">Register</h1>
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
