import { Link } from "react-router-dom";
import { contentHeaderNavbar, styleTitleLogo } from "../home/styles/styles";

// eslint-disable-next-line react/prop-types
const NavbarMobile = ({
  username,
  imgUser,
  closedSession,
  isValidation,
  isActive,
}) => {
  return (
    <>
      <nav
        className="navbar navbar-mobile"
        style={
          isActive
            ? { display: "flex", opacity: 1, visibility: "visible" }
            : { display: "none", opacity: 0, visibility: "none" }
        }
      >
        <ul className="content-ul" id="content-ul ">
          <div style={contentHeaderNavbar}>
            {/* <img
              style={{
                width: 50,
                height: 50,
              }}
              src="/logo-commentsLive.png"
              alt="logo comments live"
            /> */}
            <h3 style={styleTitleLogo}><span style={{ color:'#227ef0' }}>Comments</span> Live</h3>
          </div>
          {!isValidation ? null : (
            <li className="content-li">
              <Link className="links-navbar" to="/">
                Home
              </Link>
            </li>
          )}
          {!isValidation ? null : (
            <li className="content-li">
              <Link className="links-navbar" to="/rankings_comments">
                Ranking
              </Link>
            </li>
          )}
          {!isValidation ? null : (
            <li className="content-li">
              <Link className="links-navbar" to="/createComments">
                Create Comment
              </Link>
            </li>
          )}
          {!isValidation ? null : (
            <li className="content-li box-link-perfil">
              <Link className="links-navbar link-perfil" to="/profile">
                @{username}
                <img
                  className="img-perfil"
                  src={imgUser}
                  alt="imagen de perfil"
                />
              </Link>
            </li>
          )}
          {!isValidation ? null : (
            <button className="btn-session" onClick={closedSession}>
              Cerrar session
            </button>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavbarMobile;
