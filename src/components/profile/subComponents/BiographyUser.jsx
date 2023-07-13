import { Link } from "react-router-dom";
import UpdateSvg from "../../svg/UpdateSvg";
import imgUserOptional from "../../../assets/users_img_opcional.png";

const BiographyUser = ({
  img,
  frontPage,
  infoProfile,
  username,
  biografia,
  fecha,
}) => {
  return (
    <>
      <div className="content-img-header-profile" >
        {frontPage !== "" ? (
          <img className="front-page" src={frontPage} alt="front-page" />
        ) : (
          <img className="front-page" src="https://img.freepik.com/vector-premium/fondo-dibujo-brillo-cielo-azul_659844-280.jpg?w=2000" alt="front-page" />
        )}
      </div>
      <div className="content-biografia">
        <div className="box-img-link">
          {img !== "" ? (
            <img className="img-perfil" src={img} alt="Imagen perfil" />
          ) : (
            <img
              className="img-perfil"
              src={imgUserOptional}
              alt="Imagen perfil"
            />
          )}
          {infoProfile !== undefined ? (
            <nav>
              <Link to="/config_profile_update" className="box-config-prof">
                Actualizar Perfil <UpdateSvg />
              </Link>
            </nav>
          ) : null}
          {infoProfile !== undefined ? null : (
            <nav>
              <Link className="box-config-prof" to="/config_profile">
                configurar perfil
              </Link>
            </nav>
          )}
        </div>
        <div>
          <p className="username">@{username}</p>
          <h3>Biografia</h3>
          <p>{biografia}</p>
          <h3 className="fechaNacimiento">Fecha de Nacimiento: {fecha}</h3>
        </div>
      </div>
    </>
  );
};

export default BiographyUser;
