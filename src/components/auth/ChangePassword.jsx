import { useState } from "react";
import { setNewPassword } from "../../services/services";

import "../../styles/autenticacion.css";
import { errorStyle, successStyle } from "./styleAuth/style";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ChangePassword = ({ isValidation }) => {
  const [email, setEmail] = useState(null);
  const [newPassword, setPassword] = useState(null);
  const [checked, setChecked] = useState(null);

  const [sucessMessage, setSucessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewPassword(email, newPassword).then((res) => {
      if (res.data.message.length > 7) {
        setSucessMessage(null);
        return setErrorMessage(res.data.message);
      }

      if (checked) {
        setSucessMessage(res.data.message);
        setErrorMessage(null);
      } else {
        setSucessMessage(null);
        return setErrorMessage(
          "You forgot to check the box after the password!"
        );
      }
    });
  };

  function controllerErrorAndSucess() {
    if (sucessMessage !== null) {
      return (
        <div style={successStyle}>
          <h3 style={{ textAlign: "center" }}>{sucessMessage}</h3>
          {/* <Navigate to='/login' /> */}
        </div>
      );
    }

    if (errorMessage !== null) {
      return (
        <div className="content-err" style={errorStyle}>
          <h3 style={{ textAlign: "center" }}>{errorMessage}</h3>
        </div>
      );
    }

  }

  return (
    <div className="box-autenticated">
      <form className="form-autenticated" onSubmit={handleSubmit}>
        <p className="title-autenticated">Change Password</p>
        {/* NOTA: IMPORTANTE!! aqui debe haber mas validaciones para que funciones mejor. */}
        {sucessMessage === null ? controllerErrorAndSucess() : controllerErrorAndSucess()}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          className="input-autenticated txt"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          className="input-autenticated pswd"
          placeholder="New Password"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <div className="content-checkbox">
          <label className="title-checkbox" htmlFor="checkbox">
            <strong>
              No eres un <code style={{ fontSize: 17 }}>Robot</code>?
            </strong>
          </label>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="checkbox-autenticated"
            onChange={(event) => setChecked(event.target.checked)}
          />
        </div>
        <button className="btn-autenticated">Request new password</button>
        {isValidation ? null : (
          <Link className="links-autenticated" to="/login">
            login
          </Link>
        )}
      </form>
    </div>
  );
};

export default ChangePassword;
