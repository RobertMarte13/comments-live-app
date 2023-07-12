import { Link } from "react-router-dom";
import UpdateSvg from "../../svg/UpdateSvg";
import imgUserOptional from "../../../assets/users_img_opcional.png";

const img_3 = {
  backgroundImage: 'url(https://pm1.aminoapps.com/7660/f12308c69e0fac27a86e4757518931929b0dbc73r1-1920-1920v2_hq.jpg)',  
  backgroundPosition: 'center',
}

const BiographyUser = ({ img, infoProfile, username, biografia, fecha }) => {

  return (
    <>
      <div className="content-img-header-profile" style={img_3}>

        <select id="select">
          <option value='imagen_1'>imagen 1</option>
          <option value='imagen_2'>imagen 2</option>
          <option value='imagen_3'>imagen 3</option>
        </select>
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
