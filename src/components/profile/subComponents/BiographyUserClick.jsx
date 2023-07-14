import ArrowBack from "../../svg/ArrowBack";

import imgUserOptional from "../../../assets/users_img_opcional.png";

const BiographyUserClick = ({ dataUsers, setIsActive, isActive }) => {
  return (
    <>
      <div className="content-img-header-profile">
        {dataUsers !== "" ? (
          <div
            className="front-page"
            style={{ backgroundImage: `url(${dataUsers.front_page})` }}
          ></div>
        ) : (
          <div
            className="front-page"
            style={{backgroundImage: "url(https://img.freepik.com/vector-premium/fondo-dibujo-brillo-cielo-azul_659844-280.jpg?w=2000)"}}
          ></div>
        )}
      </div>
      <div className="content-biografia">
        <div className="box-img-link">
          <div className="box-img-link">
            {dataUsers.img !== "" ? (
              <img
                className="img-perfil"
                src={dataUsers !== null ? dataUsers.img : null}
                alt="Avatar"
              />
            ) : (
              <img
                className="img-perfil"
                src={imgUserOptional}
                alt="Imagen perfil"
              />
            )}
          </div>
        </div>
        <div>
          <div className="content-btn-back-profile">
            <button
              className="btn-back-perfil"
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              <ArrowBack />
            </button>
          </div>
          <p>@{dataUsers !== null ? dataUsers.user : null}</p>

          <div className="content-bio">
            <h3>Biografia</h3>
            <p>{dataUsers !== null ? dataUsers.bio : null}</p>
            <h3 className="fechaNacimiento">
              Fecha de Nacimiento:{" "}
              {dataUsers !== null ? dataUsers.fechaNacimiento : null}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BiographyUserClick;
