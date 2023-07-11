import { Link } from "react-router-dom";
import UpdateSvg from "../../svg/UpdateSvg";
import imgUserOptional from "../../../assets/users_img_opcional.png"

// eslint-disable-next-line react/prop-types
const BiographyUser = ({ img, infoProfile, username, biografia, fecha }) => {

  console.log(img !== '')
  return (
    <>
      <div className="content-img-header-profile">

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
