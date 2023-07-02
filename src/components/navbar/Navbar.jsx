import { Link } from "react-router-dom";

const Navbar = ({ closedSession, isValidation }) => {
  console.log(isValidation);
  return (
    <>
      <nav>
        <ul>
          {!isValidation ? null : (
            <li>
              <Link to="/">Home</Link>
            </li>
          )}
          {!isValidation ? null : (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {!isValidation ? null : (
            <button onClick={closedSession}>Cerrar session</button>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
