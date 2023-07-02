import { useState } from "react";
import { loginService } from "../../services/services";
import { Link, useNavigate } from "react-router-dom";

// Estilos
import "../../styles/autenticacion.css";

// eslint-disable-next-line react/prop-types
const Login = ({ setIsValid, updateDate, isValidation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginService(username, password).then((res) => {
      setIsValid(res.isValidation);
      updateDate(res);
      if (res !== undefined && res !== null) {
        return navigate("/");
      }
    });
  };
  return (
    <div className="box-autenticated">
      <form className="form-autenticated" onSubmit={handleSubmit}>
        <h1 className="title-autenticated">Log In To AniSearch</h1>
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
          className="input-autenticated pswd"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-autenticated">Login</button>
        {isValidation ? null : (
          <Link className="links-autenticated" to="/register">
            Sign Up For AniSearch
          </Link>
        )}
      </form>
    </div>
  );
};

export default Login;
