import { Link } from "react-router-dom";

const NavbarMobile = ({ closedSession, isValidation, isActive }) => {
  return (
    <>
      <nav className="navbar navbar-mobile" style={isActive ? {display: 'flex', opacity: 1, visibility: 'visible'} : {display: 'none', opacity: 0, visibility: 'none'}}>
        <ul className="content-ul" id="content-ul ">
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

export default NavbarMobile;
