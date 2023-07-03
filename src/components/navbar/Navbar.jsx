import { Link } from "react-router-dom";

const Navbar = ({ closedSession, isValidation }) => {
  return (
    <>
      <nav className="navbar">
        <ul className="content-ul">
          {!isValidation ? null : (
            <li className="content-li">
              <Link className="links-navbar" to="/">Home</Link>
            </li>
          )}
          {!isValidation ? null : (
            <li className="content-li">
              <Link className="links-navbar" to="/profile">Profile</Link>
            </li>
          )}
          {!isValidation ? null : (
            <li className="content-li">
              <Link className="links-navbar" to="/createComments">Create Comment</Link>
            </li>
          )}
          {!isValidation ? null : (
            <button className="btn-session" onClick={closedSession}>Cerrar session</button>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
