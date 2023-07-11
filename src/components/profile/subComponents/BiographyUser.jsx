import { Link } from "react-router-dom";
import UpdateSvg from "../../svg/UpdateSvg";

// eslint-disable-next-line react/prop-types
const BiographyUser = ({ img, infoProfile, username, biografia, fecha }) => {
  return (
    <div className="content-biografia">
      <div className="content-img-header-profile">

      </div>
      <div className="box-img-link">
        <img className="img-perfil" src={img} alt="Imagen de perfil" />
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
  );
};

export default BiographyUser;
