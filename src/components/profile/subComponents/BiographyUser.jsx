import { Link } from "react-router-dom";
import UpdateSvg from "../../svg/UpdateSvg";
import imgUserOptional from "../../../assets/users_img_opcional.png";
import Followers from "./Followers";

const BiographyUser = ({
  img,
  frontPage,
  infoProfile,
  username,
  biografia,
  fecha,
  followers,
  userId,
}) => {
  return (
    <>
      <div className="content-img-header-profile">
        {frontPage !== "" ? (
          <div
            className="front-page"
            style={{ backgroundImage: `url(${frontPage})` }}
          ></div>
        ) : (
          <div
            className="front-page"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/vector-premium/fondo-dibujo-brillo-cielo-azul_659844-280.jpg?w=2000)",
            }}
          ></div>
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

          {/* Este codigo me permite obtener los followers de los perfiles personales y mostrarlos. */}
          <Followers
            followers={followers}
            userId={userId}
          />

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
