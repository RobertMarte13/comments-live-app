import { useState } from "react";
import { setRegister } from "../../services/services";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ isValidation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegister(username, password);
    return navigate("/login");
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Create User</button>
      </form>
      {isValidation ? null : (
        <li>
          <Link to="/login">login</Link>
        </li>
      )}
    </div>
  );
};

export default Register;
