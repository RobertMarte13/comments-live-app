import { useState } from "react";
import { loginService } from "../../services/services";
import { Link, useNavigate } from "react-router-dom";

// Estilos
import WarningSvg from "../svg/WarningSvg";
import { errorStyle } from "./styleAuth/style";
import imgLogo from "../../assets/logo.png";
import "../../styles/autenticacion.css";

const Login = ({ setIsValid, updateDate, isValidation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    loginService(username, password)
      .then((res) => {
        setIsValid(res.isValidation);
        updateDate(res);
        if (res !== undefined && res !== null) {
          return navigate("/");
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
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
        <p className="title-autenticated">Log In To Comments Live</p>
        {error ? (
          <div className="content-err" style={errorStyle}>
            <WarningSvg />
            <p style={{ paddingLeft: 4 }}>{error}</p>
          </div>
        ) : null}
        <input
          type="email"
          name="username"
          placeholder="example@gmail.com"
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
          <div style={{ paddingTop: 30, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <Link className="links-autenticated" to="/register">
              Sign Up For Comments Live
            </Link>
            <Link className="links-autenticated" to="/new_password">
              Did you forget your password?
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
